import RunnerInterface from "../interfaces/runner.interface";
import FileManagerService from "./file.manager.service";
import NodeRunnerService from "./runner/node.runner.service";
import PythonRunnerService from "./runner/python.runner.service";
import PythonRunner from "./runner/python.runner.service";



class Manager {


    public static async getOutput(lang, code): Promise<string> {

        const fileManagerService = new FileManagerService()
        const { success, path } = await fileManagerService.create(lang, code);
        console.log({success,path})
        if(!success) return 'error'
        const mp = {
            'python': PythonRunnerService,
            'node' : NodeRunnerService ,
        }
        const runner: RunnerInterface = new mp[lang]
        const out = await runner.run(path)
        await fileManagerService.remove(path)
        return out
    }
}
export default Manager ;