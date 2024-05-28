
import * as actionTypes from './Type';



// export const selectCountry = (payload) => ({
//   type: actionTypes.SELECT_COUNTRY,
//   payload,
// });
// export const selectedState = (payload) => ({
//   type: actionTypes.SELECT_STATE,
//   payload,
// });
// // Add console logs in your action creator
// // export const selectCity = (payload) => {
// //   console.log('Select City Action', payload);
// //   return {
// //     type: actionTypes.SELECT_CITY,
// //     payload,
// //   };
// // };
// export const selectCity = (payload) => ({
//   type: actionTypes.SELECT_CITY,
//   payload,
// });


// export const selectCheckbox = (payload) => ({
//   type: actionTypes.SELECT_LOCATION,
//   payload,
// });


// Actions
export const selectCountry = (country) => ({
  type: actionTypes.SELECT_COUNTRY,
  payload: country,
});

export const selectedState = (state) => ({
  type: actionTypes.SELECT_STATE,
  payload: state,
});

export const selectCity = (data) => ({
  type: actionTypes.SELECT_CITY,
  payload: data,
});

export const selectCheckbox = (isChecked) => ({
  type: actionTypes.SELECT_LOCATION,
  payload: isChecked,
});

export const addRow = (row) => ({
  type: actionTypes.ADD_ROW,
  payload: row,
});

export const editRow = (payload) => ({
  type: 'editrow',
  payload,
});

export const saveRow = (payload) => ({
  type: actionTypes.SAVE_ROW,
  payload,
});

export const deleteRow = (index) => ({
  type: actionTypes.DELETE_ROW,
  payload: { index },
});