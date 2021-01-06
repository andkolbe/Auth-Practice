import * as React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api, { TOKEN_KEY } from '../utils/api-service';

const Login = (props: LoginProps)  => {
// const Login: React.FC<LoginProps> = props => {

    const history = useHistory();

    const location = useLocation<{ msg: string }>();
    console.log(location.state?.msg); // we only have a state change when we navigate to our login page from the new post page when we aren't logged in

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const token = await api('/auth/login', 'POST', { email, password })
        localStorage.setItem(TOKEN_KEY, token);
        history.goBack();
    }

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center">Login</h1>
                    {location.state?.msg && <div className="alert alert-danger text-center">{location.state.msg}</div>}
                    <form className="font-weight-bold">
                        <div className="mb-4">
                            <label htmlFor="LoginEmail" className="form-label">Email Address</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="LoginPassword" className="form-label">Password</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"/>
                        </div>
                        <button onClick={login} type="submit" className="btn btn-primary font-weight-bold">Login</button>
                    </form>
                </div>
            </section>
        </main>
    );

}

interface LoginProps { }

export default Login;