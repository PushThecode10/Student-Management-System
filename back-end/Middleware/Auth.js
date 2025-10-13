import jwt from "jsonwebtoken";

// Middleware function to check the authentication token
export const authenticationToken = (req, res, next) => {
    // Extract the 'Authorization' header from the incoming request
    try {
    const authHeader = req.headers['authorization'];
    
    // If the 'Authorization' header is missing, deny access with a 401 status code
    if (!authHeader) {
        return res.status(401).json({ message: "Access Denied. No Token Provided" });
    }
    
        const [_, token] = authHeader.split(' ');

        if (!token) {
            return res.status(401).json({ message: "Access Denied. No Token Provided" });
        }    
           
        // Verify the token using the secret key (usually stored in environment variables)
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // If the token is valid, attach the userId from the decoded token to the request body
          req.userId = decoded.id; 
      

        // Move to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Error during token verification:', error);

        // If the token verification fails (e.g., token expired or malformed), send a 400 error
        throw new Error({ message: "Invalid or Expired Token" });
    }
};
