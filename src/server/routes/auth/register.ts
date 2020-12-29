import db from '../../db';
import { Router } from 'express';
import { generateHash } from '../../utils/passwords';
import { createToken } from '../../utils/tokens';

const router = Router();

router.post('/', async (req, res) => {
    const newAuthorDTO = req.body;
    newAuthorDTO.password = generateHash(newAuthorDTO.password);

    try {
        const cannedResponse = await db.authors.insert(newAuthorDTO);
        const token = createToken({ userid: cannedResponse.insertId });
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Register Error', error: error.message })
    }
})

export default router;