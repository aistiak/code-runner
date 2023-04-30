import RunnerInterface from "../../interfaces/runner.interface";
import {exec} from 'child_process'

class TypeScriptRunnerService implements RunnerInterface {
    async run(path: any): Promise<string> {
        try {
            const res1 = await (new Promise((resolve, reject) => {
                exec(`tsc ${path} & node ${path.replace('.ts','.js')}`, (error, stdout, stderr) => {
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

export default TypeScriptRunnerService ;