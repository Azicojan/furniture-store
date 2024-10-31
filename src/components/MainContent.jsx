import React from "react";
import { Box, Container, Typography } from "@mui/material";
import welcomingImage from "../assets/unsplash_1.jpg";

const MainContent = ({ language }) => {
  return (
    <Container disableGutters>
      {/* welcoming section*/}
      <Box
        id="main"
        sx={{
          height: {
            xs: "500px", // Smaller height for mobile devices
            md: "750px", // Default height for medium and larger devices
          },
          padding: {
            xs: "20px 10px", // Smaller padding for mobile devices
            md: "50px 0", // Default padding for medium and larger devices
          },
          backgroundImage: `url(${welcomingImage})`, // Adjust the path to your image
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "left",
            md: "center",
          },
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Fallback color, also adds a dark overlay
          backgroundBlendMode: "darken", // Darkens the image for better text readability
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.5)",
          alignItems: {
            xs: "center", // Center the text on mobile devices
            md: "flex-end", // Right align the text on medium and larger devices
          },
          justifyContent: {
            xs: "flex-start",
            md: "flex-start",
          },
          color: "white", // Text color for contrast
          textAlign: {
            xs: "center", // Center the text alignment on mobile devices
            md: "left", // Left align the text on medium and larger devices
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: {
              xs: language === "EN" ? "40px" : "10px", // No offset on mobile devices
              md: "110px", // Offset the text on medium and larger devices
            },
            right: {
              xs: "0px", // No offset on mobile devices
              md: "50px", // Offset the text on medium and larger devices
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "2rem", // Smaller font size on mobile devices
                md: "4rem", // Default font size on medium and larger devices
              },
            }}
          >
            {language === "EN" ? (
              <>
                <span style={{ color: "#607d8b" }}>Furniture</span> for <br />{" "}
                Home & Office
              </>
            ) : (
              <>
                Uy va Ofis <br /> uchun{" "}
                <span style={{ color: "#607d8b" }}>Mebel</span>
              </>
            )}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: 16, // Smaller font size on mobile devices
                md: 20, // Default font size on medium and larger devices
              },
              fontWeight: 400,
            }}
          >
            {language === "EN" ? (
              <>
                Create your perfect space with our custom furniture solutions.
              </>
            ) : (
              <>
                Bizning maxsus mebel yechimlarimiz bilan o'zingizning
                <br /> mukammal makoningizni yarating.
              </>
            )}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MainContent;
