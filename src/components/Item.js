import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {ItemContext} from "../context/Itemcontext";
import Container from './reusableComponents/Container';

const Item = () => {
    const [items] = useContext(ItemContext);

    return (
        <section>
            <h1>Item Details</h1>

        </section>
    )
}
export default Item
