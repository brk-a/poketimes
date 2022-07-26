import React from "react";
import { useParams } from 'react-router-dom';

const PostHoc = (WrappedComponent) => {
    const {id} = useParams();
    return(props) => {
        //const {id} = useParams();
        return(
            <div className="container">
                <WrappedComponent {...props} id={id}/>
            </div>
        );
    }
}

export default PostHoc