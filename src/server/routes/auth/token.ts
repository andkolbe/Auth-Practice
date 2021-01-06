import * as passport from 'passport';
import { Router } from 'express';


const router = Router();

// GET auth/token/verify
router.get('/verify', passport.authenticate('jwt'), async (req, res) => res.sendStatus(200));

export default router;