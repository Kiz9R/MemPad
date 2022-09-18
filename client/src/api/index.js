import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// const url = "http://localhost:5000/post";

//  for local devops..
// const url = "https://mempad.herokuapp.com/post";

export const fetchPosts = () => API.get("/post");
export const createPost = (newPost) => API.post("/post", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/post/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/post/${id}`);
export const likePost = (id) => API.patch(`/post/${id}/likePost`);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
