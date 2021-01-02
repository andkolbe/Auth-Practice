import * as React from 'react';

const Admin: React.FC<AdminProps> = props => {

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center">Admin</h1>
                </div>
            </section>
        </main>
    );

}

interface AdminProps {}

export default Admin;