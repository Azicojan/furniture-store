import { Box, Container, Typography, Divider, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import image from "../assets/store_facade.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = ({ language }) => {
  return (
    <Container disableGutters>
      {/* Contact Section */}
      <Box id="contact" sx={{ padding: { xs: "40px 0", md: "50px 0" } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", paddingBottom: { md: "40px" } }}
          gutterBottom
        >
          {language === "EN" ? <>Contact Us</> : <>Biz bilan bog'lanish</>}
        </Typography>

        <Grid container spacing={6}>
          {/* Image Section */}
          <Grid size={{ sm: 12, md: 6 }}>
            <Box
              sx={{
                height: { xs: "100%", md: "700px" },
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image}
                alt="the image of the store"
                style={{
                  width: "90%",
                  height: "100%",
                  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" }, // Center text on mobile
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{ paddingLeft: { xs: 1 }, paddingRight: { xs: 1 } }}
              >
                {language === "EN" ? (
                  <>
                    Get in touch with us for any inquiries, or visit us at our
                    store. We’re here to help you make your space more beautiful
                    and functional.
                  </>
                ) : (
                  <>
                    Har qanday savollar bo‘yicha biz bilan bog‘laning yoki
                    do‘konimizga tashrif buyuring. Biz sizning makoningizni
                    yanada chiroyli va qulay qilishda yordam berishga tayyormiz.
                  </>
                )}
              </Typography>

              <TableContainer
                component={Paper}
                sx={{ maxWidth: 650, margin: "auto" }}
              >
                <Table aria-label="contact information table">
                  <TableBody>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: 20, fontWeight: 500 }}
                      >
                        {language === "EN" ? <>Address</> : <>Manzil</>}
                      </TableCell>
                      <TableCell>
                        {language === "EN" ? (
                          <>
                            Tashkent Ring Automobile Road, 111809, Eshanguzar,
                            Tashkent Region, Zangiota district
                          </>
                        ) : (
                          <>
                            Toshkent halqa avtomobil yo‘li, 111809, Eshonguzar,
                            Toshkent viloyati, Zangiota tumani
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: 20, fontWeight: 500 }}
                      >
                        {language === "EN" ? <>Hours</> : <>Ish vaqti</>}
                      </TableCell>
                      <TableCell>
                        {language === "EN" ? (
                          <>
                            Monday - Saturday: 9 AM - 6 PM
                            <br />
                            Sunday: 9 AM - 5 PM
                          </>
                        ) : (
                          <>
                            Dushanba - Shanba: 9:00 dan - 18:00 gacha
                            <br />
                            Yakshanba: 9:00 dan 17:00 gacha
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: 20, fontWeight: 500 }}
                      >
                        {language === "EN" ? <>Contacts</> : <>Aloqa uchun</>}
                      </TableCell>
                      <TableCell>
                        +998 (99) 895 24 04 {/* Call button for mobile view */}
                        <Button
                          href="tel:+998998952404"
                          variant="contained"
                          startIcon={<PhoneIcon />}
                          size="small"
                          sx={{
                            display: { xs: "inline-flex", md: "none" }, // Only show on mobile
                            margin: "5px 0 5px 0",
                          }}
                          onClick={() => {
                            if (typeof window.gtag !== "undefined") {
                              window.gtag("event", "call_button_click", {
                                event_category: "engagement",
                                event_label: "Call Button",
                                value: 1,
                              });
                            }
                          }}
                        >
                          {language === "EN" ? "Call" : "Qo'ng'iroq qilish"}
                        </Button>
                        <br />
                        <TelegramIcon
                          sx={{ fontSize: "inherit", verticalAlign: "middle" }}
                        />{" "}
                        @SubhanAlloh571
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            {/* Google Map Box */}
            <Box
              sx={{
                maxWidth: { xs: "90%", md: 650 },
                margin: "20px auto",
                height: language === "EN" ? 400 : 360,
                boxShadow: 3,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <iframe
                title="Store Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d739.0828444691626!2d69.15105788714854!3d41.25902217132753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89f3d6a97b29%3A0x8ac99992fb5b9be5!2sHalil%20Hoji%20Ota%20mebellar%20uyi!5e1!3m2!1sen!2s!4v1725869553658!5m2!1sen!2s"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Container>
  );
};

export default Contact;
