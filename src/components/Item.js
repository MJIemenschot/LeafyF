import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {ItemsContext} from "../context/Itemscontext";
import Container from './reusableComponents/Container';

const Item = () => {
    const [contents] = useContext(ItemsContext);

    return (
        <section>
            <h1>Item Details</h1>

        </section>
    )
}
export default Item
