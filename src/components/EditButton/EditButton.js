import './EditBtn.css';
import {Link} from "react-router-dom";
import {GrEdit} from "react-icons/gr";
import React from "react";

export default function EditButton(props) {

    const currentPlant = props.id
    return (
        <Link to={`/plant-edit/${ currentPlant }`}   className='edit-btn'>
            Pas aan <GrEdit/>
        </Link>
    );
}