// src/redux/actions/iconActions.js
export const addIcon = (iconData) => ({
  type: 'ADD_ICON',
  payload: { ...iconData, id: Date.now() },
});

export const deleteIcon = (iconId) => ({
  type: 'DELETE_ICON',
  payload: iconId,
});

export const editIcon = (iconData) => ({
  type: 'EDIT_ICON',
  payload: iconData,
});
