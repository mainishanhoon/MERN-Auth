import { SessionController } from './controller';
import { SessionService } from './service';

const sessionService = new SessionService();
const sessionController = new SessionController(sessionService);

export { sessionService, sessionController };
