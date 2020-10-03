import {Request, Response} from 'express';
import {ICommonCrudController} from '../models/interfaces';

// This will be the parent class that hold common crud functionality.
export default class CommonCrud implements ICommonCrudController {

  // index
  Index = (req: Request, res: Response, arg: any):void => {
    if (! arg.model) {
      process.stderr.write('No Model Provided to commonCrud');
      res.status(500).json({error: "No model provided for CRUD function."});
    } else {
      arg.model.find({}, (err:any, result: any) => {
        if (err) {
          res.status(500).json({message: "Sorry! we had something go wrong server side!"});
        } else {
          res.status(200).json({documents: result});
        }
      });
    }
  }

  // show
  Show = (req: Request, res: Response, arg: any):void => {
    if (! arg.model) {
      process.stderr.write('No Model Provided to commonCrud');
      res.status(500).json({error: "No model provided for CRUD function."});
    } else {
      arg.model.findOne({_id: req.params.userId}, (err: any, result: any) => {
        if (err) {
          res.status(500).json({message: "Sorry! we had something go wrong!"});
        } else {
          res.status(200).json({user: result});
        }
      });
    }
  }

  // create
  Create = (req: Request, res: Response, arg: any):void => {
    if (! arg.model) {
      process.stderr.write('No Model Provided to commonCrud');
      res.status(500).json({error: "No model provided for CRUD function."});
    } else {
      const newDoc = new arg.model(req.body);
      newDoc.save((err: any, doc: any) => {
      if (err) {
        res.status(500).json({message: "Sorry! we had something go wrong!"});
      } else {
        res.status(200).json({message: `Document created: ${doc}`});
      }
     });
    }
  }

  // update
  Update = (req: Request, res: Response, args: any):void => {
    if (! args.model) {
      process.stderr.write('No Model Provided to commonCrud');
      res.status(500).json({error: "No model provided for CRUD function."});
    } else {
      args.model.updateOne({_id: req.params.docId}, req.body, (err: any, doc: any) => {
        if (err) {
          res.status(500).json({message: "Sorry! we had something go wrong! update declined!"});
         } else {
          res.status(200).json({message: `Document updated: ${doc}`});
         }
      });
    }
  }

  // delete
  Delete = (req: Request, res: Response, args: any):void => {
    if (! args.model) {
      process.stderr.write('No Model Provided to commonCrud');
      res.status(500).json({error: "No model provided for CRUD function."});
    } else {
      args.model.findOne({_id: req.params.docId}, (err: any, doc: any) => {
        if (err) {
          res.status(500).json({message: "Uh Oh! that document doesnt exist!"});
        } else {
          doc.remove((error: any) => {
            if (error) {
              res.status(500).json({message: "Uh Oh! something went wrong!"});
            } else {
              res.status(200).json({message: "exercise destroyed!"});
            }
          });
        }
      });
    }
  }
}