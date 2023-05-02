import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b1e07746b22a1a95afeb707ea616637c';
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
    
      <div className="cards-container">
       <h3>Trailers</h3>
        {movies.map((movie) => (
          <div className="card123" key={movie.id}>
            <img style={{width:'200px',height:"150px",borderRadius:"13px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
          </div>
        ))}
       
        
      </div>
    </div>
  );
}

export default App;