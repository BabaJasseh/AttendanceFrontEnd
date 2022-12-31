class Token {
  decode(payload) {
    return JSON.parse(atob(payload));
  }

  payload(token) {
    const payload = token.split(".")[1];
    return this.decode(payload);
  }

  
  isValid(token) {
    // Get the payload of the token
    let payload = this.payload(token);
    // If the payload is truthy (not null or undefined)
    if (payload) {
      // Check if the 'iss' property of the payload is equal to either of the two strings
      const isValidIssuer =
        payload.iss === "http://127.0.0.1:8000/api/login" ||
        payload.iss === "http://127.0.0.1:800/api/signup";
      // Return the result of the comparison
      return isValidIssuer;
    }
    // If the payload is not truthy, return false
    return false;
  }
}

const token = new Token();
export default token;

