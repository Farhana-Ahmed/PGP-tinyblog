import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Post";
import CardList from "./components/PostsList";
import { IPost } from "./model";

function App() {
  const [post, setPost] = useState<IPost>({} as IPost)
  const [posts, setPosts] = useState<IPost[]>([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://dummyjson.com/posts");
      const posts = response.data.posts;
setPosts(posts)
    };
    getData();
  }, []);
  return <div className="App">
   {/* {posts.map((post,index) => ( <Card title={post.title} body={post.body} tags={post.tags} />))} */}
    <CardList posts = {posts} />
  </div>;
}

export default App;

