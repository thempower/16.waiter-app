import { API_URL } from "../config.js";

export const getAllTables = state => state.tables;
export const getTableById = (state, tableId) => state.tables.find((table) => table.id === tableId);

const createActionName = actionName => `app/tables/${actionName}`;
const REMOVE_TABLE = createActionName("REMOVE_TABLE");
const ADD_TABLE = createActionName("ADD_TABLE");
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const EDIT_TABLE = createActionName("EDIT_TABLE");

export const addTable = payload => ({ type: ADD_TABLE, payload });
export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(response => response.json())
      .then(tables => dispatch(updateTables(tables)));
  }
};

export const addTableRequest = newTable => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable),
    };
    fetch(`${API_URL}/tables`, options)
      .then(() => dispatch(addTable(newTable)))
  }
};

export const removeTableRequest = tableId => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`${API_URL}/tables/${tableId.toString()}`, options)
      .then(() => dispatch(removeTable(tableId)));
  }
};

export const editTableRequest = thisTable => {
  return (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thisTable),
    };
    fetch(`${API_URL}/tables/${thisTable.id}`, options)
      .then(() => dispatch(editTable(thisTable)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE: 
      return { ...statePart, tables: [...statePart.tables, { ...action.payload }]};
    case REMOVE_TABLE: 
      return { ...statePart, tables: [...statePart.tables.filter(table => action.payload !== table.id)]};
    case UPDATE_TABLES:
      return { ...statePart, tables: action.payload};
    default:
      return statePart;
  };
};

export default tablesReducer;