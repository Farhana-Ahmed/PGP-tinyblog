import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";

import PostsList from "./components/PostsList";
import { IPost } from "./model";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://dummyjson.com/posts");
      const posts = response.data.posts;
      setPosts(posts);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Home />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
