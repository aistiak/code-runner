
import Manager from '../services/manager.service';

class IndexController {

    public async runCode(req , res, next) {

        try {
            // console.log(req.body) 
            // return res.sendStatus(200)
            const {lang , code } = req.body ;
            const res1 = await Manager.getOutput(lang,code);
            return res.status(200).json(res1)
        }catch(error){
            next(error)
        }
    }
}

export default IndexController ;