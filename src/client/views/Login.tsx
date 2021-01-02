import * as React from 'react';

const Login: React.FC<LoginProps> = props => {

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center">Login</h1>
                </div>
            </section>
        </main>
    );

}

interface LoginProps {}

export default Login;