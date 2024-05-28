// import React, { useReducer } from 'react';

// const initialState = {
//     rows: [],
//     currentLocation: false,
//     remarks: '',
//     selectedCountry: '',
//     selectedState: '',
//     selectedCity: '',
// };

// const formReducer = (state, action) => {
//     switch (action.type) {
//         case 'UPDATE_CURRENT_LOCATION':
//             return {
//                 ...state,
//                 currentLocation: action.payload,
//             };
//         case 'UPDATE_REMARKS':
//             return {
//                 ...state,
//                 remarks: action.payload,
//             };
//         case 'SELECT_COUNTRY':
//             return {
//                 ...state,
//                 selectedCountry: action.payload,
//                 selectedState: '',
//                 selectedCity: '',
//             };
//         case 'SELECT_STATE':
//             return {
//                 ...state,
//                 selectedState: action.payload,
//                 selectedCity: '',
//             };
//         case 'SELECT_CITY':
//             return {
//                 ...state,
//                 selectedCity: action.payload,
//             };
//         case 'ADD_ROW':
//             const newRow = {
//                 currentLocation: state.currentLocation,
//                 remarks: state.remarks,
//                 selectedCountry: state.selectedCountry,
//                 selectedState: state.selectedState,
//                 selectedCity: state.selectedCity,
//             };
//             return {
//                 ...state,
//                 rows: [...state.rows, newRow],
//                 currentLocation: false,
//                 remarks: '',
//                 selectedCountry: '',
//                 selectedState: '',
//                 selectedCity: '',
//             };
//         case 'DELETE_ROW':
//             return {
//                 ...state,
//                 rows: state.rows.filter((row, index) => index !== action.payload),
//             };
//         default:
//             return state;
//     }
// };

// const countries = ['USA', 'Canada', 'India'];
// const states = {
//     USA: ['New York', 'California', 'Texas'],
//     Canada: ['Ontario', 'Quebec', 'British Columbia'],
//     India: ['Maharashtra', 'Tamil Nadu', 'Karnataka'],
// };
// const cities = {
//     'New York': ['New York City', 'Albany', 'Buffalo'],
//     California: ['Los Angeles', 'San Francisco', 'San Diego'],
//     Texas: ['Houston', 'Dallas', 'Austin'],
//     Ontario: ['Toronto', 'Ottawa', 'Hamilton'],
//     Quebec: ['Montreal', 'Quebec City', 'Laval'],
//     'British Columbia': ['Vancouver', 'Victoria', 'Burnaby'],
//     Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
//     'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
//     Karnataka: ['Bangalore', 'Mysore', 'Hubli'],
// };

// const FormWithReducer = () => {
//     const [state, dispatch] = useReducer(formReducer, initialState);
//     React.useEffect(() => {
//         console.log("Selected State:", state.selectedState);
//         console.log("Selected City:", state.selectedCity);
//       }, [state.selectedState, state.selectedCity]);
    
//     const handleCheckboxChange = () => {
//         dispatch({
//             type: 'UPDATE_CURRENT_LOCATION',
//             payload: !state.currentLocation,
//         });
//     };

//     const handleRemarksChange = (e) => {
//         dispatch({
//             type: 'UPDATE_REMARKS',
//             payload: e.target.value,
//         });
//     };

//     const handleSelectCountry = (selectedCountry) => {
//         dispatch({ type: 'SELECT_COUNTRY', payload: selectedCountry });
//     };

//     const handleSelectState = (selectedState) => {
//         dispatch({ type: 'SELECT_STATE', payload: selectedState });
//         console.log(selectedState);
//     };

//     const handleSelectCity = (selectedCity) => {
//         dispatch({ type: 'SELECT_CITY', payload: selectedCity });
//     };

//     const handleAddRow = () => {
//         dispatch({ type: 'ADD_ROW' });
//     };

//     const handleDeleteRow = (index) => {
//         dispatch({ type: 'DELETE_ROW', payload: index });
//     };

//     return (
//         <div>
//             <label>
//                 Current Location:
//                 <input
//                     type="checkbox"
//                     checked={state.currentLocation}
//                     onChange={handleCheckboxChange}
//                 />
//             </label>

//             <label>
//                 Remarks:
//                 <input
//                     type="text"
//                     value={state.remarks}
//                     onChange={handleRemarksChange}
//                 />
//             </label>

//             <label>
//                 Country:
//                 <select
//                     value={state.selectedCountry}
//                     onChange={(e) => handleSelectCountry(e.target.value)}
//                 >
//                     <option value="">Select Country</option>
//                     {countries.map((country) => (
//                         <option key={country} value={country}>
//                             {country}
//                         </option>
//                     ))}
//                 </select>
//             </label>

//             <button onClick={handleAddRow} disabled={!state.selectedCountry}>
//                 Add Row
//             </button>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Current Location</th>
//                         <th>Remarks</th>
//                         <th>Country</th>
//                         <th>State</th>
//                         <th>City</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {state.rows.map((row, index) => (
//                         <tr key={index}>
//                             <td>{row.currentLocation ? 'Yes' : 'No'}</td>
//                             <td>{row.remarks}</td>
//                             <td>{row.selectedCountry}</td>
//                             <td>
//   <select
//     value={row.selectedState}
//     onChange={(e) => handleSelectState(e.target.value)}
//   >
//     <option value="">Select State</option>
//     {row.selectedCountry &&
//       states[row.selectedCountry] &&
//       states[row.selectedCountry].map((state) => (
//         <option key={state} value={state}>
//           {state}
//         </option>
//       ))}
//   </select>
//   {console.log("Selected State:", row.selectedState)}
// </td>


//         <td>
//           <select
//             value={row.selectedCity}
//             onChange={(e) => handleSelectCity(e.target.value)}
//           >
//             <option value="">Select City</option>
//             {row.selectedState &&
//               cities[row.selectedState] &&
//               cities[row.selectedState].map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//           </select>
//           {console.log("Selected City:", row.selectedCity)}
//         </td>
//                             <td>
//                                 <button onClick={() => handleDeleteRow(index)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default FormWithReducer;

import React from 'react';
import { useFormContext } from './samplecontext';

const FormWithReducer = () => {
    const { state, dispatch, countries, states, cities } = useFormContext();
  const handleCheckboxChange = () => {
    dispatch({
      type: 'UPDATE_CURRENT_LOCATION',
      payload: !state.currentLocation,
    });
  };

  const handleRemarksChange = (e) => {
    dispatch({
      type: 'UPDATE_REMARKS',
      payload: e.target.value,
    });
  };

  const handleSelectCountry = (selectedCountry) => {
    dispatch({ type: 'SELECT_COUNTRY', payload: selectedCountry });
  };

  const handleSelectState = (selectedState) => {
    dispatch({ type: 'SELECT_STATE', payload: selectedState });
  };

  const handleSelectCity = (selectedCity) => {
    dispatch({ type: 'SELECT_CITY', payload: selectedCity });
  };

  const handleAddRow = () => {
    dispatch({ type: 'ADD_ROW' });
  };

  const handleDeleteRow = (index) => {
    dispatch({ type: 'DELETE_ROW', payload: index });
  };

  return (
    <div>
      <label>
        Current Location:
        <input
          type="checkbox"
          checked={state.currentLocation}
          onChange={handleCheckboxChange}
        />
      </label>

      <label>
        Remarks:
        <input
          type="text"
          value={state.remarks}
          onChange={handleRemarksChange}
        />
      </label>

      <label>
        Country:
        <select
          value={state.selectedCountry}
          onChange={(e) => handleSelectCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          {['USA', 'Canada', 'India'].map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleAddRow} disabled={!state.selectedCountry}>
        Add Row
      </button>

      <table>
        <thead>
          <tr>
            <th>Current Location</th>
            <th>Remarks</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.rows.map((row, index) => (
            <tr key={index}>
           <td>
                <select
                  value={row.selectedState}
                  onChange={(e) => handleSelectState(e.target.value)}
                >
                  <option value="">Select State</option>
                  {row.selectedCountry &&
                    states[row.selectedCountry] &&
                    states[row.selectedCountry].map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                </select>
              </td>
              <td>
                <select
                  value={row.selectedCity}
                  onChange={(e) => handleSelectCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {row.selectedState &&
                    cities[row.selectedState] &&
                    cities[row.selectedState].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormWithReducer;
