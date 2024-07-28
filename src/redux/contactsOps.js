import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('https://66a63ec123b29e17a1a21ea5.mockapi.io/contacts')
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const addContact = createAsyncThunk(
    'contacts/addContact', 
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('https://66a63ec123b29e17a1a21ea5.mockapi.io/contacts', contact)
            return response.data
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', 
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`https://66a63ec123b29e17a1a21ea5.mockapi.io/contacts/${id}`)
            return response.data
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
)
