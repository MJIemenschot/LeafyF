import './EditImageBtn.css';
import {Link} from "react-router-dom";
import {GrEdit} from "react-icons/gr";
import React from "react";

export default function EditImageBtn(props) {

    const currentPlant = props.id
    return (
        <Link to={`/edit-plant/${ currentPlant }`}   className='edit-img-btn'>
            Afbeelding <GrEdit/>
        </Link>
    );
}