import React, { useState } from "react";


const Searchbar = () => {
    const[searchTerm, setSearchTerm] = useState();

    return (
        <>
            <input
                type ='text'
                placeholder='search....'
                onChange={(event)=>{
                    setSearchTerm(event.target.value)
                }}
            >

            </input>
            <input type ='submit'>Search</input>

        </>
    )
}
export default Searchbar