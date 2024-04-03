import React, { useState, useEffect } from 'react';
import { Typography, Card, Button, Box, Stack } from '@mui/material';

const MyStations = () => {
  // Mock data for favorite stations (replace with actual data)
  const [favoriteStations, setFavoriteStations] = useState([
    { id: 1, name: 'Station A', location: '123 Main St', status: 'Available' },
    { id: 2, name: 'Station B', location: '456 Elm St', status: 'In Use' },
    { id: 3, name: 'Station C', location: '789 Oak St', status: 'Available' },
  ]);

  // Function to remove a station from favorites
  const removeFromFavorites = (stationId) => {
    setFavoriteStations(favoriteStations.filter(station => station.id !== stationId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        My Stations
      </Typography>
      {favoriteStations.map(station => (
        <Card key={station.id} elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
          <Typography variant="h6" gutterBottom>{station.name}</Typography>
          <Typography variant="body1" gutterBottom>Location: {station.location}</Typography>
          <Typography variant="body1" gutterBottom>Status: {station.status}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="error" onClick={() => removeFromFavorites(station.id)}>
              Remove
            </Button>
          </Box>
        </Card>
      ))}
      {favoriteStations.length === 0 && (
        <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
          You haven't added any favorite stations yet.
        </Typography>
      )}
    </div>
  );
};

export default MyStations;
