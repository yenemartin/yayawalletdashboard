import CryptoJS from 'crypto-js';
import axios from "axios";

// Define the API credentials
const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;

// Define the base URL for the API
const BASE_URL = "/api/en/transaction";

export const searchTransactions = async (setSearchData, inputData) => {
    
    // Construct the URL for the find-by-user endpoint
    let url = `${BASE_URL}/search`;
 
    const timestamp = Date.now().toString(); // Get current timestamp in milliseconds
    const signature = signRequest(timestamp,'POST',`/api/en/transaction/search`,JSON.stringify(inputData)); // Sign the request
    
    // Add the API credentials as headers
    const headers = {
      'YAYA-API-KEY': API_KEY,
      'YAYA-API-TIMESTAMP': timestamp,
      'YAYA-API-SIGN': signature,
    };
      // Make a GET request to the API and get the response
    const response = await axios.post(url, inputData, { headers });
    setSearchData(response.data);
  };

  const signRequest = (timestamp, method,endpoint,body) => {
        const message = timestamp + method.toUpperCase() + endpoint + body;
        const signature = CryptoJS.HmacSHA256(message, API_SECRET).toString(CryptoJS.enc.Base64);
        return signature;
    };