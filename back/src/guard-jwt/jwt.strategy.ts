import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt';
import { RequestCookie } from "src/interfaces/cookie_request";

interface payloadProps{
    id: number,
    role: string
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromExtractors([(request: RequestCookie) => {
            return request.cookies?.jwt
          }]),
          ignoreExpiration: false,
          secretOrKey: process.env.SECRET_KEY,
        });
      }
    
      async validate(payload: payloadProps) {
        return { id: payload.id, role: payload.role };
      }
}