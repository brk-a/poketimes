import React from 'react';
import {useNavigate} from 'react-router-dom';

const Contact = () => {
    // console.log(props);
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/about');
    }, 2000);

    return (
        <div className='container'>
            <h4 className='center'>Contact</h4>
            <p> Find us at 0.5 ReLiars Plaza, Pork Pie Av, La La London</p>
        </div>
    );
}

export default Contact
