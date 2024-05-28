import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../Context/Usercontext';
import { selectCountry } from '../Reducer/Action'
import { selectCity } from '../Reducer/Action'
import { selectedState } from '../Reducer/Action'
import { selectCheckbox } from '../Reducer/Action'
export default function Form() {
    const { state, dispatch } = useContext(UserContext)
    console.log(state)
    const [editingRow, setEditingRow] = useState(null);

    const handleCountryChange = (e) => {

        dispatch(selectCountry(e.target.value))
    }

    const handleCheckboxChange = (e) => {
        // dispatch({ type: "selectedLocation", payload: e.target.checked })
        dispatch(selectCheckbox(e.target.checked))
    }

    const handleStateChange = (e) => {

        dispatch(selectedState(e.target.value))
    }
    // Where you dispatch the action in your component
    const handleCityChange = (e, index) => {
        const selectedCity = e.target.value;
        dispatch(selectCity(selectedCity));
    };


    console.log(state.selectedState, 'fghj');
   

    const handleAddRow = () => {
        const isStateCitySelected = state.selectedState !== "" && state.selectedCity !== "";

        if ((state.formData?.location || state.formData?.country !== "") || isStateCitySelected) {
          const newRow = {
            currentLocation: state.formData?.location ? 'Yes' : 'No',
            selectedCountry: state.formData?.location ? 'India' : state.formData?.country,
            selectedState: state.selectedState,
            selectedCity: state.selectedCity,
            remarks: '',
          };
          dispatch({ type: "addrow", payload: newRow });
          // Assuming you want to reset the selected state and city after adding a row
        //   dispatch(selectedState());
        //   dispatch(selectCity());
          setEditingRow(newRow.length);
        } else {
          toast.error('Please fill in the required fields before adding a row.');
        }
      };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

            <form>

                <div className='container d-flex justify-content-around align-items-center bg-dark text-white p-5'>
                    <label>
                        <input
                            type='checkbox'
                            checked={state.formData?.location}
                            onChange={handleCheckboxChange}
                            disabled={state.countryFlag}
                        />
                        Current Location
                    </label>
                    <br />

                    <label>
                        Select Country:
                        <select
                            value={state.formData?.country}
                            onChange={handleCountryChange}
                            disabled={state.locationFlag}
                        >
                            <option value='' >
                                Select Country
                            </option>
                            {state && state.countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br />




                    <label>
                        Remarks:
                        <textarea
                        // value={formData.remarks}
                        // onChange={(e) => dispatch({ type: 'REMARKS_CHANGE', payload: e.target.value })}
                        // disabled={!isFormEnabled}
                        // ^-- The remarks textarea will be disabled when isFormEnabled is false
                        />
                    </label>

                    <br />
                </div>


            </form>

            <div className='container p-3'>
                <button
                    type='button'
                    onClick={handleAddRow}
                className='btn btn-primary float-right mb-3'
                // disabled={editingRow !== null}
                >
                    Add Row
                </button>
            </div>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th>Selected Country</th>
                        <th>Selected State</th>
                        <th>Selected City</th>
                        <th>Remarks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.formData?.list?.map((row, index) =>
                        <tr key={index}>
                            <td>{row.selectedCountry}</td>
                            <td><select
                                value={row.state}
                                onChange={handleStateChange}
                            >
                                <option value=''>Select State</option>
                                {state.states[row.selectedCountry]?.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select></td>
                            <td>
                                <select
                                    value={row.city}
                                    onChange={(e) => handleCityChange(e, index)}
                                >
                                    <option value=''>Select City</option>
                                    {state.cities[state.selectedState]?.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </td>

                            <td>{row.remarks}</td>
                             <td>

          <>
                                    <button className='btn btn-success me-3'
                                        // onClick={() => handleEditRow(index)}
                                    >
              save
            </button>
                                    <button className='btn btn-danger'
                                        // onClick={() => handleDeleteRow(index)}
                                    >
              Delete
            </button>
          </>

      </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
// import React, { useContext, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { UserContext } from '../Context/Usercontext';
// import { selectCountry } from '../Reducer/Action'
// import { selectCity } from '../Reducer/Action'
// import { selectedState } from '../Reducer/Action'
// import { selectCheckbox } from '../Reducer/Action'
// export default function Form() {
//     const { state, dispatch } = useContext(UserContext)
//     console.log(state)
//     const [editingRow, setEditingRow] = useState(null);

//     const handleCountryChange = (e) => {

//         dispatch(selectCountry(e.target.value))
//     }

//     const handleCheckboxChange = (e) => {
//         // dispatch({ type: "selectedLocation", payload: e.target.checked })
//         dispatch(selectCheckbox(e.target.checked))
//     }

//     const handleStateChange = (e) => {

//         dispatch(selectedState(e.target.value))
//     }
//     // Where you dispatch the action in your component
//     const handleCityChange = (e, index) => {
//         const selectedCity = e.target.value;
//         dispatch(selectCity(selectedCity));
//     };
//     // const selectCityState = state.selectedState === '' || state.formData.city === '';

//     // const handleAddRow = () => {
//     //     const formData = state.formData.list

//     //     console.log(formData, 'fghj');

//     //     if ((state.formData?.location || state.formData?.country !== "") && (!formData.length || (state.selectedState !== '' && state.selectedCity !== ''))) {
//     //         const newRow = {
//     //             currentLocation: state.formData?.location ? 'Yes' : 'No',
//     //             selectedCountry: state.formData?.location ? 'India' : state.formData?.country,
//     //             selectedState: '',
//     //             selectedCity: '',
//     //             remarks: '',
//     //         };
//     //         dispatch({ type: "addrow", payload: newRow })
//     //         // setEditingRow(tableData.length);

//     //     }
//     //     else {
//     //         toast.error('Please fill in the required fields before adding a row.');
//     //     }
//     // }
//     const handleAddRow = () => {
//         const formData = state.formData.list;
      
//         console.log(formData, 'fghj');
      
//         // Check if both state and city fields in the table have a selected value
//         const isStateCitySelected = formData.length > 0 && formData.every((row) => row.selectedState || row.selectedCity);
      
//         if (isStateCitySelected) {
//           const newRow = {
//             currentLocation: state.formData?.location ? 'Yes' : 'No',
//             selectedCountry: state.formData?.location ? 'India' : state.formData?.country,
//             selectedState: state.selectedState,
//             selectedCity: state.selectedCity,
//             remarks: '',
//           };
//           dispatch({ type: 'addrow', payload: newRow });
//           // Assuming you want to reset the selected state and city after adding a row
//           // dispatch(selectedState());
//           // dispatch(selectCity());
//           setEditingRow(newRow.length);
//         } else {
//           toast.error('Please fill in the required fields before adding a row.');
//         }
//       };
      

//   const isStateCitySelected = state.selectedState !== '' && state.selectedCity !== '';


//     return (
//         <div>
//             <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

//             <form>

//                 <div className='container d-flex justify-content-around align-items-center bg-dark text-white p-5'>
//                     <label>
//                         <input
//                             type='checkbox'
//                             checked={state.formData?.location}
//                             onChange={handleCheckboxChange}
//                             disabled={state.countryFlag}
//                         />
//                         Current Location
//                     </label>
//                     <br />

//                     <label>
//                         Select Country:
//                         <select
//                             value={state.formData?.country}
//                             onChange={handleCountryChange}
//                             disabled={state.locationFlag}
//                         >
//                             <option value='' >
//                                 Select Country
//                             </option>
//                             {state && state.countries.map((country, index) => (
//                                 <option key={index} value={country}>
//                                     {country}
//                                 </option>
//                             ))}
//                         </select>
//                     </label>
//                     <br />




//                     <label>
//                         Remarks:
//                         <textarea
//                         // value={formData.remarks}
//                         // onChange={(e) => dispatch({ type: 'REMARKS_CHANGE', payload: e.target.value })}
//                         // disabled={!isFormEnabled}
//                         // ^-- The remarks textarea will be disabled when isFormEnabled is false
//                         />
//                     </label>

//                     <br />
//                 </div>


//             </form>

//             <div className='container p-3'>
//                 <button
//                     type='button'
//                     onClick={handleAddRow}
//                     className='btn btn-primary float-right mb-3'
//                 // disabled={selectCityState}
//                 >
//                     Add Row
//                 </button>
//             </div>
//             <table className='table text-center'>
//                 <thead>
//                     <tr>
//                         <th>Selected Country</th>
//                         <th>Selected State</th>
//                         <th>Selected City</th>
//                         <th>Remarks</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {state.formData?.list?.map((row, index) =>
//                         <tr key={index}>
//                             <td>{row.selectedCountry}</td>
//                             <td><select
//                                 value={row.state}
//                                 onChange={handleStateChange}
//                             >
//                                 <option value=''>Select State</option>
//                                 {state.states[row.selectedCountry]?.map((state) => (
//                                     <option key={state} value={state}>
//                                         {state}
//                                     </option>
//                                 ))}
//                             </select></td>
//                             <td>
//                                 <select
//                                     value={row.city}
//                                     onChange={(e) => handleCityChange(e, index)}
//                                 >
//                                     <option value=''>Select City</option>
//                                     {state.cities[state.selectedState]?.map((city) => (
//                                         <option key={city} value={city}>
//                                             {city}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </td>

//                             <td>{row.remarks}</td>
//                             <td>

//                                 <>
//                                     <button className='btn btn-success me-3'
//                                     // onClick={() => handleEditRow(index)}
//                                     >
//                                         save
//                                     </button>
//                                     <button className='btn btn-danger'
//                                     // onClick={() => handleDeleteRow(index)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </>

//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     )
// }