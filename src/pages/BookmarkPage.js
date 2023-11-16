import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";

const BookmarkPage = () => {
    const [bookmark, setBookmarks] = useState([])
    async function fetchBookmarks(){
        const data = await axios.get('http://localhost:8000/movies/bookmark')
        return data
    }
    useEffect(()=> {
        fetchBookmarks()
        .then(data=> {
            setBookmarks(data.data.message)
        })
    }, [])

    async function deleteHandler(title){
        const res = await axios.post('http://localhost:8000/movies/deleteBookmark', {title})
        console.log(res)
    }
    return (
    <div style={{textAlign: "center", backgroundImage: 'url(/images/misc/home-bg.jpg)', minHeight: '100vh'}}>
      <div style = {{fontSize: '2rem', marginBottom: '3%'}}>
         Bookmarks
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
        {bookmark.map(b => <p>{b.title} <MdDelete onClick={e => {deleteHandler(b.title)}}/></p>)}
      </div>
      {/* <input onChange = {e => searchHandler(e.target.value)}/> */}
      {/* {searchRes.map(movie => <p>{movie.title}</p>)} */}
    </div>
  )
}

export default BookmarkPage