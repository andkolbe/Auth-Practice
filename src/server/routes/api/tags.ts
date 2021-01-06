import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const tags = await db.tags.all();
        res.json(tags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks :(', error: error.message });
    }
})

router.post('/', async (req, res) => {
    const tagDTO = req.body;
    try {
        const { insertId } = await db.tags.insert(tagDTO);
        res.json({ msg: 'Tag Added', id: insertId })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks :(', error: error.message });
    }
})

export default router;