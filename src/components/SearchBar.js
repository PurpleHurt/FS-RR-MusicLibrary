import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';


const SearchBar = () => {
    const { term, handleSearch } = useContext(SearchContext);

        return (
        <form> 
            <input ref={term} type="text" placholder="Enter search term" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
};

export default SearchBar;
