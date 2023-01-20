import { useState, useEffect } from "react";
import { IPost } from "../model";
import db from "../db/mockdata.json";
import PostsList from "./PostsList";
import Filter from "./Filter";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  let tags: string[] = ["American", "English", "Love", "Magical", "Mystery"];
  const [tagFilter, setTagFilter] = useState<string>('all')

  useEffect(() => {
    const getData = () => {
      const data = db;
      setPosts(data.posts);
    };
    getData();
  }, []);
  

 
  return (
    <>
    
    <div className="">
  
    <Filter setTagFilter={setTagFilter}/>
    
      {tags.map((tag, index) => (
        <PostsList posts={posts} tag={tag} key={index} />
      ))}
    </div>
    </>
  );
};

export default Home;
