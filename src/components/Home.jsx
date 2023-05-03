import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import{Link} from 'react-router-dom'
import Trailer from './Trailer';
import "./Home.css";


const API_KEY = 'b1e07746b22a1a95afeb707ea616637c';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const[changeMovie,setMovie]=useState('action')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${changeMovie}`,

      );
      setMovies(result.data.results);
    };

    fetchData();
  }, [changeMovie]);
  console.log(changeMovie)

  return (
    <div >
     <div className='searchbar'>
      <input placeholder="Search here"style={{width:'500px',height:'30px',marginLeft:'150px',borderRadius:'10px',border:'0px'}} onChange={(e)=>setMovie(e.target.value)}></input>
      <a href="Home">Movies</a>
      <a href="Home">Tv Show</a>
      <a href="Home">Watch List</a>
      
     </div>
      <div className='mid-card'>
      <div className='leftcardd'>
    
        
      <button  className='btn123'  style={{color:'white'}}>Gener</button>
       <br/>
       <button  className='btn123'  onClick={()=>setMovie('Action')}>Action</button>
       <br/>
        <button  className='btn123'  onClick={()=>setMovie('Horror')}>Horror</button>
        <br/>
        <button   className='btn123'  onClick={()=>setMovie('Comedy')}>Comedy</button>
        <br/>
        <button   className='btn123'  onClick={()=>setMovie('Adventure')}>Adventure</button>
        <br/>
        <button   className='btn123'  onClick={()=>setMovie('Sci-fi')}>Sci-fi</button>
        <br/>
        <button   className='btn123'  onClick={()=>setMovie('Drama')}>Drama</button>
        <br/>
        
      </div>
      
      <div className='cardd'>
   
        {movies.map((movie) => (
         <div key={movie.id} className='cardd1' >
   
         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt='' className='cardimg'></img>
         <h5 style={{margin:"6px",}}>{movie.title}</h5>
         <h5 style={{color:"gray",margin:"2px"}}>⭐{movie.vote_average}</h5>
         <Button variant="text"><Link to={`/Moviedetail/${movie.id}` }style={{textDecoration:'none',color:'gray'}}>see details...</Link></Button>
         
         </div> 
          
        ))}
      </div>
      <div>
   <Trailer/>
      </div>
      </div>
    </div>
  );
};

export default Home;