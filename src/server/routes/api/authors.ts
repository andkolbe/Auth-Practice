import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const authors = await db.authors.all();
        res.json(authors);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Nope', error: error.message })

    }
})

router.post('/', async (req, res) => {
    const authorDTO = req.body;
    try {
        const { insertId } = await db.authors.insert(authorDTO);
        res.json({ msg: 'resgistered author', id: insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Nope', error: error.message })
    }
})

export default router;