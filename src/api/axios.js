import axios from "axios";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

let baseURI = '';

if (import.meta.env.MODE === 'development') {
  baseURI = 'http://localhost:8000'; // ✅ Remove `/api` here
} else if (import.meta.env.MODE === 'production') {
  baseURI = 'https://admin-api.bigodeals.net'; // ✅ Remove `/api` here too
}

const apiClient = axios.create({
  baseURL: baseURI,
  headers,
});

export default apiClient;
