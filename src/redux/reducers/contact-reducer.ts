import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../actions/action-types";
import { Contact } from "../actions/contact";

export interface Action {
  type: string;
  payload?: any;
}

const initialState: Contact[] = [];

const reducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case UPDATE_CONTACT:
      return state.map((contact: Contact) => {
        if (contact.id === action.payload.id) {
          return {
            ...contact,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            status: action.payload.status,
          };
        }
        return contact;
      });

    case DELETE_CONTACT:
      return state.filter((contact: Contact) => contact.id !== action.payload);

    default:
      return state;
  }
};

export default reducers;
