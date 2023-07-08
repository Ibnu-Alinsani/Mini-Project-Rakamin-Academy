import axios from "axios";

export const API = axios.create({
  baseURL: "https://todo-api-18-140-52-65.rakamin.com/",
});

export function setAuthToken() {
  API.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNzcsImV4cCI6MTY5NzM3MTQ4OH0.ICpzotxoV4kxAfgJvYqgcbil-UHcvSz8Ju9KdMRLWb0`;
}
