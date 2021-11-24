import { useState, useEffect } from 'react';
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore';
import { db } from '../firebase';
import Post from './Post';

// const posts_demo = [
//   {
//     id: 123,
//     username: 'Naruto Uzumaki',
//     userImg: 'https://bit.ly/3kZynY9',
//     img: 'https://bit.ly/3kZynY9',
//     caption: 'Uzumaki Naruto Dattebayo',
//   },
//   {
//     id: 124,
//     username: 'Naruto Uzumaki',
//     userImg: 'https://bit.ly/3kZynY9',
//     img: 'https://bit.ly/3kZynY9',
//     caption: 'Uzumaki Naruto Dattebayo',
//   },
// ];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  console.log(posts);

  return (
    <div>
      {/* {posts_demo.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))} */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
