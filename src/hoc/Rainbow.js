import { React } from "react";

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'black', 'green', 'blue', 'orange', 'pink'];
    const randomColour = colours[Math.floor(Math.random()* colours.length)];
    const className = randomColour + '-text';

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

export default Rainbow