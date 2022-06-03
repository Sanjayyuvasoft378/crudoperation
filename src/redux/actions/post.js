export const getPosts = () => {
  return {
    type: "GET_POSTS"
  };
};

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post
  };
};

export const delePost = (id) => {
  return {
    type: "DELETE_POST",
    payload: id
  }
}
export const uptPost = (id, postTitle) => {
  console.log(id, postTitle)
  return {
    type: "UPDATE_POST",
    payload: {
      id: id,
      name: postTitle
    }
  };
};



