import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api-service';
import { ITag } from '../utils/types';

const NewPost: React.FC<NewPostProps> = props => {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedTagid, setSelectedTagid] = useState('0');

    const [tags, setTags] = useState<ITag[]>([]);

    useEffect(() => {
        api('/api/tags').then(tags => setTags(tags));
    }, [])

    const submitBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        api('/api/blogs', 'POST', { title, content })
            .then(blogPost => {
                if(selectedTagid !== '0') {
                    api('/api/blogtags', 'POST', { blogid: blogPost.insertId, tagid: selectedTagid })
                        .then(() => setSelectedTagid('0'))
                }
                history.push('/');
            }) 
    }

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                <form className="form-group border p-4 shadow bg-white">
                <label htmlFor="name" className="font-weight-bold">Title</label>
                <input placeholder="write title here..." value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control bg-warning" />
                <label htmlFor="selected tag" className="font-weight-bold mt-4">Tags</label>
                <select value={selectedTagid} onChange={e => setSelectedTagid(e.target.value)} className="form-control">
                    <option value="0">Select A Tag...</option>
                    {tags.map(tag => (
                        <option key={`tag-key-${tag.id}`} value={tag.id}>{tag.name}</option>
                    ))}
                </select>
                <label className="mt-4 font-weight-bold">Content</label>
                <textarea placeholder="write content here..." value={content} onChange={e => setContent(e.target.value)} rows={12} className="form-control my-1 bg-warning"></textarea>
                <button onClick={submitBlog} className="btn btn-success mt-4 font-weight-bold">Post</button>
            </form>
                </div>
            </section>
        </main>
    );

}

interface NewPostProps {}

export default NewPost;