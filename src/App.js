import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import './App.css';


const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])


  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
      try{
      if(search) {
          const fetchData = async () => {
              const response = await fetch(`${API_URL}${search}`);
              const resData = await response.json();
              if (resData.results.length > 0) {
                  setData(resData.results);
              } else {
                  setMessage('Results Not Found');
              }
          }
          fetchData()
      }
    }
    catch (err) {
        console.error(err);
    }
  }, [search])

  const handleSearch = (e, userInput) => {
      e.preventDefault()
      setSearch(userInput)
  }

  return (
      <div className="App">
          <SearchBar handleSearch={handleSearch} />
          <h2>{message}</h2>
          <Gallery data={data} />
    </div>
  );
}

export default App;