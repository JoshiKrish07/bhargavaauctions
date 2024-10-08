const cors = (req) => {
  const headers = {
    "Access-Control-Allow-Origin": process.env.NODE_ENV === "development"
      ? "*" // Allow any origin in development
      : "https://bhargavaauctions.vercel.app", // Use your production frontend URL
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // Handle preflight (OPTIONS) requests
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers }); // Return 204 No Content for preflight
  }

  return headers; // Return headers for other requests
};

export default cors;
