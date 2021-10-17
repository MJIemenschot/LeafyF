// import React, {useContext, useEffect, useState} from 'react';
// import { useForm } from 'react-hook-form';
// import axios from "axios";
//
//
// import {GrEdit, GrUpload} from "react-icons/gr";
// import {ItemsContext} from "../context/ItemsContext";
//
// import {useHistory, useParams} from "react-router-dom";
//
//
// function EditItem () {
//
//     const { handleSubmit, formState: { errors }, register, reset } = useForm();
//     // const {contents} = useContext(ItemsContext);
//     // console.log('contents  in Edititem', {contents} );
//     // const Itemid = {id};
//     const [currentItem,setCurrentItem ] = useState([]);
//     // const [edit,setEdit ] = useState([]);
//
//     const { id } = useParams();
//     const history = useHistory();
//     const [loading, toggleLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [Success, toggleSuccess] = useState(false);
//     const [result, setResult] = useState(null);
//     const onSubmit = (data) => setResult(JSON.stringify(data));
//
//
//     useEffect(()=>{
//         async function getCurrent() {
//
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/v1/items/${id}`);
//                 console.log('response in getCurrent',response.data)
//
//                 setCurrentItem(response.data)
//
//             } catch (error) {
//                 console.error('Er ging iets mis, geen data gevonden', error)
//             }
//         }
//         getCurrent();
//     },[]);
//
//     // useEffect(()=>{
//     //     if (currentItem){
//     //         setEdit(currentItem)
//     //     }
//     //
//     // },[currentItem, edit]);
//
//     async function updateIt (formData) {
//         setError('');
//         // toggleLoading(true);
//         const token = localStorage.getItem("token")
//
//         try {
//             const res = await axios.put('http://localhost:8080/api/v1/items/update', formData)
//             console.log('res in update',res)
//             toggleSuccess(true);
//         } catch (e) {
//             console.log(console.error(e))
//             setError(`Het updaten is mislukt. Probeer het opnieuw (${e.message})`);
//         }
//     }
//
//     // onValueChange(event) {
//     //     this.setState({
//     //         selectedOption: event.target.value
//     //     });
//     // }
//
//     const formData = new FormData();
//
//     const formSubmit = (data) => {
//         formData.append("id", data.id)
//         formData.append("description", data.description)
//         formData.append("name", data.name)
//         formData.append("difficulty", data.difficulty)
//         formData.append("light", data.light)
//         formData.append("food", data.food)
//         formData.append("watering", data.watering)
//         formData.append("file", data.file[0])
//
//
//         updateIt(formData)
//     }
//
//     return (
//         <div className="add-item-container">
//             <div className="add-items">
//                 <h1>Bewerk plant</h1>
//                 <form onSubmit={handleSubmit(formSubmit)} onReset={reset} className="add-item">
//                     <input  type="text"
//                             className="add-item-field"
//                              defaultValue={currentItem.id}
//                             // readonly
//                             // placeholder="Voeg hier de id toe:"
//                             {...register("id", {
//                             })}
//                     />
//                     <input  type="text"
//                             className="add-item-field"
//                              defaultValue={currentItem.name}
//                              // placeholder="Plantnaam"
//                             {...register("name", {
//                             })}
//                     />{errors.address && <p className="errorMessage">Het veld is niet ingevuld</p>}
//
//                     <textarea   className="add-item-field"
//                                 cols="30" rows="10"
//                                  defaultValue={currentItem.description}
//                                 // placeholder="Voeg hier een beschrijving en/of verzorgingshandleiding van jouw plant toe:"
//                                 {...register("description")}
//                     />
//                     {errors.address && <p className="errorMessage">Vergeet niet een verzorgingshandleiding of beschrijving in te vullen</p>}
//
//                     <div className="selectField">
//                         <h3>Verzorging</h3>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="easy"
//                                 checked={currentItem.difficulty === "EASY"}
//                                 // onChange={onValueChange}
//
//
//                                 value="EASY" {...register("difficulty")}/>
//                         <label htmlFor="easy">Makkelijk</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="moderate"
//                                  checked={currentItem.difficulty === "MODERATE"}
//
//                                 value="MODERATE" {...register("difficulty")}/>
//                         <label htmlFor="moderate">Gemiddeld</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="hard"
//                                  checked={currentItem.difficulty === "HARD"}
//
//                                 value="HARD" {...register("difficulty")}/>
//                         <label htmlFor="hard">Moeilijk</label>
//                     </div>
//
//
//                     <div className="selectField">
//                         <h3>Standplaats</h3>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="directsun"
//                                 // checked={currentItem.light === "DIRECTSUN"}
//                                 value="DIRECTSUN" {...register("light")}/>
//                         <label htmlFor="directsun">Direct Zonlicht</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="halfsunny"
//                                 // checked={currentItem.light === "HALFSUNNY"}
//                                 value="HALFSUNNY" {...register("light")}/>
//                         <label htmlFor="halfsunny">Half zonnig</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="sunny"
//                                 // checked={currentItem.light === "SUNNY"}
//                                 value="SUNNY" {...register("light")}/>
//                         <label htmlFor="sunny">Half zonnig</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="shadow"
//                                 // checked={currentItem.light === "SHADOW"}
//                                 value="SHADOW" {...register("light")}/>
//                         <label htmlFor="shadow">Schaduw</label>
//                     </div>
//                     <div className="selectField">
//                         <h3>Waterbehoefte</h3>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="day"
//                                 // checked={currentItem.watering === "DAY"}
//                                 value="DAY" {...register("watering")}/>
//                         <label htmlFor="day">Iedere dag</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="twodays"
//                                 // checked={currentItem.watering === "TWODAYS"}
//                                 value="TWODAYS" {...register("watering")}/>
//                         <label htmlFor="twodays">Om de dag</label>
//                         <input
//                             className="choose"
//                             type="radio"
//                             id="threedays"
//                             // checked={currentItem.watering === "THREEDAYS"}
//                             value="THREEDAYS" {...register("watering")}/>
//                         <label htmlFor="threedays">Eens in de 3 dagen</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="week"
//                                 // checked={currentItem.watering === "WEEK"}
//                                 value="WEEK" {...register("watering")}/>
//                         <label htmlFor="week">Elke week</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="month"
//                                 // checked={currentItem.watering === "MONTH"}
//                                 value="MONTH" {...register("watering")}/>
//                         <label htmlFor="month">Elke maand</label>
//                     </div>
//                     <div className="selectField">
//                         <h3>Bijmesten</h3>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="week"
//                                 // checked={currentItem.food === "WEEK"}
//                                 value="WEEK" {...register("food")}/>
//                         <label htmlFor="week">Iedere week</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="twoweeks"
//                                 // checked={currentItem.food === "TWOWEEKS"}
//                                 value="TWOWEEKS" {...register("food")}/>
//                         <label htmlFor="twoweeks">Om de week</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 id="month"
//                                 // checked={currentItem.food === "MONTH"}
//                                 value="MONTH" {...register("food")}/>
//                         <label htmlFor="month">Iedere maand</label>
//                         <input  className="choose"
//                                 type="radio"
//                                 defaultValue={currentItem.food === "NEVER_SPECIAL"}
//                                 id="never_special"
//                                 // checked={currentItem.food === "NEVER_SPECIAL"}
//                                 value="NEVER_SPECIAL" {...register("food")}/>
//                         <label htmlFor="never_special">Nooit/speciaal</label>
//                     </div>
//                     <p>{result}</p>
//
//                     <div className="upload">
//                         <input type="file"
//                                 // defaultValue={currentItem.fileName}
//                                {...register("file", {
//
//                         })} accept="image/jpeg"
//                         />
//                         {errors.address && <p className="errorMessage">Er ging iets mis met uploaden. Probeer het opnieuw.</p>}
//                         <GrUpload/>
//                     </div >
//                     <button className="form-btn">Wijzig de plant</button>
//                     {Success === true && <p>De plant is succesvol gewijzigd!</p>}
//                     {error && <p className="error-message">{error}</p>}
//                 </form>
//             </div>
//         </div>
//     )
// }
//
// export default EditItem;