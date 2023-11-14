import React, {useEffect, useState} from 'react'
import { firebase } from '../lib/firebase.prod';

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchRes, setSearchRes] = useState([]);
    const getMovies = async () => {
        console.log('Fetching...')
        const snapshot = await firebase.firestore().collection('films').get()
        return snapshot.docs.map(doc => doc.data())
    }
    useEffect(()=> {
        getMovies()
        .then(data => {
            setMovies(data)
            setSearchRes(data)
        })
    }, [])

    const searchHandler = (searchTerm)=>{
        console.log(searchTerm)
        if(searchTerm !== "") {
            const filteredMovies = movies.filter(movie=> {
                return Object.values(movie).join(" ").toLowerCase().includes(searchTerm);   
            })

            setSearchRes(filteredMovies)
        }
        else{
            setSearchRes(movies)
        }
    }
  return (
    <div style={{textAlign: "center", backgroundImage: 'url(/images/misc/home-bg.jpg)', minHeight: '100vh'}}>
      <div style = {{fontSize: '2rem', marginBottom: '3%'}}>
         Search
      </div>
      <input onChange = {e => searchHandler(e.target.value)}/>
      {searchRes.map(movie => <p>{movie.title}</p>)}
    </div>
  )
}

export default SearchPage;