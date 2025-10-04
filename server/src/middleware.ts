import { NextFunction, Request, Response  } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';


export const userMiddleware = (req : Request, res : Response, next : NextFunction) => {
    const token  = req.headers["authorization"];   
        const decoded = jwt.verify(token as string , process.env.JWT_SECRET as string) as JwtPayload | null;
        if(decoded){
            req.userId = decoded.id ;
            next();
        }
        else {
            res.status(401).json({"message" : "You are not loggedIn"})
        }
    


}

// override the types of the express request objects 