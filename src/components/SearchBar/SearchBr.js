import './SearchBar.css';
import {useHistory, useParams, withRouter} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {FaSearch} from "react-icons/fa";
import PlantIndex from "../reusableComponents/PlantIndex/PlantIndex";
import SearchResults from '../SearchResults/SearchResults';

import {useEffect} from "react";

const SearchBr = ({term, setTerm}) => {
    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    console.log('term in searchbar', term);

    const history = useHistory();

    const onSubmit = (term) =>{

         History.push('/search-results');
         //setTerm(term)
    }

    // const submit= e => {
    //     console.log('submitted');
    //     e.preventDefault()
    // };
    // const changeUrl = () => {
    //     History.push('/search-results');
    // }

    return(
        <>
            <div className="search-bar">
                <form
                     onSubmit={handleSubmit(onSubmit)}

                >
                    <label htmlFor='header-search'>
                        <span className='visually-hidden'>Zoek een plant</span>
                    </label>
                    <input
                        ref={register}
                        className='search-input'
                        value={term}
                        onInput={e => setTerm(e.target.value)}
                        type='text'
                        id='header-search'
                        placeholder='Zoek een plant'
                        name='query'

                    />
                    <button type='submit' className='search-btn'><FaSearch/></button>
                </form>
            </div>
            <div>
                <SearchResults sTxt={term}/>
                {/*<PlantIndex sTxt={term}/>*/}
            </div>
        </>




    );
}

export default SearchBr;
