import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import "./index.css";

import American from "./Pages/American";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <img
        className="h-auto max-w-lg mx-auto"
        src="https://images.squarespace-cdn.com/content/v1/5e851d0edecd980ff18aa3e5/a471cb78-d5e2-44b5-be7d-c5c1501737af/Go+Tiny+Blog+Logo?format=1500w"
        alt="description"
      /> */}
     
      <Navbar/>
       <Home />
    </div>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/american" element={<American/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
