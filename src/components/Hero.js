import React, {useContext, useState} from 'react';

import Container from "./reusableComponents/Container";
import Loader from "./reusableComponents/Loader";
import SearchBar from "./SearchBar";


const Hero = () => {
    const [terms, setTerms] = useState([]);

    function addTerm(term) {
        let newTerms = new Set([term, ...terms]);
        setTerms(Array.from(newTerms));
    }

    return(
        <section className='hero'>
            {/*<Container>*/}
                <SearchBar term={terms[0]} addTerm={addTerm} />
            {/*</Container>*/}
        </section>

    )
}
export default Hero;