import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user); // Save user info in state
      console.log("Google User:", result.user);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  // Sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user info
      console.log("User signed out");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Google Authentication</h2>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <img src={user.photoURL} alt="Profile" width="100" />
          <br />
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
};

export default GoogleAuth;

