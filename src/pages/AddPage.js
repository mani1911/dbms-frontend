import React, {useState} from 'react'
import {firebase} from "../lib/firebase.prod.js"

/*

    description
    genre
    id
    maturity
    slug
    title

*/
function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

const AddPage = () => {
    const [genre, setGenre] = useState('');
    const [maturity, setMaturity] = useState('');
    const [slug, setSlug] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = () => {
        firebase.firestore().collection("films").add({
            id: getUUID(),
            title,
            description,
            genre,
            maturity,
            slug
          });

        console.log('Done')
    }

  return (
    <div style={{textAlign: "center", backgroundImage: 'url(/images/misc/home-bg.jpg)', height: '100vh'}}>
      <div style = {{fontSize: '2rem', marginBottom: '3%'}}>
         Add Film
      </div>
        <div>
            <div class="form-row">
                <div class="input-data">
                <input type="text" required placeholder='Genre' value = {genre} onChange={e => setGenre(e.target.value)}/>
                <div class="underline"></div>
                <label>Genre</label>
                </div>
                <div class="input-data">
                <input type="text" required placeholder='Maturity' value = {maturity} onChange={e => setMaturity(e.target.value)}/>
                <div class="underline"></div>
                <label>Maturity</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data">
                <input type="text" required placeholder='Slug' value = {slug} onChange={e => setSlug(e.target.value)}/>
                <div class="underline"></div>
                <label>Slug</label>
                </div>
                <div class="input-data">
                <input type="text" required placeholder='Title' value = {title} onChange={e => setTitle(e.target.value)}/>
                <div class="underline"></div>
                <label>Title</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data textarea">
                    <textarea rows="8" cols="80" required placeholder='Description' value = {description} onChange={e => setDescription(e.target.value)}></textarea>
                    <br />
                    <div class="underline"></div>
                    <label>Description</label>
                    <br />
                    <div class="form-row submit-btn">
                    <div class="input-data">
                        <div class="inner"></div>
                        <input type="submit" value="Add Movie" onClick={submitHandler}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AddPage