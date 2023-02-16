import React, { useState } from "react";
//import "./SearchBar.css";
//import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { searchData } from "./searchData";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState(searchData);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.author.toLowerCase().includes(searchWord.toLowerCase());
    });
  

    if (searchWord === "") {
      setFilteredData();
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div>
        <input 
          style={{backgroundColor: 'gray'}}
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
           <SearchIcon />
          ) : (
            <CloseIcon  id="clearBtn" onClick={clearInput} />
          )}
        </div>

      
      {filteredData.length !== 0 && (
        <div className="dataResult">
        {filteredData.slice().map((value, index) => {
          return (
              <>
                 
                 <p key={index}>{value.author} </p>
                 
              </>
          );
        })}
      </div>
       )}

      
    </div>
  );
}

export default SearchBar