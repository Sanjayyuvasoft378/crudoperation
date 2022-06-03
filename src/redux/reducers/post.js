const initialState = {
  posts: [],
  postLoader: true
}
const posts = (state = initialState, action) => {
  console.log(333, action.payload)
  switch (action.type) {

    case "GET_POSTS":
      return { ...state };

    case "ADD_POST":
      return { ...state, posts: state.posts.concat(action.payload), postLoader: false };

    case "DELETE_POST":
        const newposts = state.posts.filter((post) => {
        if (post.id != action.payload) {
          return post
        }
      })
      return {
        ...state,
        posts: newposts
      }
      
    case "UPDATE_POST":
      const post = state.posts.find((post) => post.id == action.payload.id)
      post.name = action.payload.name
      console.log(post)
      const posts = state.posts.map((oldpost) => {
        if (oldpost.id == action.payload.id) {
          return post
        }
        else {
          return oldpost;
        }

      })
      return {
        ...state,
        posts: posts
      }

    default:
      return state;
  }
};

export default posts;