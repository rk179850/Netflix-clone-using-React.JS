import React, { useEffect,useState } from 'react';
import axios from "/src/axios.jsx";
import { API_KEY, imageUrl} from '../../Constants/Constants';
import './Banner.css';

function Banner() {
  const [movie,setMovie]= useState(null);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data.results[8]);
        setMovie(response.data.results[Math.floor(Math.random()*19)+1]);
    });
  }, []);
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie?movie.title:""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?movie.overview.substring(0,350):""}</h1>
        
        
      </div>
      <div className="bottomfade"></div>
    </div>
  );
}
export default Banner;
