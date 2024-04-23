export default async function getCurrentVersion() {
    const versionFileUrl = '../alazar-admin-library/version.json';

    try {
        const response = await fetch(versionFileUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Проблема при загрузке версии библиотеки:', error);
    }
}
