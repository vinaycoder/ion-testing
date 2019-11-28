export const signup = user => (
    fetch("api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
  export const login = user => (
    fetch("api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
  export const logout = () => (
    fetch("api/logout", { method: "get" })
  );

  export const checkLoggedIn = () => (  
   fetch('/api/session', { method: "get" })
    // const session = await response.json();  
    // return session;
);