import React, {useState } from 'react';
import './movies.css';
import data from './moviesdata';
import SearchIcon from '@material-ui/icons/Search';

const SingleMovie = (props) => {

  const [search, setSearch] = useState('');

  return (
    <>
      <nav className='nav'>
      <h1 className='brand'>Top10 Movies </h1>
      <input type='text' className='search' autoComplete='off' placeholder='Search' onChange={(e)=>{
        setSearch(e.target.value);
      }}
      /><SearchIcon className='icon' /> 
      </nav>
      <div className='movie-area'>
        
          {
            data.filter((val)=> {
              if(search === '') {
                return val
              } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                return val
              }
            }).map((movie) => {
              return (
                    <div className='movie-card' key={movie.id}>
                      <img src={movie.image} className='images'/>
                      <p className='title' >{movie.title}</p>
                  </div>
                )
              })
            }
      </div>
    </>
  )
}

export default SingleMovie;