// import React, { useState, useEffect } from "react";
// import { useForm } from 'react-hook-form';
// import axios from "axios";
// import { FaSearch} from 'react-icons/fa';
// import './Searchform.css';
// import SearchResults from "./SearchResults";
//
//
// const SearchForm = (props) => {
//     const {onSearch} = props;
//     console.log('props in searchform',props)
//      const[searchTerm, setSearchTerm] = useState("");
//     // const [data, setData] = useState([])
//     // const [loading, toggleLoading] = useState(false);
//     // const [error, setError] = useState('');
//     // const [found, toggleFound] = useState(false)
//     const handleInput = (e) =>{
//         const text = e.target.value
//         setSearchTerm(text)
//     }
//     const handleEnterKeyPressed = (e) =>{
//         if (e.key==='Enter'){
//             onSearch(searchTerm)
//         }
//     }
//
//
//      return (
//         <>
//             <form className='search-form'>
//                 <input
//                     className= 'search-input'
//                      onChange={handleInput}
//                     onKeyPress={handleEnterKeyPressed}
//                     value={searchTerm}
//                     type='text' placeholder='Zoek een plant'></input>
//                 {/*<button type='submit' className='search-btn'><FaSearch className='search-icon'/></button>*/}
//             </form>
//             <SearchResults/>
//
//         </>
//      )
// }
// export default SearchForm