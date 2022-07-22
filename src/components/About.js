import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className='container'>
            <h4 className='center'> About </h4>
            <p> We are not a fake organisation that's going to scam you<br/>
                Trust us, we want what's best for you
            </p>
        </div>
    );
}

export default Rainbow(About)