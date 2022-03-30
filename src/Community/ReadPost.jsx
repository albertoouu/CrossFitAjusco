import React, { useState, useEffect } from "react";
<<<<<<< HEAD:src/Community/Community.jsx
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  querySnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Post } from "./Post";

export const Community = () => {
  const [posts, setPosts] = useState([]);
=======
import { collection, addDoc, getDoc, getDocs, doc, onSnapshot, querySnapshot, deleteDoc} from "firebase/firestore";
import { db } from "../firebase"
import { Post } from "./Post"

export const ReadPost = () => {
  const [posts, setPosts] = useState([])
>>>>>>> dd8c6c5be255761483efc3f9c74a4d52d06f3d07:src/Community/ReadPost.jsx
  const postsCollectionRef = collection(db, "Posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(setPosts);
    getPosts();
  }, []);

  return (
    <div>
      <div>
<<<<<<< HEAD:src/Community/Community.jsx
        {" "}
        <Post />
      </div>
      {posts.map((post) => {
        return (
=======
        <Post/>
      </div>


      {posts.map(post => {
        return(
>>>>>>> dd8c6c5be255761483efc3f9c74a4d52d06f3d07:src/Community/ReadPost.jsx
          <div key={post.id}>
            <h1>input: {post.input}</h1>
          </div>
        );
      })}
    </div>
  );
};
