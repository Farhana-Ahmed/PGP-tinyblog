import "./App.css";
import Home from "./components/Home";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import American from "./components/American";
import { IPost } from "./model";
export interface Props {
  posts: IPost[];
  tag: string;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<American posts={[]} tag={""} />} />
          {/* <Route path='/genre/:id' element={<Posts />} /> */}
        </Routes>
      </Router>
{/*       
      <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;
