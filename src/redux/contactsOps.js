import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// First, create the thunk
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('https://66a63ec123b29e17a1a21ea5.mockapi.io/contacts')
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
