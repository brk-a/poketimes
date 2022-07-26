import React, { Component } from "react";
import PostHoc from "../hoc/PostHoc";


class Post extends Component{
    state = {
        id:null
    }

    componentDidMount(){
        //console.log(this.props.id);
        let id = this.props.id;
        this.setState({
            id: id
        });

        //console.log(this.props.id);
    }

    render(){
        return(
        <div className="container">
            <h4>{this.state.id}</h4>
        </div>
        );
    }
}

export default PostHoc(Post)