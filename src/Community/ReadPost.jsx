import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  querySnapshot,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Post } from './Post';
import { useAuth } from '../Context/authContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ReadPost = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'Posts');

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
    console.log(id);
    try {
      //Eliminar
      await deleteDoc(doc(db, 'Posts', id));
      console.log('Document deleted with ID: ', id);
      //Actualizar estado
      const otherPosts = posts.filter((post) => post.id !== id);
      setPosts(otherPosts);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  //Editar post
  const handleEdit = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div>
        <Post />
      </div>
      {posts.map((post) => {
        console.log(user.email);
        return (
          <div key={post.id}>
            <h1>Tu post: {post.input}</h1>
            <h4>Autor: {post.author}</h4>
            <h4>Fecha: {post.date}</h4>
            {user.email === post.email ? (
              <div>
                <button onClick={() => deletePost(post.id)}>
                  <DeleteIcon />
                </button>
                <button onClick={() => handleEdit(post.id)}>
                  <EditIcon />
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
