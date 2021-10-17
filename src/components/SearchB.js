import './SearchBar.css';
import {useHistory, useParams, withRouter} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import PlantIndex from "./reusableComponents/PlantIndex";
import SearchResults from "./SearchResults";
import SearchRes from "./SearchRes/SearchRes";
import {useEffect} from "react";

const SearchB = ({term, setTerm}) => {
    console.log('term in searchbar', term);

    const history = useHistory();
    const submit= e => {
        console.log('submitted');
        e.preventDefault()
    };
    const changeUrl = () => {
        History.push('/search-results');
    }



    return(


        <div className="search-bar">
            <form
                onSubmit={changeUrl}
                // action="/"
                // method="submit"
            >
                <label htmlFor="header-search">
                    <span className="visually-hidden">Zoek een plant</span>
                </label>
                <input
                    value={term}
                    onInput={e => setTerm(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Zoek een plant"
                    name="query"

                />
                <button type="submit"><FaSearch/></button>
            </form>
            <SearchResults sTxt={term}/>
        </div>

);
}

export default SearchB;

// export default function SearchBar(props) {
//     function submitted(ev) {
//         ev.preventDefault();
//         console.log('submitted');
//         props.addTerm(ev.target['keyword'].value);
//
//      }
//      function handleClick() {
//          History.push('/search-results');
//
//      }
//
//
//     return (
//         <div className="search-bar">
//             <form onSubmit={submitted}>
//                 <input
//                     type="text"
//                     name="keyword"
//                     className="searchText"
//                     placeholder="keyword"
//                 />
//                 <button type="submit"
//                         className="searchBtn"
//                         name="searchBtn"
//                 // onClick={handleClick}
//                      >
//                     <FaSearch/>
//                 </button>
//             </form>
//             {props.term && <p>Je zoekt naar {props.term}</p>}
//             <div>
//                 <SearchResults contents={props.term} />
//                 {/*<List plants={plants} />*/}
//             </div>
//         </div>
//     );
// }