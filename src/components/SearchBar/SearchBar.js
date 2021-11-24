// import './SearchBar.css';
// import {useHistory, useParams, withRouter} from "react-router-dom";
// import {FaSearch} from "react-icons/fa";
// import PlantIndex from "../PlantIndex/PlantIndex";
// import SearchResults from '../SearchResults/SearchResults';
//
//
// import {useEffect} from "react";
//
// const SearchBar = ({term, setTerm}) => {
//     console.log('term in searchbar', term);
//
//     const history = useHistory();
//     const submit= e => {
//         console.log('submitted');
//         e.preventDefault()
//     };
//     // const changeUrl = () => {
//     //     history.push('/search-results');
//     // }
//
//     return(
//         <>
//             <div className="search-bar">
//                 <form
//                     // onSubmit={changeUrl}
//
//                 >
//                     <label htmlFor='header-search'>
//                         <span className='visually-hidden'>Zoek een plant</span>
//                     </label>
//                     <input
//                         className='search-input'
//                         value={term}
//                         onInput={e => setTerm(e.target.value)}
//                         type='text'
//                         id='header-search'
//                         placeholder='Zoek een plant'
//                         name='query'
//
//                     />
//                     <button type='submit' className='search-btn'><FaSearch/></button>
//                 </form>
//             </div>
//             <div>
//                 <SearchResults sTxt={term}/>
//                 {/*<PlantIndex sTxt={term}/>*/}
//             </div>
//         </>
//
//
//
//
//     );
// }
//
// export default SearchBar;
