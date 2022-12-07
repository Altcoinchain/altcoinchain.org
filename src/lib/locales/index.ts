import fs from 'fs';
import path from 'path';
import { MessageFormatElement } from 'react-intl';
import { DEFAULT_LOCALE } from '@/common/constants';

export const getLocaleMessagesFromFiles = (
    locale = DEFAULT_LOCALE
): Record<string, string> | Record<string, MessageFormatElement[]> => {
    const dir = path.resolve(process.cwd(), `locales/${locale}/`);
    const files = fs.readdirSync(dir);

    let messages = {};

    for (const fileName of files) {
        const filePath = path.join(dir, fileName);
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });
        const obj = JSON.parse(data);

        messages = {
            ...messages,
            ...obj,
        };
    }

    return messages;
};

export const getLocaleMessagesFromSelectedFiles = async (
    locale = DEFAULT_LOCALE,
    fileNames: string[]
): Promise<Record<string, string> | Record<string, MessageFormatElement[]>> => {
    const dir = path.resolve(process.cwd(), `locales/${locale}/`);
    const files = fs.readdirSync(dir);

    fileNames.push('common');
    let messages = {};

    for (const fileName of files) {
        const filePath = path.join(dir, fileName);

        if (
            fileNames.length > 0 &&
            !fileNames.includes(path.basename(fileName, '.json'))
        ) {
            continue;
        }

        const data = await fs.promises.readFile(filePath, { encoding: 'utf8' }); //fs.readFileSync(filePath, { encoding: 'utf8' });
        const obj = JSON.parse(data);

        messages = {
            ...messages,
            ...obj,
        };
    }

    return messages;
};
