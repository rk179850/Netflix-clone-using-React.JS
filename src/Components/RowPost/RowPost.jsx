import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY ,imageUrl} from '../../Constants/Constants'

function RowPosters(props){
  const [movie,setMovie] = useState();
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovie(response.data.results)
    })


  },[])
  return(
    <div className='row'>
      <h1 className='title'>{props.title}</h1>
      <div className='posters'>
        {
          movie? movie.map((obj,index) => {

            return(
              <img key={index} className={props.ismall? 'smallposter':'poster'} alt='poster' src={movie?imageUrl+obj.backdrop_path:""} />
            )
          }):""
        }
        
      </div>
    </div>

  )
}
export default RowPosters;