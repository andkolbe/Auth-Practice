import * as React from 'react';
import { useLocation } from 'react-router-dom';

const Login: React.FC<LoginProps> = props => {

    const location = useLocation<{ msg: string }>();
    console.log(location.state?.msg); // we only have a state change when we navigate to our login page from the new post page when we aren't logged in

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center">Login</h1>
                    {location.state?.msg && <div className="alert alert-danger text-center">{location.state.msg}</div>}
                    <form className="font-weight-bold">
                        <div className="mb-4">
                            <label htmlFor="LoginEmail" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleEmail" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="LoginPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="examplePassword" />
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold">Login</button>
                    </form>
                </div>
            </section>
        </main>
    );

}

interface LoginProps { }

export default Login;