import axios from 'axios';
import React from 'react'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
});

export const useAxiosSecure = () => {
  return axiosSecure
}
