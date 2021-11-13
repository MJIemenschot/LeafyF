import React, {useState} from 'react';
// import './TopBar.css';
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import SearchBr from "./SearchResults/SearchBr";

const TopBar = () => {
    const [terms, setTerms] = useState('');
    const[term,setTerm] = useState('')


    function addTerm(term) {
        let newTerms = new Set([term, ...terms]);
        setTerms(Array.from(newTerms));
    }

    return (
        <div className='top-bar'>
            {/*<Logo />*/}
            <SearchBr term={term}
                       setTerm={setTerm}
            />
        </div>
    );
};

export default TopBar;