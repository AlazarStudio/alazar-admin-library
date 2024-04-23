export default async function getAllFilesFromRepo(owner, repo, path = '') {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const options = {
      headers: {
        'User-Agent': 'request',
        // Если вам нужна аутентификация:
        // 'Authorization': 'token YOUR_GITHUB_TOKEN'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.status >= 400) {
        throw new Error(data.message);
      }
  
      // Фильтрация для получения массива файлов с метаданными
      let files = data.filter(item => item.type === 'file');
  
      // Для каждой папки рекурсивно получаем её содержимое
      const folders = data.filter(item => item.type === 'dir');
      for (const folder of folders) {
        const moreFiles = await getAllFilesFromRepo(owner, repo, folder.path);
        files = files.concat(moreFiles);
      }
  
      return files;
    } catch (error) {
      console.error('Ошибка при получении файлов из репозитория:', error.message);
      return [];
    }
  }
  