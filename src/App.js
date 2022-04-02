import { useState, useRef } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { DataContext } from './contexts/DataContext';
import { SearchContext } from './contexts/SearchContext';
import './App.css';


function App () {
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);
  
  let searchInput = useRef('');

  const API_URL = 'https://itunes.apple.com/search?term=';

  const handleSearch = (e, userInput) => {
      e.preventDefault();
      const fetchData = async () => {
        const response = await fetch(`${API_URL}${userInput}`);
        const resData = await response.json();
        if (resData.results.length > 0) {
            setData(resData.results);
        } else {
            setMessage('Results Not Found');
        }
    }
    fetchData()
    }
  

  return (
      <div className="App">
          <SearchContext.Provider value={{
              term: searchInput,
              handleSearch: handleSearch
          }}>
            <SearchBar />
          </SearchContext.Provider>
          
          <h2>{message}</h2>
          <DataContext.Provider value={data} >
            <Gallery data={data} />
          </DataContext.Provider>
    </div>
  );
}

export default App;