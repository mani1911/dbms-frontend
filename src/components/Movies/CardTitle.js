import React from "react";
import "./MoviesStyles.css";
import { CiBookmark } from "react-icons/ci";
import "./index.css"
import axios from 'axios'

function CardTitle({ title, desc, children, ...restProps }) {
  const bookmarkHandler = async () => {
    const backendURL = 'http://localhost:8000/movies/bookmark'
    const data = await axios.post(backendURL, {title, desc})
    console.log(data)
  }
  return (
    <>
      <h1 className="card-title" {...restProps}>
        {children}
      </h1>
      <CiBookmark className="bookmark" onClick={bookmarkHandler}/>
    </>
  );
}

export default CardTitle;
