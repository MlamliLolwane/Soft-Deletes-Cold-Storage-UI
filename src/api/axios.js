import axios from "axios";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

let baseURI = '';

if (import.meta.env.MODE === 'development') {
  baseURI = 'http://localhost:8000'; //
} else if (import.meta.env.MODE === 'production') {
  baseURI = 'https://soft-deletes-cold-storage-api-production.up.railway.app'; // 
}

const apiClient = axios.create({
  baseURL: baseURI,
  headers,
});

export default apiClient;
