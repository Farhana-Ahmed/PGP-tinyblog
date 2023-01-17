import React from "react";
import { Card } from "react-bootstrap";
import { IPost } from "../model";

//title,paragraph,tags

const Post = ({ title, tags, body }: IPost) => {
  return (
    // <div>
    //   <Card
    //     style={{
    //       width: "15rem",
    //       margin: "10px",
    //       height: "30rem",
    //       border: "solid",
    //     }}
    //   >
    //     <Card.Body>
    //       <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
    //       <Card.Text>{body}</Card.Text>
    //       <Card.Footer>{tags.join('  ')}</Card.Footer>
    //     </Card.Body>
    //   </Card>
    // </div> 
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10">
  <div className="md:flex border-1 pb-10">
    <div className="p-8 ">
      <div className=" tracking-wide text-sm text-indigo-500 font-semibold ">{title}</div>
      <p className="mt-2 text-slate-500">{body}</p>
      <a href="https://images.squarespace-cdn.com/content/v1/5e851d0edecd980ff18aa3e5/a471cb78-d5e2-44b5-be7d-c5c1501737af/Go+Tiny+Blog+Logo?format=1500w" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{tags.join('  ')}</a>

    </div>
  </div>
</div>
  );
};

export default Post;
