import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./action-types";
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: boolean;
}

export const addContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const updateContact = (contact: Contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id: number) => ({
  type: DELETE_CONTACT,
  payload: id,
});
