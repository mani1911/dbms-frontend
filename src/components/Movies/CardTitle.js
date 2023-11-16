import React from "react";
import "./MoviesStyles.css";
import { CiBookmark } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
import "./index.css"
import axios from 'axios'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CardTitle({ title, desc, id, children, ...restProps }) {
  const bookmarkHandler = async () => {
    const backendURL = 'http://localhost:8000/movies/bookmark'
    const data = await axios.post(backendURL, {title, desc})
  }
  const stateProp = {
    id: id,
    title: title
  }
  return (
    <>
      <h1 className="card-title" {...restProps}>
        {children}
      </h1>
      <CiBookmark className="bookmark" style = {{cursor: 'pointer'}} onClick={bookmarkHandler}/>
      <Link to = {{pathname: `/comments`, search : `?id=${id}&title=${title}`}}><FaComment style={{marginLeft: '1%', cursor: 'pointer'}} className="bookmark"/></Link>
      
    </>
  );
}

export default CardTitle;
