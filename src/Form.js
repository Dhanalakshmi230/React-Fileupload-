// import { tab } from '@testing-library/user-event/dist/tab';
// import React, { useState, useReducer, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const initialState = {
//     currentLocation: false,
//     currentLocationDisabled: false,
//     selectedCountry: '',
//     selectedState: '',
//     selectedCity: '',
//     remarks: '',
//     countries: ['USA', 'Canada', 'India'],
//     states: {
//         USA: ['NewYork', 'California', 'Texas'],
//         Canada: ['Ontario', 'Quebec', 'BritishColumbia'],
//         India: ['Delhi', 'Mumbai', 'Bangalore'],
//     },
//     cities: {
//         NewYork: ['New York City', 'Buffalo'],
//         California: ['Los Angeles', 'San Francisco'],
//         Texas: ['Houston', 'Dallas'],
//         Ontario: ['Toronto', 'Ottawa'],
//         Quebec: ['Montreal', 'Quebec City'],
//         BritishColumbia: ['Vancouver', 'Victoria'],
//         Delhi: ['New Delhi', 'Old Delhi'],
//         Mumbai: ['South Mumbai', 'North Mumbai'],
//         Bangalore: ['Electronic City', 'Whitefield'],
//     },
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'CURRENT_LOCATION_DISABLED':

//             return {
//                 ...state,
//                 currentLocationDisabled: action.payload,

//             };
//         case 'CHECKBOX_CHANGE':
//             return {
//                 ...state,
//                 currentLocation: !state.currentLocation,
//                 selectedCountry: '',
//                 remarks: '',
//             };
//         case 'DROPDOWN_CHANGE':
//             return {
//                 ...state,
//                 selectedCountry: action.payload,
//                 remarks: '',
//             };
//         case 'STATE_CHANGE':
//             return {
//                 ...state,
//                 selectedState: action.payload,
//                 selectedCity: '',
//             };
//         case 'CITY_CHANGE':
//             return {
//                 ...state,
//                 selectedCity: action.payload,
//             };
//         case 'REMARKS_CHANGE':
//             return {
//                 ...state,
//                 remarks: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// const FormComponent = () => {
//     const [formData, dispatch] = useReducer(reducer, initialState);
//     const [tableData, setTableData] = useState([]);
//     const [isFormEnabled, setIsFormEnabled] = useState(true);
//     const [isPreviousRowFilled, setIsPreviousRowFilled] = useState(true);
//     const [editingRow, setEditingRow] = useState(null);

//     const handleAddRow = () => {
//         const { selectedCountry, remarks, currentLocation, selectedState, selectedCity } = formData;

//         if (
//             (selectedCountry || currentLocation) &&
//             (!tableData.length || (selectedState && selectedCity))
//         ) {
//             const newRow = {
//                 currentLocation: currentLocation ? 'Yes' : 'No',
//                 selectedCountry: currentLocation ? 'India' : selectedCountry,
//                 selectedState: '',
//                 selectedCity: '',
//                 remarks,
//             };

//             setTableData([...tableData, newRow]);
//             setIsFormEnabled(false);
//             setIsPreviousRowFilled(false);

//             dispatch({ type: 'DROPDOWN_CHANGE', payload: selectedCountry });
//             dispatch({ type: 'REMARKS_CHANGE', payload: remarks });
//             dispatch({ type: 'STATE_CHANGE', payload: '' });
//             dispatch({ type: 'CITY_CHANGE', payload: '' });
//             setEditingRow(tableData.length);
//             toast.success('Row added successfully');
//         }
//         else {
//             toast.error('Please fill in the required fields before adding a row.');
//         }

//     };


//     useEffect(() => {
//         if (tableData.length === 0) {
//             setIsFormEnabled(true);

//         }
//         console.log(tableData);
//     }, [tableData])



//     const handleDeleteRow = (index, event) => {
//         // Prevent the default form submission or anchor tag behavior
//         event.preventDefault();
//         const updatedTableData = [...tableData];
//         const deletedRow = updatedTableData.splice(index, 1)[0];
//         setTableData(updatedTableData);
//         // Reset form fields to initial state only if deleting the first row (index 0)
//         console.log(initialState.selectedCountry, 'check 888')
//         if (index === 0) {
//             dispatch({ type: 'DROPDOWN_CHANGE', payload: initialState.selectedCountry });
//             //   dispatch({ type: 'CHECKBOX_CHANGE', payload: initialState.currentLocation });
//             dispatch({ type: 'STATE_CHANGE', payload: initialState.selectedState });
//             dispatch({ type: 'CITY_CHANGE', payload: initialState.selectedCity });
//             dispatch({ type: 'REMARKS_CHANGE', payload: initialState.remarks });

//             // Enable the form fields
//             setIsFormEnabled(true);
//             setIsPreviousRowFilled(true);
//             if (deletedRow.currentLocation === 'Yes') {
//                 dispatch({ type: 'CHECKBOX_CHANGE', payload: '' });
//             }
    
//         }
   
//         console.log(index, "tyuiop");
        
//     };

//     const handleCheckboxChange = () => {
//         dispatch({ type: 'CHECKBOX_CHANGE' });

//         if (!formData.currentLocation) {
//             dispatch({ type: 'DROPDOWN_CHANGE', payload: '' });
//             dispatch({ type: 'REMARKS_CHANGE', payload: '' });
//         }
//     };

//     const handleEditRow = (index) => {
//         setEditingRow(index);
//         console.log(editingRow, 'check editing row value at edit')

//         const editedRow = tableData[index];
//         dispatch({ type: 'DROPDOWN_CHANGE', payload: editedRow.selectedCountry });
//         dispatch({ type: 'STATE_CHANGE', payload: editedRow.selectedState });
//         dispatch({ type: 'CITY_CHANGE', payload: editedRow.selectedCity });
//         dispatch({ type: 'REMARKS_CHANGE', payload: editedRow.remarks });

//     };

//     const handleSaveEdit = () => {
//         const { selectedState, selectedCity } = formData;

//         if (selectedState && selectedCity) {
//             const updatedTableData = [...tableData];
//             updatedTableData[editingRow] = {
//                 currentLocation: formData.currentLocation ? 'Yes' : 'No',
//                 selectedCountry: formData.currentLocation ? 'India' : formData.selectedCountry,
//                 selectedState: formData.selectedState,
//                 selectedCity: formData.selectedCity,
//                 remarks: formData.remarks,
//             };

//             setTableData(updatedTableData);
//             setEditingRow(null);
//         } else {

//             toast.error('Please select both state and city before saving.');
//         }
//     };
//     const handleCancelEdit = () => {
//         console.log(editingRow, 'check editing row value')
//         if (editingRow !== null) {

//             if (editingRow === tableData.length - 1) {
//                 const lastAddedRow = tableData[editingRow];

//                 if (!lastAddedRow.selectedState || !lastAddedRow.selectedCity) {
//                     // Remove the last added row if no state or city is selected
//                     setTableData(tableData.slice(0, -1));
//                     toast.warning('Row canceled and deleted');
//                     dispatch({ type: 'CHECKBOX_CHANGE', payload: '' });
//                     setEditingRow(null); // Reset editingRow
//                     return; // Exit the function to avoid further operations on deleted row
//                 }
//             }
//         }

//         // Reset form values only if canceling an edit operation
//         if (editingRow !== null) {
//             dispatch({ type: 'DROPDOWN_CHANGE', payload: '' });
//             dispatch({ type: 'STATE_CHANGE', payload: '' });
//             dispatch({ type: 'CITY_CHANGE', payload: '' });
//             dispatch({ type: 'REMARKS_CHANGE', payload: '' });
//         }

//         setEditingRow(null);
//     };



//     const handleCountryChange = (e) => {
//         const selectedCountry = e.target.value;

//         dispatch({ type: 'DROPDOWN_CHANGE', payload: selectedCountry });

//         // Disable currentLocation checkbox based on the selected country
//         dispatch({ type: 'CURRENT_LOCATION_DISABLED', payload: selectedCountry !== '' });

//         // Additional check to disable the checkbox when a specific country is selected
//         const isCheckboxDisabled = selectedCountry === 'specificCountry'; // Replace 'specificCountry' with the actual country value
//         setIsFormEnabled(!isCheckboxDisabled);

//         if (isCheckboxDisabled) {
//             dispatch({ type: 'CHECKBOX_CHANGE' });
//         }

//     };

//     return (
//         <div>
//             <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

//             <form>

//                 <div className='container d-flex justify-content-around align-items-center bg-dark text-white p-5'>
//                     <label>
//                         <input
//                             type='checkbox'
//                             checked={formData.currentLocation}
//                             onChange={handleCheckboxChange}
//                             disabled={!isFormEnabled || formData.selectedCountry !== ''}
//                         />
//                         Current Location
//                     </label>
//                     <br />

//                     <label>
//                         Select Country:
//                         <select
//                             value={formData.selectedCountry}
//                             onChange={handleCountryChange}
//                             disabled={formData.currentLocation || !isFormEnabled}
//                         >
//                             <option value='' disabled>
//                                 Select Country
//                             </option>
//                             {formData.countries.map((country) => (
//                                 <option key={country} value={country}>
//                                     {country}
//                                 </option>
//                             ))}
//                         </select>
//                     </label>
//                     <br />




//                     <label>
//                         Remarks:
//                         <textarea
//                             value={formData.remarks}
//                             onChange={(e) => dispatch({ type: 'REMARKS_CHANGE', payload: e.target.value })}
//                             disabled={!isFormEnabled}
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
//                     disabled={editingRow !== null}
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
//                     {tableData.map((row, index) => (
//                         <tr key={index} className={editingRow === index ? 'editing' : ''}>
//                             <td>{row.selectedCountry}</td>
//                             <td>
//                                 <select
//                                     value={row.selectedState}
//                                     className={editingRow === index ? 'secondary' : 'dark'}
//                                     onChange={(e) => {
//                                         const updatedTableData = [...tableData];
//                                         updatedTableData[index].selectedState = e.target.value;
//                                         updatedTableData[index].selectedCity = ''; // Reset selectedCity when changing the state
//                                         setTableData(updatedTableData);
//                                         dispatch({ type: 'STATE_CHANGE', payload: e.target.value });
//                                     }}
//                                     disabled={editingRow === index ? false : true}
//                                 >
//                                     <option value=''>Select State</option>
//                                     {formData.states[row.selectedCountry]?.map((state) => (
//                                         <option key={state} value={state}>
//                                             {state}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select
//                                     value={row.selectedCity}
//                                     className={editingRow === index ? 'secondary' : 'dark'}
//                                     onChange={(e) => {
//                                         const updatedTableData = [...tableData];
//                                         updatedTableData[index].selectedCity = e.target.value;
//                                         setTableData(updatedTableData);
//                                         dispatch({ type: 'CITY_CHANGE', payload: e.target.value });
//                                     }}
//                                     disabled={editingRow === index ? false : true}
//                                 >
//                                     <option value=''>Select City</option>
//                                     {formData.cities[row.selectedState]?.map((city) => (
//                                         <option key={city} value={city}>
//                                             {city}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>{row.remarks}</td>
//                             <td>
//                                 {editingRow === index ? (
//                                     <>
//                                         <button className='btn btn-success me-3' onClick={handleSaveEdit}>
//                                             Save
//                                         </button>
//                                         <button className='btn btn-secondary' onClick={handleCancelEdit}>
//                                             Cancel
//                                         </button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <button className='btn btn-success me-3' onClick={() => handleEditRow(index)}>
//                                             Edit
//                                         </button>
//                                         <button
//                                             className='btn btn-danger'
//                                             onClick={(event) => handleDeleteRow(index, event)}
//                                         >
//                                             Delete
//                                         </button>

//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default FormComponent;
