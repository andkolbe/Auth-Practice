import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [blogtags] = await db.blogtags.oneBlogTag(id);
        res.json(blogtags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks :(', error: error.message });
    }
})

router.post('/', async (req, res) => {
    const { blogid, tagid } = req.body;
    try {
        await db.blogtags.insert(blogid, tagid)
        res.json({ msg: 'blogtag created' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks :(', error: error.message });
    }
})

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const tagDTO = req.body;
    try {
        await db.blogtags.update(tagDTO.newId, tagDTO.oldId, id);
        res.json({ msg: 'blogtag(s) changed' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks :(', error: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await db.blogtags.destroy(id);
        res.json({ msg: 'blogtag destroyed' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks :(', error: error.message })
    }
})

export default router;