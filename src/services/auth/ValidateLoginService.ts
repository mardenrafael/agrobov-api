import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export class ValidateLogin {
  public async validate(req: Request, res: Response, next: NextFunction): Promise<Error | NextFunction | void> {
    const token = req.headers.authorization;
    
    if(!token) {
      res.status(401).json({
        Error: "Unhautorized"
      })
      return
    }

    try {

      jwt.verify(token, process.env.JWT_SECRET!)
      
      next()

    } catch(err){
      
      res.status(401).json({
        Error: "Unhautorized"
      })

      return
    }
  }
}
