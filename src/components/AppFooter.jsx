import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import logo from "../assets/2009_darker.png";

/*
const menuItems = [
  { text: "About Us", href: "#about-us" },
  { text: "Products", href: "#products" },
  { text: "Contact", href: "#contact" },
];*/

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b4138",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#ffc400",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 16,
    },
  },
});

const AppFooter = ({ language }) => {
  const text = {
    EN: {
      aboutUs: "About Us",
      products: "Products",
      contact: "Contact",
    },
    UZ: {
      aboutUs: "Biz haqimizda",
      products: "Mebel to'plamlari",
      contact: "Aloqa",
    },
  };

  const menuItems = [
    { text: text[language].aboutUs, href: "#about-us" },
    { text: text[language].products, href: "#products" },
    { text: text[language].contact, href: "#contact" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          bgcolor: "#3b4138",
          color: "#fff",
          padding: "60px 60px 20px 60px",
        }}
      >
        <Container disableGutters maxWidth={false}>
          <Grid container spacing={5} sx={{ paddingBottom: 6 }}>
            {/* First Column: Store name, description and the logo */}
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Column for mobile, row for larger screens
                  alignItems: { xs: "center", sm: "flex-start" }, // Center on mobile
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "100px",
                    height: "100px",
                    marginBottom: { xs: "16px", sm: "0" }, // Add margin below the logo on mobile
                    marginRight: { sm: "16px" }, // Add margin to the right on larger screens
                  }}
                />
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    marginTop: "15px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {language === "EN" ? (
                      <>Halil Hoji Ota Furniture House</>
                    ) : (
                      <>Halil Hoji Ota Mebellar Uyi</>
                    )}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    {language === "EN" ? (
                      <>
                        Discover the finest furniture pieces tailored to your
                        taste. Our commitment is to provide comfort and style
                        for every customer.
                      </>
                    ) : (
                      <>
                        Sizning didingizga mos eng yaxshi mebel buyumlarini
                        kashf eting. Bizning maqsadimiz har bir mijoz uchun
                        qulaylik va ko'rkamlikni taqdim etishdir.
                      </>
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Second Column: Links */}
            <Grid
              size={{ xs: 12, sm: 6, md: 6 }}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {menuItems.map((item) => (
                <Typography
                  key={item.text}
                  variant="subtitle1"
                  component="a"
                  href={item.href}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "secondary.contrastText",
                    },
                    display: "inline",

                    mb: 1,
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: "#bdbdbd" }} />

          {/* Footer Bottom */}
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "13px", color: "#bdbdbd" }}
            >
              {language === "EN" ? (
                <>
                  &copy; {new Date().getFullYear()} Halil Hoji Ota Furniture
                  House, All rights reserved. Created by Aziz Zulfikorov.
                </>
              ) : (
                <>
                  &copy; {new Date().getFullYear()} Halil Hoji Ota Mebellar Uyi,
                  Barcha huquqlar himoyalangan. Aziz Zulfikorov tomonidan
                  yaratilgan.
                </>
              )}
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AppFooter;
