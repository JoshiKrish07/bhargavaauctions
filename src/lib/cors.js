const cors = (req) => {
    const headers = {
      "Access-Control-Allow-Origin": "https://bhargavaauctions.vercel.app", // Change '*' to your frontend URL in production
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
  
    // Handle preflight requests
    if (req.method === "OPTIONS") {
      return { status: 200, headers }; // Return headers for preflight
    }
  
    return headers; // Return headers for other requests
  };
  

export default cors;