import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { CreatePost } from './Create';
import { EditModal } from './Edit';
import { PostCard } from './PostCard';
import './ReadPost.css';

export const ReadPost = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'Posts');

  //Leer data y actualizar DOM
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      //Obtener Data al cargar componente
      const getData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
          fecha: doc.data().date.toDate().toDateString(),
          hora: doc.data().date.toDate().getHours(),
          minutes: doc.data().date.toDate().getMinutes(),
        }))
        .slice()
        .sort((a, b) => b.date - a.date);
      console.log(getData);
      //Pasar Data al Estado
      setPosts(getData);
    };
    console.log(posts);
    getPosts();
  }, []);

  return (
    <div>
      <div>
        <CreatePost setPosts={setPosts} />
      </div>
      {posts.map((post) => {
        return (
          <div className="contentPostCard" key={post.id}>
            <PostCard
              publication={post.input}
              author={post.author}
              id={post.id}
              date={post.fecha}
              hour={post.hora}
              minute={post.minutes}
              email={post.email}
              avatar={post.avatar}
              setPosts={setPosts}
            />
          </div>
        );
      })}
    </div>
  );
};
