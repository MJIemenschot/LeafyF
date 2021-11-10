import './EditPlant.css';
import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {GrEdit, GrUpload} from "react-icons/gr";
import {Link, useHistory, useParams} from 'react-router-dom';


function EditPlant (props) {
    console.log("props in PlantEdit",props.current);
    console.log("Dit is currentfile",props.cFile);
    const [isSelected, setIsSelected] = useState(false);
    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const [currentPlant,setCurrentPlant ] = useState([]);
    const [currentImage,setCurrentImage ] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [Success, toggleSuccess] = useState(false);
    const [result, setResult] = useState('currenPlant');
    const onSubmit = (data) => setResult(JSON.stringify(data));
    let changeUrl = () => {
        history.push(`/plant/${id}`);
    }

    // effect runs on component mount

    useEffect(() => {
        async function getCurrent() {

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}`);
                console.log('response in editplant getCurrentplant', response.data)

                setCurrentPlant(response.data)

            } catch (error) {
                console.error('Er ging iets mis, geen data gevonden', error)
            }
        }

        getCurrent();
    }, []);


useEffect(() => {
    async function getCurrentImage() {

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/plants/${id}/download`);
            console.log('response in editPlant getCurrentImage', response.data)

            setCurrentImage(response.data)
            setIsSelected(true)

        } catch (err) {
            console.error('Er ging iets mis, geen afbeelding gevonden', err)
            setError('Er ging iets mis, geen afbeelding gevonden', err)
        }
    }
    getCurrentImage();
}, []);

    async function updateIt (formData) {
        setError('');
        toggleLoading(true);
        const token = localStorage.getItem("token")

        try {
            const res = await axios.patch(`http://localhost:8080/api/v1/plants/file/${id}`, formData
                    , {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log('res in update',res)
            toggleSuccess(true);
        } catch (err) {
            console.log(console.error(err))
            setError(`Het updaten is mislukt. Probeer het opnieuw (${err.message})`);
        }
    }

    // onValueChange(event) {
    //     this.setState({
    //         selectedOption: event.target.value
    //     });
    // }

    const formData = new FormData();

    const formSubmit = (data) => {

        formData.append("file", data.file[0])


        updateIt(formData)
    }
    useEffect(() => {
        // reset form with plant data
        reset(currentPlant);
    }, [currentPlant]);

    function refresh() {
        window.location.reload(false);
    }

    return (
        <div className="add-item-container">

            <div className='add-items'>
                <h1 className='page-header'>Bewerk plant</h1>
                {currentPlant &&
                <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className='add-item'>

                    <div className='upload'>
                        <h4>Huidige afbeelding:</h4>
                        <img src={currentPlant.downloadUri} alt={currentPlant.name} width='80px'/>
                        <h4>Kies een nieuwe afbeelding</h4>

                        <input type='file'
                               defaultValue={currentImage}
                               {...register('file', {
                               })} accept='image/jpeg'
                        />
                        {errors.file && <p className='error-message'>Er ging iets mis met uploaden. Probeer het opnieuw.</p>}
                        <GrUpload/>
                    </div >
                    <button className='form-btn'>Wijzig afbeelding</button>
                    {/*<button type='button' onClick={refresh} className='btn btn-secondary'>Laat de nieuwe afbeelding zien</button>*/}
                    {error ?
                        <>
                            <p>De afbeelding is succesvol gewijzigd!</p>
                            {/*<button onClick={changeUrl}>Bekijk de plant</button>*/}
                             {/*<p className='error-message'>{error}</p>*/}
                            {/*<button type='button' onClick={refresh} className='btn btn-secondary'>Laat de nieuwe afbeelding zien</button>*/}
                            <button type='button' onClick={changeUrl} className='btn btn-secondary'>Bekijk de plant</button>
                        </>:Success &&<Link to='/'>Cancel</Link>
                    }

                    {/*{Success && <button type='button' onClick={refresh} className='btn btn-secondary'>Laat de nieuwe afbeelding zien</button>}*/}
                    {/*<button type='button' onClick={refresh} className='btn btn-secondary'>Laat nieuw afbeelding zien</button>*/}
                </form>
                }
                {!currentPlant &&<p>Geen plant om te wijzigen...</p>}
            </div>
        </div>
    )
}
export {EditPlant};
