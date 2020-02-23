import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtPayload } from "../interfaces/jwt-payload";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'topSecret51',
    });
  }

  async validate(payload: JwtPayload) {
    const { username } = payload;
    const user = this.userRepository.findOne({ username })


    // perhaps do a similar admin check from like this
    // https://github.com/Theodo-UK/nestjs-admin/blob/master/src/adminAuth/local.strategy.ts
    if (!username) {
      throw new UnauthorizedException()
    }

    return user;
  }
}
