import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
const CommentPage = (props) => {
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');
    const title = new URLSearchParams(location.search).get('title');
    const [comments, setComments] = useState([])

    async function getComments(){
        const data = axios.get('http://localhost:8000/movies/getComment', {movie_id: id})
        return data
    }
    useEffect(()=> {
        getComments()
        .then(data => {
            setComments(data.data.message)
            console.log(data.data.message)
        })
    }, [])

  return (
    <div style={{textAlign: "center", backgroundImage: 'url(/images/misc/home-bg.jpg)', minHeight: '100vh'}}>
      <div style = {{fontSize: '2rem', marginBottom: '3%'}}>
         {title}
      </div>
      

      {/* <input onChange = {e => searchHandler(e.target.value)}/> */}
      {comments.map((comment, index) => <p>{`${index} :  ${comment.comment}`}</p>)}
    </div>
  )
}

export default CommentPage