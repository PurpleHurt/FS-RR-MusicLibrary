import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {

    let [userInput, setUserInput] = useState('');
    return (
        <form onSubmit={e =>{
             handleSearch(e, userInput);
            setUserInput('');
        }}
        >
            <input 
                type="text" 
                placholder="Enter search term" 
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
             />
            <input type="submit" />
        </form>
    );
};

export default SearchBar;
