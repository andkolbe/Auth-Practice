import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [blog] = await db.blogs.one(id);
            res.json(blog);
        } else {
            const blogs = await db.blogs.all();
            res.json(blogs);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
});

router.post('/', passport.authorize('jwt') ,async (req, res) => {
    const BlogDTO = req.body;
    try {
        BlogDTO.authorid = 1;
        const result = await db.blogs.insert(BlogDTO);
        res.json(result);
    } catch (error) {
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
});

router.put('/:id', passport.authorize('jwt') ,async (req, res) => {
    try {
        const id = Number(req.params.id);
        const blogDTO = req.body;
        const result = await db.blogs.update(id, blogDTO);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
});

router.delete('/:id', passport.authorize('jwt') ,async (req, res) => {
    try {
        const id = Number(req.params.id);
        await db.blogs.destroy(id);
        res.json({ msg: 'You have been banished to the shadow realm!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

export default router;