import React, { Component } from 'react'
import Post from "./post"
import EditPost from './editPost';
import { connect } from 'react-redux'
import { addPost, delePost, uptPost } from '../redux/actions/post';

class Posts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      appName: "test",
      inputValue: "",
      error: "",
      isVisibleModal: false,
      post: null

    }
    this.handleChange = this.handleChange.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this)
    this.editPostModal = this.editPostModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  componentDidMount() {
    this.setState({ posts: this.props.posts })
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleClick(e) {
    e.preventDefault()
    let post = {}
    const count = this.props.posts.length
    post.id = count + 1
    post.name = this.state.inputValue
    this.props.addPost(post)
  }

  deletePost(id) {
    console.log(id)
    this.props.delePost(id)

  }

  updatePost(id, postTitle) {
    console.log("newtitle", id, postTitle)

    this.props.uptPost(id, postTitle)
    this.state.isVisibleModal && this.setState({ isVisibleModal: false })
  }
  closeModal() {
    this.setState({ isVisibleModal: false })
  }

  editPostModal(id) {

    let post = this.props.posts.find((post) => post.id == id)
    this.setState({ post: post })
    this.setState({ isVisibleModal: true })
  }

  render() {
    console.log(4444111, this.props)

    return (
      <div>

        <div>
          {1 + 23}
        </div>
        <div> {this.state.appName}</div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick.bind(this)}>Add Post</button>

        <div>
          <h2>posts</h2>
          {
            this.props.posts.map((post, index) => {
              return (
                <div key={index}>
                  <Post editPostModal={this.editPostModal} post={post} updatePost={this.updatePost} deletePost={this.deletePost} editPost={this.editPost} />

                </div>
              )
            })
          }
        </div>
        {this.state.isVisibleModal &&
          <EditPost updatePost={this.updatePost} isOpen={this.state.isVisibleModal} closeModal={this.closeModal} post={this.state.post} />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  };
};
const mapDispatchToProps = {
  addPost,
  delePost,
  uptPost
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);

