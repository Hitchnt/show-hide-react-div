import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }
 //hide the div by id
closeClick(number) {
    const resetGame = document.getElementById(number);
    resetGame.style.display="none";
   
      }
//show the div by id
openClick(number) {
const resetGame = document.getElementById(number);
resetGame.style.display="block";
  }


  renderList = () => {
    return this.props.posts.map(post => {
     
      return (      
        <div className="item" key={post.id}>   
        <button onClick={() => this.openClick(post.id)}>open</button>      
          <i className="large middle aligned icon user" />
          <div className="content"  id={post.id} class="hidden" >
            <div className="description">
            <h1>Author: <UserHeader userId={post.userId} /></h1>
            <h2>Author Id :{post.id}</h2>          
            <h2>Title: {post.title}</h2>
            <h2>Body: {post.body}</h2>
            </div>
           
            <button onClick={() => this.closeClick(post.id)}>close</button>  
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostAndUsers }
)(PostList);
