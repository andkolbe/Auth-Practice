import * as React from 'react';
import { useState } from 'react';
import api from '../utils/api-service';

const Contact = (props: ContactProps) => {
    
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await api('/api/contact', 'POST', { email, subject: title, content })
        console.log(result);
        setEmail('');
        setTitle('');
        setContent('');
    }


    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <form className="form-group border p-4 shadow bg-white font-weight-bold">
                        <div className="mb-4">
                            <label htmlFor="emailaddres" className="form-label">Email Address</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email@email.com" className="form-control mb-3 bg-warning" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} className="form-control bg-warning"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="form-label">Content</label>
                            <textarea value={content} onChange={e => setContent(e.target.value)} rows={8} className="form-control bg-warning" />
                        </div>
                        <button onClick={handleSubmit} className="btn btn-success">Submit</button>
                    </form>
                </div> 
            </section> 
        </main>
    );

}

interface ContactProps {}

export default Contact;