import React, {useState, useContext} from "react";

import { GrUpload } from "react-icons/gr";
import {ItemContext} from "../context/Itemcontext";
import './AddItem.css';

const ItemAdd = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    /*const [fav, setFav]= useState(false);
    const [img, setImg] = useState('');*/
    const [items, setItems] = useContext(ItemContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateDescription = (e) => {
        setDescription(e.target.value);
    }
   /* const updateFav = (e) => {
        setFav(e.target.value);
    }
    const updateImg = (e) => {
        setImg(e.target.files[0])
    }*/

    const ItemAdd = (e) => {
        e.preventDefault();
        setItems(prevItems =>[...prevItems, {name:name, description:description}]);

    }

    return (
        <div className='add-item-container'>
            <div className='add-items'>
            <h1>Voeg een plant toe</h1>
            <form  className='add-item' onSubmit={ItemAdd}>
                <fieldset className='categories'>
                    <legend>Kies een categorie</legend>
                <input type="radio" id="type1" name="type1" value="Seeds"/>
                <label htmlFor="type1"> Zaden of een bollen</label>
                <input type="radio" id="type2" name="type2" value="Ent"/>
                <label htmlFor="type2"> Stekken</label>
                <input type="radio" id="type3" name="type3" value="plant"/>
                <label htmlFor="type3"> Planten</label>
                </fieldset>

                <input
                    placeholder='Geef een titel'
                    className='add-item-field'
                    type ='text'
                    name='name'
                    value={name}
                    onChange={updateName}></input>
                <textarea
                    placeholder='Geef een beschrijving op'
                    className='add-item-field'
                    name='description'
                    rows='10'
                    cols='30'
                    value={description}
                    onChange={updateDescription}></textarea>
                <label className='upload'>
                    Upload hier een afbeelding
                    <input
                        type='file'></input>
                    <GrUpload/>
                    <fieldset className='categories'>
                    <legend>Of kies een bestaande afbeelding</legend>
                    <input type="checkbox" id="type1" name="type1" value="Seeds"/>
                    <label htmlFor="type1"> Zaden of een bollen</label>
                    <input type="checkbox" id="type2" name="type2" value="Ent"/>
                    <label htmlFor="type2"> Stekken</label>
                    </fieldset>
                </label>
                <button className='form-btn'>Submit</button>
            </form>
            </div>

        </div>
    )
}
export default ItemAdd