import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top function

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <KeyboardArrowIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
