import * as actionTypes from './Type';

export const initialValue = {
  data: [],
  selectedCountry: '',
  selectedState: '',
  selectedCity: '',
  remarks: '',
  countries: ['USA', 'Canada', 'India'],
  states: {
    USA: ['NewYork', 'California', 'Texas'],
    Canada: ['Ontario', 'Quebec', 'BritishColumbia'],
    India: ['Delhi', 'Mumbai', 'Bangalore'],
  },
  cities: {
    NewYork: ['New York City', 'Buffalo'],
    California: ['Los Angeles', 'San Francisco'],
    Texas: ['Houston', 'Dallas'],
    Ontario: ['Toronto', 'Ottawa'],
    Quebec: ['Montreal', 'Quebec City'],
    BritishColumbia: ['Vancouver', 'Victoria'],
    Delhi: ['New Delhi', 'Old Delhi'],
    Mumbai: ['South Mumbai', 'North Mumbai'],
    Bangalore: ['Electronic City', 'Whitefield'],
  },
  formData: {
    country: "",
    location: false,
    remarks: "",
    list: [],

  },
  countryFlag: false,
  locationFlag: false
}
export const reducer = (state, action) => {
  console.log(action)


  switch (action.type) {
    case actionTypes.SELECT_COUNTRY:
      return {
        ...state,
        formData: { ...state.formData, country: action.payload },
        countryFlag: action.payload === "" ? false : true
      };
    case actionTypes.SELECT_LOCATION:
      return {
        ...state,
        formData: { ...state.formData, location: action.payload },
        locationFlag: action.payload === false ? false : true
      };
    case actionTypes.SELECT_STATE:

      return {
        ...state,
        selectedState: action.payload,
        formData: { ...state.formData, state: action.payload }

      };
    case actionTypes.SELECT_CITY:

      return {
        ...state,
        selectedCity: action.payload,
        formData: { ...state.formData, state: action.payload },
      };

    case 'addrow':
      return {
        ...state,
        formData: { ...state.formData, list: [...state.formData.list, action.payload] },

        // formData: { ...state.formData, list: state.formData.list.push(action.payload) },
      };
      case actionTypes.SAVE_ROW:
        const { index } = action.payload;
  
        // Assuming you have an index property in each list item
        const updatedList = state.formData.list.map((item) =>
          item.index === index
            ? {
                ...item,
                selectedState: state.selectedState,
                selectedCity: state.selectedCity,
              }
            : item
        );
  
        return {
          ...state,
          formData: {
            ...state.formData,
            list: updatedList,
          },
        };
  
      case actionTypes.DELETE_ROW:
        // Assuming you have a function to delete the row at the specified index
        // Replace this logic with your actual delete logic
        const filteredList = state.formData.list.filter((_, index) => index !== action.payload.index);
        return {
          ...state,
          formData: {
            ...state.formData,
            list: filteredList,
          },
        };
    default:
      return state;
  }
};

