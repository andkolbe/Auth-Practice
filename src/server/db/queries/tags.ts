import { Query } from '../';
import type { TTags, CannedResponse } from '../models';

const all = () => Query<TTags[]>('SELECT * FROM tags');
const insert = (newTag: any) => Query<CannedResponse>('INSERT INTO tags SET ?', [newTag]);

export default {
    all, 
    insert
}