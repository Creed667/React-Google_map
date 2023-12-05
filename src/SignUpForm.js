import React, { useState } from 'react';

function SignUpForm() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          // Handle errors in fetching user location
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Use latitude and longitude in your sign-up process or API call
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
    // Perform your sign-up logic here
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Your Latitude: {latitude}
        </label>
        <br />
        <label>
          Your Longitude: {longitude}
        </label>
        <br />
        <button type="button" onClick={getLocation}>
          Get My Location
        </button>
        <br />
        <input type="text" placeholder="Name" />
        {/* Add other sign-up form fields */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
