import React from "react";

const MovieCard = ({movie}) =>
{
  return(<div className='movie'>
    <div>
      <p>{movie.Year}</p>
    </div>

    <div>
    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png'} alt={movie.Title} />
    </div>
  <div>
    <span>{movie.Type}</span>
    <h3>{movie.Title}</h3>
  </div>

  </div>)
}


export default MovieCard;