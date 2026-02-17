import { useState } from 'react';
import header_image from './assets/images/header-image.jpg';
import SearchBar from './components/SearchBar';

const App = () => {

  const [searchContext, setSearchContext] = useState("");

  return (
    <main>
      <div>
        <img src={header_image} alt="header image" className='w-full h-64 object-cover' />
        <h1 className="text-6xl font-bold text-center mt-4">Dive into the world of movies</h1>
        <h2 className="text-4xl font-bold text-center">Discover <span className="text-gradient">Ratings</span></h2>
        <h2 className="text-4xl font-bold text-center">Explore <span className="text-gradient">Genres</span></h2>
        <h2 className="text-4xl font-bold text-center">Find <span className="text-gradient">Top Movies</span></h2>
        <SearchBar searchContext={searchContext} setSearchContext={setSearchContext} />
      </div>
    </main>
  );
};

export default App;
