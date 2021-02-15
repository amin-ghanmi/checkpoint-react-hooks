import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import {moviesList} from './components/assets/Data';

import AddMovie from './components/assets/AddMovie';


const App = () => {
    const [movieList,setMovieList] = useState(moviesList)
    const addMovie=(Title,Poster,Description,Rate)=>{
        setMovieList([...movieList,{Title:Title,Poster:Poster,Description:Description,Rate:Rate}])
    }

    return (
        <div className="container-fluid">
            <MovieList movieList={movieList}/>
            <AddMovie addMovie={addMovie}/>
        </div>
    )
}

export default App
