import { Router } from 'express';
import authorRouter from './authors';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import contactRouter from './contact';
import donateRouter from './donate';
import tagsRouter from './tags';

const router = Router();

router.use('/authors', authorRouter);
router.use('/blogs', blogsRouter);
router.use('/blogtags', blogtagsRouter);
router.use('/contact', contactRouter);
router.use('/donate', donateRouter);
router.use('/tags', tagsRouter);

export default router;