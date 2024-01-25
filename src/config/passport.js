const passport = require('passport');
const passportJwt = require('passport-jwt');

const { ExtractJwt } = passportJwt;
const StrategyJwt = passportJwt.Strategy;
passport.use(
  new StrategyJwt (
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) =>{
      const user ={
        id: jwtPayload.id,
        role: jwtPayload.role,
      };
      done(null, user)
    }
  )
);