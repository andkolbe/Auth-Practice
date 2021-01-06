import * as React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import type { IBlog, ITag } from '../utils/types'; 

const Details: React.FC<DetailsProps> = props => {
    const { id } = useParams<{id: string}>();
    const history = useHistory();

    const [blog, setBlog] = React.useState<IBlog>(null);
    const [blogtags, setBlogTags] = React.useState<ITag[]>([])

    React.useEffect(() => {
        const getBlog = async () => {
           const res = await fetch(`/api/blogs/${id}`)
           const blog = await res.json();
           const res2 = await fetch(`/api/blogtags/${id}`)
           const blogtags = await res2.json();           
           setBlog(blog);
           setBlogTags(blogtags);

        //    const [ blogRes, blogtagRes ] = await Promise.all([fetch(`/api/blogs/${id}`), fetch(`/api/blogtags/${id}`)]);
        //    const [ blog, blogtags ] = await Promise.all([blogRes.json(), blogtagRes.json()]);
        //    unstable_batchedUpdates(() => {
        //        setBlog(blog);
        //        setBlogTags(blogtags);
        //    });

        };
        getBlog();
    }, [id]) 

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="d-flex card-title justify-content-center align-items-center">{blog?.title}</h5>
                            <div>
                                {blogtags.map(blogtag => (
                                    <span className="badge badge-primary mb-3 mx-1 p-2" key={`blogtag-${blogtag.id}`} >{blogtag.name}</span>
                                ))}
                            </div>
                            <p className="card-text">{blog?.content}</p>
                            <button onClick={() => history.push('/')} className="btn btn-success mr-4">Go Back</button>
                            <Link className="btn btn-secondary" to={`/admin/${id}`}>Edit / Delete</Link>
                        </div> 
                    </div> 
                </div> 
            </section> 
        </main>
    ); 
} 

interface DetailsProps { }

export default Details;