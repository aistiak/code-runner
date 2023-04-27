
import fs from 'fs/promises'
import { exec } from 'child_process'
import RunnerInterface from '../../interfaces/runner.interface'
class PythonRunnerService implements RunnerInterface {

    public async run(path): Promise<string> {
        try {
            const res1 = await (new Promise((resolve, reject) => {
                exec(`python3 ${path}`, (error, stdout, stderr) => {
                    if (error) {
                        reject(error)
                    }
                    if (stderr) reject(stderr)
                    resolve(stdout)
                })
            }))
            // console.log({ res1 })
            return res1 as string
        } catch (error) {
            console.log(error)
            return error.toString()
        }
    }
}

export default PythonRunnerService;