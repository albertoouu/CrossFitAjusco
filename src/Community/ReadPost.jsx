import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { CreatePost } from './Create';
import { useAuth } from '../Context/authContext';
import { EditModal } from './Edit';
import './ReadPost.css';
import { PostCard } from './Card';

export const ReadPost = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'Posts');

  //Leer data y actualizar DOM
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
        <CreatePost setPosts={setPosts} />
      </div>
      {posts.map((post) => {
        console.log(user.email);
        return (
          <div key={post.id}>
            <PostCard
              publication={post.input}
              author={post.author}
              date={post.date}
              id={post.id}
              email={post.email}
              setPosts={setPosts}
            />
            {user.email === post.email ? (
              <div>
                <EditModal id={post.id} setPosts={setPosts} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
