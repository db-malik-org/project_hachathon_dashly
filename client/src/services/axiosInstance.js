// axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },});

// Function to get regions
export const getRegion = async () => {
  try {
    const response = await axiosInstance.get('/impots/regions')
    return response.data;
  } catch (error) {
    console.error('Error fetching regions:', error);
    throw error;
  }
};

// Function to get impots progress by region
export const getImpotsByRegion = async (region) => {
  try {
    
    const response = await axiosInstance.get(`/impots/impotByRegion`);
    return response.data;
  } catch (error) {
    console.error('Error fetching impots:', error);
    throw error;
  }
};


// Function to get impots
export const getImpots = async () => {
  try {
    const response = await axiosInstance.get('/impots');
    return response.data;
  } catch (error) {
    console.error('Error fetching impots:', error);
    throw error;
  }
};

// Add more functions for other API requests as needed

export default axiosInstance;
