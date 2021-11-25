import './UserDelete.css';
import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";


import {GrTrash} from "react-icons/gr";
import {Link, useParams} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function UserDelete (props) {
    const [succes, toggleSucces] = useState(false);
    console.log("props in userDelete", props);
    const {
        user
    } = useContext(AuthContext);
    console.log('user in userDelete from authcontext' ,user);
    // const { handleSubmit, formState: { errors }, register } = useForm();
    const itemId = props.id;
    console.log('itemId',itemId)

    async function deleteItemHandler () {

        if(window.confirm("weet je zeker dat je dit account wil verwijderen?")){
            try{
                await axios.delete(`http://localhost:8080/api/v1/users/${itemId}`)
                // const newUserList = (props.filter((user)=>user.id !==itemId));
                toggleSucces(true);
            } catch (e) {
                console.log("het is niet gelukt, error: " + e)
            }
        }
    }

    return (
        <div className='user-delete'>
            {/*{!user.username===itemId && */}
            {/*<button*/}
            {/*    className='delete-usr-btn'*/}
            {/*    type='submit'*/}
            {/*    onClick={deleteItemHandler}*/}
            {/*>*/}
            {/*    verwijder*/}
            {/*    <span className='icon-btn'><GrTrash/></span>*/}

            {/*</button>*/}
            {/*}*/}
            {!succes && <p>Verwijder dit account</p>}
            {succes ?
            <>
                <p>Het account is succesvol verwijderd</p>
                {/*<Link to={'/profile'}>Terug naar ledenlijst</Link>*/}

            </>:<button
                    className='delete-usr-btn'
                    type='submit'
                    onClick={deleteItemHandler}
                >
                    verwijder
                    <span className='icon-btn'><GrTrash/></span>

                </button>}

        </div>
    )
}

export default UserDelete;