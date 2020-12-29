import { Router } from 'express';
import authorRouter from './authors';
import blogsRouter from './blogs';

const router = Router();

router.use('/authors', authorRouter);
router.use('/blogs', blogsRouter);

export default router;