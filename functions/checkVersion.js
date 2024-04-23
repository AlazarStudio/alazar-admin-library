import getCurrentVersion from './getCurrentVersion.js';

export default async function checkVersion() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/AlazarStudio/alazar-admin-library/main/version.json');
        const lastVersion = await response.json();
        const currentVersion = await getCurrentVersion();

        let message = {
            thisVersion: currentVersion.version,
            lastVersion: lastVersion.version,
            updated: false,
        }

        if (lastVersion !== currentVersion) {
            message.updated = true;
            return message;
        }
    } catch (error) {
        console.error('Не удалось получить версию библиотеки:', error);
        return 'Ошибка при получении версии библиотеки';
    }
}
