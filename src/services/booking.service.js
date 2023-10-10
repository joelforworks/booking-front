import axios from "axios";

const API_URL = 'http://localhost:8000/api';

export const getBookings = ( ) => {
  return axios.get(API_URL + "/booking");
}
export const getBooking = (id) => {
  return axios.get(API_URL + `/booking/${id}`);
}
export const storeBooking = (status,description) => {
  return axios.post(API_URL + "/booking/store", {
    status,
    description
  });
}
export const updateBooking = (id,status,description) => {
  return axios.put(API_URL + `/booking/update/${id}`,{
    status,
    description
  });
}
export const deleteBooking = (id) => {
  return axios.delete(API_URL + `/booking/delete/${id}`);
}
