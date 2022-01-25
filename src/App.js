// App.js
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import ArtistView from './ArtistView';
import AlbumView from './AlbumView';
import { createResource as fetchData } from './helper';

import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App(){
    let [message, setMessage] = useState('Search for Music!');
    let [data, setData] = useState([]);
    let searchInput = useRef('');

    const handleSearch = (e, term) => {
      e.preventDefault();
      // const fetchData = async () => {
      //   document.title = `${term} Music`;
      //   const response = await fetch(`https://itunes.apple.com/search?term=${term.replace(' ','%20').toLowerCase()}`);
      //   const resData = await response.json();
        
      //   if(resData.results.length > 0) {
      //     setData(resData.results);
      //   } else {
      //     setMessage('Not Found');
      //   }
      // };
      // fetchData();
      setData([fetchData(term)]);
    };

    useEffect(() => {
      if (searchInput) {
        setData([fetchData(searchInput)]);
      }
    }, [searchInput]);

    return (
        <div>
          {message}
          <Router>
            <Routes>
              <Route path="/" element={<div>
                <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
                  <SearchBar />
                </SearchContext.Provider>
                <DataContext.Provider value={data}>
                  <Gallery />
                </DataContext.Provider>
                </div>} />
              <Route path="/album/:id"
                element={<AlbumView />} />
              <Route path="/artist/:id"
                element={<ArtistView />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;
