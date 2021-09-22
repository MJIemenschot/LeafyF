import React, {useContext} from 'react';
import {ItemContext} from "../context/Itemcontext";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";


import {Link} from 'react-router-dom';


const Items = () => {
    const {items} = useContext(ItemContext);
    console.log(items)


    return (

           <div className='container'>
               <h2>Itemlijst</h2>
               {items.map(item =>{
                   return (
                      // <div style={{background: 'url(./item.img) no repeat center/cover'}} className='itemBg'>
                           <div className='itemInfo'>
                               <h3>{item.name}</h3>
                               {/*<p>{item.description}</p>*/}
                               <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}/>
                               <button onClick={() => delete(item.id)}>Verwijder</button>
                           <button>Bewerk</button>
                           />
                               <Link to='#'>Details</Link>
                           {/*</div>*/}
                        </div>
                   );
               })};

           </div>


    );
};
export default Items