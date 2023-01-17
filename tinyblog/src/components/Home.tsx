
import { useState, useEffect } from 'react';
import { IPost } from '../model';
import db from '../db/mockdata.json'
import PostsList from './PostsList';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  let tags : string[] = ['american','english','love','magical','mystery'];
  useEffect(() => {
    const getData = async () => {
      const data = db;
      // const response = await axios.get("https://dummyjson.com/posts");
      // const posts = response.data.posts;
      setPosts(data.posts);
    };
    getData();
  }, []);
  return (
    //should be 5 dif sections here and Posts should be conditionally rendered
    <div style={{display: "flex"}}>
     
{tags.map((tag, index) => <PostsList posts = {posts} tag = {tag} key = {index}/>)}
      

    </div>
  )
}

export default Home