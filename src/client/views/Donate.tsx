import * as React from 'react';
import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import api from '../utils/api-service';

const Donate = (props: DonateProps) => {  

    const stripe = useStripe();
    const elements = useElements();

    const [amount, setAmount] = useState('');

    const handleDonate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);
    const result = await api('/api/donate', 'POST', { amount, token })
    console.log(result);
    setAmount('');
    cardElement.clear();
    }

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <form className="form-group">
                        <input className="form-control" value={amount} onChange={e => setAmount(e.target.value)} />
                        <CardElement className="form-control"/>
                        <button onClick={handleDonate} className="btn btn-primary">Buy Me A Coffee</button>
                    </form>
                </div> 
            </section> 
        </main>
    );
}

interface DonateProps {}

export default Donate;