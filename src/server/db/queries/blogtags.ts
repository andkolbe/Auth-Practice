import { Query } from '../';

const oneBlogTag = (blogid: number) => Query('CALL spBlogTags(?)', [blogid]);
const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?, ?)', [blogid, tagid]);
const update = (newId: number, oldId: number, blogid: number) => Query('UPDATE blogtags SET tagid = ? WHERE blogid = ? AND tagid = ?', [newId, blogid, oldId]);
const destroy = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid]);

export default {
    oneBlogTag,
    insert,
    update,
    destroy
}

 