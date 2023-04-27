import { Router } from "express";
import IndexController from "../controllers/index.controller";
import { JoiValidator } from "../validators";
import RunCodeRequestValidator from "../validators/RunCodeRequestValidator";


class IndexRouter {

    public path = ''
    public router
    private controller = new IndexController();
    constructor(router) {
        this.router = router
        this.router.post(`${this.path}/run-code`,
            JoiValidator(RunCodeRequestValidator),
            this.controller.runCode
        )
    }

}

export default IndexRouter;