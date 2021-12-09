import React, {useState} from 'react';


import SearchBr from "../SearchBar/SearchBr";

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