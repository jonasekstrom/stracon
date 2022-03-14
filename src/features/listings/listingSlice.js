import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import listingService from './listingService'

const initialState = {
  listings: [],
  listing: {
    title: "",
    ingress: "",  
    aboutCompany: "",
    scope: "",
    tasks: [],
    education: "",
    personalQualities: "",
    qualifications: "",
    languages: "",
    license: "",
    travels: "",
    deadline: "2022-05-02",
    location: "",
    published: "",
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new listing
export const createListing = createAsyncThunk(
  'listings/create',
  async (listingData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await listingService.createListing(listingData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get list all
export const getListings = createAsyncThunk(
  'listings/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await listingService.getListings(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Get all published listings
export const getPublishedListings = createAsyncThunk(
  'listings/getAllPublished',
  async () => {
      return await listingService.getPublishedListings()
  }
)
// Get one  published list
export const getPublishedListing = createAsyncThunk(
  'listings/getOnePublished',
  async (id) => {
      return await listingService.getPublishedListing(id)
  }
)
// Get list
export const getList = createAsyncThunk(
  'listings/getone',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await listingService.getList(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Update listing
export const updateListing = createAsyncThunk(
  'listings/update',
  async (data, thunkAPI) => {
    try {
      const {jobListingId, userData} = data
      const token = thunkAPI.getState().auth.user.token
      return await listingService.updateListing(jobListingId, userData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Delete user goal
export const deleteListing = createAsyncThunk(
  'listings/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await listingService.deleteListing(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createListing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createListing.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings.push(action.payload)
      })
      .addCase(createListing.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getListings.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getListings.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings = action.payload
      })
      .addCase(getListings.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPublishedListings.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPublishedListings.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings = action.payload
      })
      .addCase(getPublishedListings.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPublishedListing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPublishedListing.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listing = action.payload
      })
      .addCase(getPublishedListing.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateListing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateListing.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings = state.listings.filter(
          (listing) => listing._id !== action.payload.id
        )
      })
      .addCase(updateListing.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listing = action.payload
      })
      .addCase(getList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteListing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteListing.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings = state.listings.filter(
          (listing) => listing._id !== action.payload.id
        )
      })
      .addCase(deleteListing.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = listingSlice.actions
export default listingSlice.reducer