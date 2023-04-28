import {useEffect, useState} from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import Footer from './Footer'
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=b285bdf';

const App = () =>
{
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      searchMovies(searchKeyword);
    }
  }
  useEffect(() => {
    searchMovies('batman')
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={(event) => setSearchKeyword(event.target.value)}
          onKeyDown={handleSearch}
          />
          <img
          alt="search icon"
          src={SearchIcon}
          onClick={() => searchMovies(searchKeyword)}
          />
        </div>
        {
          movies?.length > 0 ? ( 
          <div className="container">
          {
              movies.map((movie) => ( <MovieCard movie={movie} /> ))
          }
          </div>
          ): 
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
        }
       </div>
        <Footer />
      </>
    );
}
export default App;
