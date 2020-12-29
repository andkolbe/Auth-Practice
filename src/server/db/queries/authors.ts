import { Query } from '../';
import { CannedResponse, TAuthors } from '../models';

const all = () => Query<TAuthors[]>('SELECT * FROM authors');

const one = (id: number) => Query<TAuthors[]>('SELECT * FROM authors WHERE id = ?', [id]);

const insert = (newAuthor: any) => Query<CannedResponse>('INSERT INTO authors SET ?', newAuthor);

const find = (column: string, value: string | number) => Query<TAuthors[]>('SELECT * FROM authors WHERE ?? = ?', [column, value]);


export default {
    all,
    one,
    insert,
    find
}