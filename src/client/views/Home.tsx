import * as React from 'react';

const Home: React.FC<HomeProps> = props => {

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center">Home</h1>
                </div>
            </section>
        </main>
    );

}

interface HomeProps {}

export default Home;