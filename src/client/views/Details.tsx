import * as React from 'react';

const Details: React.FC<DetailsProps> = props => {

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center">Details</h1>
                </div>
            </section>
        </main>
    );

}

interface DetailsProps {}

export default Details;