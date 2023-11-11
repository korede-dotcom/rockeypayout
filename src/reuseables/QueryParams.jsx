import React from "react";
import { useLocation } from "react-router-dom";

export const QueryParams = (name) => {
  // Use the useLocation hook to get the current location, including query parameters
  const location = useLocation();

  // Access the query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  // Get the value of a specific query parameter, e.g., "currencyCode"
return queryParams.get(`currency`);

//   return (
//     <div>
//       <h1>Query Parameter Example</h1>
//       <p>Query Parameter - Currency Code: {currencyCode}</p>
//     </div>
//   );
};

// export default YourComponent;
