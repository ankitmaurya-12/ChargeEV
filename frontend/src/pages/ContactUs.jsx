import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import { Grid, Typography, Card, TextField, TextareaAutosize, Button, Box, Stack } from '@mui/material';

const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false); // Add useState here

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5v30ud6", "template_t9x4exi", form.current, {
        publicKey: "uFsrxfyrzbTFrm6Pw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true); // Show the popup
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography
        variant="h4"
        paddingBottom={5}
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        {/* Feedback Form */}
        <Grid item xs={12} md={6}>
          <Card elevation={10} sx={{ padding: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", marginBottom: 4 }}
            >
              Feedback Form
            </Typography>
            <Stack spacing={2} component="form" ref={form} onSubmit={sendEmail}>
              <TextField
                label="User Name"
                placeholder="Enter your Name"
                name="from_name"
                required
                fullWidth
              />
              <TextField
                label="Email"
                placeholder="Enter Your Email"
                name="from_email"
                type="email"
                required
                fullWidth
              />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Message"
                variant="outlined"
                name="message"
                required
                minRows={5}
                fullWidth
              />
              <Button variant="contained" size="large" type="submit" fullWidth>
                Submit
              </Button>
            </Stack>
          </Card>
        </Grid>

        {/* Office Info */}
        <Grid item xs={12} md={6}>
          <Card elevation={10} sx={{ padding: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", marginBottom: 4 }}
            >
              Office Info
            </Typography>
            <Stack spacing={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Visit Office
                </Typography>
                <Typography>Thane, Maharastra, India</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Call Us on
                </Typography>
                <Typography>+91 79771 41889 / +91 82917 08571</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Send Email
                </Typography>
                <Typography>ankitmaurya291202@gmail.com</Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {showPopup && (
  <div className="popup">
    <p>Message sent successfully!</p>
    <button className="closeButton" onClick={() => setShowPopup(false)}>Close</button>
  </div>
)}



      <Footer />
    </div>
  );
};

export default ContactUs;
