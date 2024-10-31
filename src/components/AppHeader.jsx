import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Select,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/2009_darker.png";
import { FlagIcon } from "react-flag-kit";

//#555D50

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

const AppHeader = ({ language, onLanguageChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isWideMobile, setIsWideMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Detect mobile screens
      const isWide = window.innerWidth > window.innerHeight * 1.2; // Detect wide aspect rations (landscape-like)
      const isLandscape =
        typeof window.orientation !== "undefined" &&
        (window.orientation === 90 || window.orientation === -90);

      setIsWideMobile((isMobile && isWide) || isLandscape);
    };

    handleResize(); // Initial check on load

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Step 2: Define text for both languages

  const text = {
    EN: {
      aboutUs: "About Us",
      products: "Products",
      contact: "Contact",
      storeName: "Halil Hoji Ota",
      storeType: "Furniture House",
    },
    UZ: {
      aboutUs: "Biz haqimizda",
      products: "Mebel to'plamlari",
      contact: "Aloqa",
      storeName: "Halil Hoji Ota",
      storeType: "Mebellar Uyi",
    },
  };

  const menuItems = [
    { text: text[language].aboutUs, href: "#about-us" },
    { text: text[language].products, href: "#products" },
    { text: text[language].contact, href: "#contact" },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position={isWideMobile ? "static" : "sticky"} // Only static for wide mobile (landscape-like)
          color="primary"
          disablegutters="true"
          maxwidth="false"
        >
          <Toolbar>
            {/*Logo section */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="logo"
              href="#main"
              sx={{
                mr: 2,
                borderRadius: "30%",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
            </IconButton>

            {/* Store Name */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#eceff1" }}
            >
              {text[language].storeName}
              <br />
              {text[language].storeType}
            </Typography>

            {/* Desktop Menu Items */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
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
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>

            {/* Language Selector */}
            <Select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              variant="standard"
              disableUnderline
              sx={{
                color: "white",
                display: { xs: "none", md: "block" },
                ".MuiSelect-icon": {
                  color: "white",
                },
              }}
            >
              <MenuItem value="EN">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FlagIcon code="GB" size={24} style={{ marginRight: 8 }} />
                  EN
                </Box>
              </MenuItem>
              <MenuItem value="UZ">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FlagIcon code="UZ" size={24} style={{ marginRight: 8 }} />
                  UZ
                </Box>
              </MenuItem>
            </Select>

            {/* Mobile Menu Icon */}

            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItemButton key={item.text} component="a" href={item.href}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
            <Divider />
            <ListItem>
              <Select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value)}
                variant="standard"
                fullWidth
              >
                <MenuItem value="EN">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FlagIcon code="GB" size={24} style={{ marginRight: 8 }} />
                    EN
                  </Box>
                </MenuItem>
                <MenuItem value="UZ">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FlagIcon code="UZ" size={24} style={{ marginRight: 8 }} />
                    UZ
                  </Box>
                </MenuItem>
              </Select>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppHeader;
