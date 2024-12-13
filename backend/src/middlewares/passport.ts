import passport from 'passport';
import { setupJwtStrategy } from '../logic/jwt';

const intializePassport = () => {
  setupJwtStrategy(passport);
};

intializePassport();
export default passport;
