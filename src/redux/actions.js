import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("addContact");
export const deleteContact = createAction("deleteContact");
export const changeFilter = createAction("changeFilter");
