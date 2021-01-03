import * as React from 'react';

const NewPost: React.FC<NewPostProps> = props => {

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center">NewPost</h1>
                </div>
            </section>
        </main>
    );

}

interface NewPostProps {}

export default NewPost;