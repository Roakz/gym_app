import express, {Request, Response} from 'express'

const router: any = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
  })

 export default router