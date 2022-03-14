import axios from 'axios'

const API_URL = '/api/listings/'

// Create new listing
const createListing = async (listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, listingData, config)

  return response.data
}
// get  list
const getList = async (listingId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + listingId, config)
  return response.data
}
// Update  listing
const updateListing = async (listingId, listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + listingId,listingData, config)

  return response.data
}

// Get user listing
const getListings = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}
// Get published listings
const getPublishedListings = async () => {

  const response = await axios.get(API_URL+"published")
  
  return response.data
}
// get one published listing
const getPublishedListing = async (listingId) => {
  const response = await axios.get(API_URL+"published/" + listingId)

  return response.data
}
// Delete user listing
const deleteListing = async (listingId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + listingId, config)

  return response.data
}

const listingService = {
  getList,
  createListing,
  updateListing,
  getListings,
  getPublishedListings,
  getPublishedListing,
  deleteListing,
}

export default listingService