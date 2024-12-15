// src/redux/reducers/iconReducer.js
const initialState = {
  icons: JSON.parse(localStorage.getItem('icons')) || [],
};

const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ICON':
      const updatedIcons = [...state.icons, action.payload];
      localStorage.setItem('icons', JSON.stringify(updatedIcons));
      return { ...state, icons: updatedIcons };
    case 'DELETE_ICON':
      const filteredIcons = state.icons.filter((icon) => icon.id !== action.payload);
      localStorage.setItem('icons', JSON.stringify(filteredIcons));
      return { ...state, icons: filteredIcons };
    case 'EDIT_ICON':
      const editedIcons = state.icons.map((icon) =>
        icon.id === action.payload.id ? action.payload : icon
      );
      localStorage.setItem('icons', JSON.stringify(editedIcons));
      return { ...state, icons: editedIcons };
    default:
      return state;
  }
};

export default iconReducer;
