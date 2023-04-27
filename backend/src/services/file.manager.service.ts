
import fs from 'fs/promises'
import { v4 as uuid } from 'uuid';

class FileManagerService {

    constructor() {

    }

    public async create(lang, code): Promise<{ success: boolean; path: string }> {
        try {
            const extensionMap = {
                'python': 'py',
                'node': 'js',
                'typescript': 'ts',
                'golang': 'go'
            }
            const path = `./files/${uuid()}.${extensionMap[lang]}`
            await fs.writeFile(path, code)
            return { success: true, path }
        } catch (error) {
            return { success: false, path: null }
        }
    }

    public async remove(path) {

        try {
            await fs.unlink(path)
            return { success: true }
        } catch (error) {
            console.log(error)
            return { success: false }
        }
        
    }
}

export default FileManagerService;