import React, { useState, useEffect } from "react";
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
import { useAuth } from "../Context/authContext";

export const ReadPost = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "Posts");

  //Leer data y actualizar DOM al cambio
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(setPosts);
    getPosts();
  }, []);

  //Eliminar Post
  const deletePost = async (id) => {
    console.log(id)
    await deleteDoc(doc(db, "Posts", id));
  }

  return (
    <div>
      <div>
        <Post />
      </div>
      {posts.map((post) => {
        console.log(useAuth)
        return (
          <div key={post.id}>
            <h1>input: {post.input}</h1>
              { useAuth ? (
                <div>
                  <button onClick={()=> deletePost(post.id)}>Eliminar</button>
                </div>
              ): (null)}
          </div>
        );
      })}
    </div>
  );
};
