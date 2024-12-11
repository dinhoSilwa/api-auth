import { error } from "console";
import { Request, Response, NextFunction } from "express"
import { JWTservice } from "../utils/JWT";
export const AuthMiddleware = (req:Request, res : Response, next :NextFunction): void | any =>{

  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({error : "Não Autorizado"});

    const jwt = new JWTservice()
  try{
    const decode = jwt.verifyJWT(token);
    req.user = decode;
    next()
  }catch{
    res.status(401).json({error : `Invalid Token`})
  }

}