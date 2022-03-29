import React, { useState, useEffect } from "react";
import { collection, addDoc, getDoc, getDocs, doc, onSnapshot, querySnapshot, deleteDoc} from "firebase/firestore";
import { db } from "../firebase"
import { Post } from "./Post"

export const ReadPost = () => {
  const [posts, setPosts] = useState([])
  const postsCollectionRef = collection(db, "Posts");

  useEffect(() =>{
        const getPosts = async () => {
              const data = await getDocs(postsCollectionRef);
              setPosts(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };
        console.log(setPosts)
        getPosts();
  }, []);

  return (
    <div>
      <div>
        <Post/>
      </div>


      {posts.map(post => {
        return(
          <div key={post.id}>
            <h1>input: {post.input}</h1>
          </div>
        )
      })}
    </div>
  )
}