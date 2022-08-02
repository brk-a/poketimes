import React, { Component } from "react";
// import PostHoc from "../hoc/PostHoc";
// import axios from "axios";
import {connect} from 'react-redux';


class Post extends Component{
    // state = {
    //     post:null
    // }

    // componentDidMount(){
    //     //console.log(this.props.id);
    //     let {id} = this.props;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'  + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             });
    //             console.log(res);
    //         });
    //     // this.setState({
    //     //     id: id
    //     // });

    //     //console.log(this.props.id);
    // }

    render(){
        const {post} = this.props ? (
            <div className="post">
                <h4 className="center">{this.props.title}</h4>
                <p>{this.props.body}</p>
            </div>
            ) : (
                <div className="center">Loading post ...</div>
            );
        
        return(
            <div className="container">{post}</div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    // let id = ownProps.match.params.post_id;
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post)