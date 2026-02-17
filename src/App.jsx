import { useEffect, useState } from 'react';
import headerImage from './assets/images/header-image.jpg';
import SearchBar from './components/SearchBar';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json', 
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {

  const [searchContext, setSearchContext] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setIsLoading(true);
      setErrorMessage('');
    try {
      const response = await fetch(`${BASE_URL}/discover/movie?sort_by=popularity.desc`, OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if(data.Response === 'False') {
        setErrorMessage(data.Error);
        setMovies([]);
        return;
      }
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  },[]);
  
  return (
    <main>
      <div>
        <img src={headerImage} alt="header image" className='w-full h-64 object-cover' />
        <h1 className="text-6xl font-bold text-center mt-4">Dive into the world of movies</h1>
        <h2 className="text-4xl font-bold text-center">Discover <span className="text-gradient">Ratings</span></h2>
        <h2 className="text-4xl font-bold text-center">Explore <span className="text-gradient">Genres</span></h2>
        <h2 className="text-4xl font-bold text-center">Find <span className="text-gradient">Top Movies</span></h2>
        <SearchBar searchContext={searchContext} setSearchContext={setSearchContext} />
      </div>
      {/* Movie list and other components will go here */}
      <section>
        {isLoading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : errorMessage ? (
          <p className="text-center text-xl text-red-500">{errorMessage}</p>
        ) : movies.map((movie) => (
          <p key={movie.id} className="text-center text-xl text-white">{movie.title}</p>
        ))}
      </section>
    </main>
  );
};

export default App;
