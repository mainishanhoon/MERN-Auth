import { MfaController } from './controller';
import { MfaService } from './service';

const mfaService = new MfaService();
const mfaController = new MfaController(mfaService);

export { mfaService, mfaController };
