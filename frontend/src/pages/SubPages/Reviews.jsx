import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Paper, Box } from '@mui/material';

function Reviews() {
  const { emailId } = useParams(); // Extract emailId from URL parameters
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      console.log('Fetching reviews for emailId:', emailId); // Debugging line
      try {
        const response = await axios.get(`http://localhost:8000/reviews/email/${emailId}`);
        console.log('Received reviews:', response.data); // Debugging line
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [emailId]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Your Reviews
      </Typography>
      {reviews.length === 0? (
        <Typography variant="body1" align="center">
          You haven't left any reviews yet.
        </Typography>
      ) : (
        reviews.map((review, index) => (
          <Paper variant="outlined" sx={{ p: 2, my: 1 }} key={index}>
            <Typography variant="h5" textTransform="capitalize">
              {review.station.name}
            </Typography>
            <Typography variant="body1" color="GrayText">
              {review.date}
            </Typography>
            <Typography variant="subtitle1" textTransform="capitalize">
              {review.review}
            </Typography>
          </Paper>
        ))
      )}
    </Box>
  );
}

export default Reviews;
