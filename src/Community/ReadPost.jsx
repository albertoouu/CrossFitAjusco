import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { CreatePost } from './Create';
import { EditModal } from './Edit';
import { PostCard } from './Delete';
import './ReadPost.css';

export const ReadPost = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'Posts');

  //Leer data y actualizar DOM
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
              date={post.date}
              id={post.id}
              email={post.email}
              setPosts={setPosts}
            />
          </div>
        );
      })}
    </div>
  );
};
