import './PlntByUser.css';

import React, {useContext, useEffect, useState} from "react";
import axios from "axios";



const PlntByUser = ({usrId}) => {
    console.log('props in PlntByUsr',usrId)
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(()=>{
        async function fetchCurrentUser() {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/users/${usrId}`);
                console.log('response in fetchuser',response.data)

                setCurrentUser(response.data)

            } catch (error) {
                console.error('Er ging iets mis', error)
            }
        }
        fetchCurrentUser();
    },[]);





    return (
        <>
            <div className='dropdown'>
                <h4>Planten die ik geplaatst heb:</h4>

                <div className='dropdown-content'>
                    <>{currentUser.plants.map(usrPlants=>{
                        return(<p>
                            {usrPlants.name}
                        </p>)}
                    )}
                    </>
                </div>
            </div>


           </>



    )
}
export default PlntByUser

