class AppStorage {
    // Store the given token and user in local storage
    store(token, user) {
      // Try to store the data in local storage
      try {
        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
      }
      // If an error occurs, log it to the console
      catch (error) {
        console.error(error);
      }
    }
  
    // Clear the token and user from local storage
    clear() {
      // Try to clear the data from local storage
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      // If an error occurs, log it to the console
      catch (error) {
        console.error(error);
      }
    }
  
    // Get the stored token from local storage
    getToken() {
      // Try to retrieve the token from local storage
      try {
        return localStorage.getItem("token");
      }
      // If an error occurs, log it to the console and return null
      catch (error) {
        console.error(error);
        return null;
      }
    }
  
    // Get the stored user from local storage
    getUser() {
      // Try to retrieve the user from local storage
      try {
        return localStorage.getItem("user");
      }
      // If an error occurs, log it to the console and return null
      catch (error) {
        console.error(error);
        return null;
      }
    }
  }

  const appStorage = new AppStorage();
  export default appStorage;