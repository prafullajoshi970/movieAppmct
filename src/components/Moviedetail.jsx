import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Moviedetail.css'
const Addtocart = () => {
  const {id}=useParams();
const [data,setData]=useState({id:0,
title:"",
description:"",
image:"",
vote_average:0,
category:"",}

);
const API_KEY = 'b1e07746b22a1a95afeb707ea616637c'
useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  .then (resp =>resp.json())
  .then(data=>setData(data))
  
  .catch(error=>console.log(error))


},[id])
console.log(data)


  return (
    <div>

    <div className='movieDetailcard'>
                <div className='leftMoviedetail'> <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}alt='' style={{width:'400px',height:'400px'}}></img>
                </div> 
                 <div className="rightMoviedetail">
                 <h3>{data.title}</h3>
                 <p>{data.vote_average}⭐</p>
                  <p>{data.category}</p>
                  <p>{data.release_date} | {Math.floor(data.runtime/60)}Hrs | {Math.floor(data.vote_average)}+</p>
                   <p>{data.overview}</p>
                  <h3>Related Movies</h3>
                <div className='relatedMovies'>
                <img className="imgcard1" style={{width:'100px',height:"100px",margin:'10px',border:'2px solid white'}} src={`https://image.tmdb.org/t/p/w500/hll4O5vSAfnZDb6JbnP06GPtz7b.jpg`} alt=''></img>
                <img  className="imgcard1" style={{width:'100px',height:"100px",margin:'10px'}} src={`https://image.tmdb.org/t/p/w500/lpxDrACKJhbbGOlwVMNz5YCj6SI.jpg`} alt=''></img>
                <img  className="imgcard1" style={{width:'100px',height:"100px",margin:'10px'}} src={`https://image.tmdb.org/t/p/w500/eTM3qtGhDU8cvjpoa6KEt5E2auU.jpg`} alt=''></img>
                </div>
        
        
      
                 
                 </div> 
              </div>

   
</div>
  )
}

export default Addtocart