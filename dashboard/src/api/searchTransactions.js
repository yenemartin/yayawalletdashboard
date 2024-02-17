import CryptoJS from 'crypto-js';
import axios from "axios";

// Define the API credentials
// const API_KEY = import.meta.env.VITE_API_KEY;
// const API_SECRET = import.meta.env.VITE_API_SECRET;

const API_KEY = "key-test_493e9539-3765-493a-864d-1082e2636168";
const API_SECRET = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5Ijoia2V5LXRlc3RfNDkzZTk1MzktMzc2NS00OTNhLTg2NGQtMTA4MmUyNjM2MTY4Iiwic2VjcmV0IjoiMDUyOTNjMGU1MDlhOWE4ODRiMDVhMWYwZjkzYjdiNjMzMmE1NDUwMSJ9.is7GgbMLZ_ZUT1He9DG1dtEs5CxfpkVlCco0Xo6mHQY"

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