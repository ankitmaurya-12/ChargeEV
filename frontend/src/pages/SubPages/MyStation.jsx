// import React, { useState, useEffect } from 'react';
// import { Typography, Card, Button, Box, Stack } from '@mui/material';

// const MyStations = () => {
//   // Mock data for favorite stations (replace with actual data)
//   const [favoriteStations, setFavoriteStations] = useState([
//     { id: 1, name: 'Station A', location: '123 Main St', status: 'Available' },
//     { id: 2, name: 'Station B', location: '456 Elm St', status: 'In Use' },
//     { id: 3, name: 'Station C', location: '789 Oak St', status: 'Available' },
//   ]);

//   // Function to remove a station from favorites
//   const removeFromFavorites = (stationId) => {
//     setFavoriteStations(favoriteStations.filter(station => station.id !== stationId));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
//         My Stations
//       </Typography>
//       {favoriteStations.map(station => (
//         <Card key={station.id} elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
//           <Typography variant="h6" gutterBottom>{station.name}</Typography>
//           <Typography variant="body1" gutterBottom>Location: {station.location}</Typography>
//           <Typography variant="body1" gutterBottom>Status: {station.status}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Button variant="contained" color="error" onClick={() => removeFromFavorites(station.id)}>
//               Remove
//             </Button>
//           </Box>
//         </Card>
//       ))}
//       {favoriteStations.length === 0 && (
//         <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
//           You haven't added any favorite stations yet.
//         </Typography>
//       )}
//     </div>
//   );
// };

// export default MyStations;






import React, { useState, useEffect, useContext } from 'react';
import { Typography, Card, Button, Container } from '@mui/material';
import MainContext from "../../context/MainContext";
import axios from 'axios';

function MyStations() {
  const { isUserLogin, accessToken, profileId } = useContext(MainContext);
  // const { userLoggedOut, userName } = useContext(MainContext);

  const [favoriteStations, setFavoriteStations] = useState([]);

  useEffect(() => {
    if (isUserLogin) {
      getFavoriteStations();
    }
  }, [isUserLogin]);

  const getFavoriteStations = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/users/${profileId}/favorite-stations`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFavoriteStations(response.data);
    } catch (error) {
      console.error('Error fetching favorite stations:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" textAlign="center" mt={3}>
        My Stations
      </Typography>
      {favoriteStations.length > 0 ? (
        favoriteStations.map((station) => (
          <Card key={station.id} elevation={3} sx={{ padding: 3, margin: 2 }}>
            <Typography variant="h6" gutterBottom>{station.name}</Typography>
            <Typography variant="body1" gutterBottom>{station.location}</Typography>
            {/* Add more details about the station if needed */}
          </Card>
        ))
      ) : (
        <Typography variant="body1" textAlign="center">
          No favorite stations found.
        </Typography>
      )}
    </Container>
  );
}

export default MyStations;
