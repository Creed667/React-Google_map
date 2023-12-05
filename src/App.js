import React from 'react';
import SignUpForm from './SignUpForm'; // Import your SignUpForm component here
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

import donorMarkerIcon from './location.png';

const mapContainerStyle = {
  width: '800px',
  height: '600px',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};

const donorMarkers = [
  { id: 1, position: { lat: 40.7128, lng: -74.0060 }, donorInfo: { name: 'John Doe', profile: 'URL_TO_PROFILE_1' } },
  // Add more markers with donor information
];

function App() {
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [myMarker, setMyMarker] = React.useState(null); // State to represent your marker

  // Function to handle click on your own marker
  const handleMyMarkerClick = () => {
    setSelectedMarker(myMarker);
  };

  return (
    <div>
      <h1>Blood Donor Map</h1>
      <SignUpForm /> {/* Include your SignUpForm component here */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {/* Render donor markers */}
        {donorMarkers.map(marker => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarker(marker)}
            // Add a custom icon for donor markers
            icon={{
              url: donorMarkerIcon, // Replace with the URL of your custom donor marker icon
              scaledSize: new window.google.maps.Size(30, 30), // Adjust the size of the marker icon
            }}
          />
        ))}
        {myMarker && ( // Display your own marker separately if it exists
          <Marker
            position={myMarker.position}
            onClick={handleMyMarkerClick}
          />
        )}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h2>{selectedMarker.donorInfo.name}</h2>
              <a href={selectedMarker.donorInfo.profile} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default App;
