import { Router } from 'express';
import { mfaController } from './module';
import { authenticateJWT } from '../../logic/jwt';

const mfaRoutes = Router();

mfaRoutes.get('/setup', authenticateJWT, mfaController.generateMFASetup);
mfaRoutes.post('/verify', authenticateJWT, mfaController.verifyMFASetup);
mfaRoutes.put('/revoke', authenticateJWT, mfaController.revokeMFA);

mfaRoutes.post('/verify-login', mfaController.verifyMFAForLogin);

export default mfaRoutes;
