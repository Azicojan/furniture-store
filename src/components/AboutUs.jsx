import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import image1 from "../assets/store_facade_2.jpg";
import image2 from "../assets/aboutus_1.jpg";
import image3 from "../assets/aboutus_2.jpg";
import Grid from "@mui/material/Grid2";

const AboutUs = ({ language }) => {
  return (
    <Container disableGutters>
      {/* About us Section */}
      <Box id="about-us" sx={{ padding: { xs: "40px 0", md: "80px 0" } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", paddingBottom: { md: "40px" } }}
          gutterBottom
        >
          {language === "EN" ? <>Our Story</> : <>Biz haqimizda</>}
        </Typography>
        <Grid container spacing={4}>
          {/* Left Side - Image Collage */}
          <Grid
            size={{ xs: 0, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }} // Hide on mobile
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
              }}
            >
              {/* First Image */}
              <img
                src={image1}
                alt="First Image"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "35%",
                  width: "65%",
                  zIndex: 3,
                  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
                  // border: "8px solid white",
                  //borderRadius: "4px",
                }}
              />
              {/* Second Image */}

              <img
                src={image2}
                alt="Second Image"
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "30%",
                  height: "40%",
                  width: "70%",
                  zIndex: 2,
                  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
              {/* Third Image */}

              <img
                src={image3}
                alt="Third Image"
                style={{
                  position: "absolute",
                  top: "65%",
                  left: 0,
                  height: "35%",
                  width: "65%",
                  zIndex: 1,
                  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Text Block */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box
              sx={{
                paddingLeft: { xs: 1, md: 4 },
                paddingRight: { xs: 1, md: 0 }, // Add padding on mobile for better spacing
                textAlign: { xs: "center", md: "left" }, // Center text on mobile
              }}
            >
              {language === "EN" ? (
                <>
                  <Typography variant="body1" paragraph>
                    Founded in 2009, Halil Hoji Ota Furniture House was built on
                    the vision of offering customers modern, stylish, and
                    functional furniture. Over the years, we have become a
                    trusted name in the industry, known for our commitment to
                    quality and customer satisfaction.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Since our inception, we have expanded our range to include a
                    diverse collection of furniture that caters to different
                    tastes and preferences. Whether you're looking for sleek,
                    contemporary designs or classic, timeless pieces, we have
                    something for everyone.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Our journey began with a small showroom, but thanks to the
                    loyalty of our customers and the hard work of our team, we
                    have grown into one of the leading furniture retailers in
                    the region. We believe that furniture should not only be
                    beautiful but also practical and long-lasting.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    We pride ourselves on our ability to source the finest
                    materials and collaborate with skilled craftsmen and
                    manufacturers to create furniture that stands the test of
                    time. Every piece in our collection is designed with
                    attention to detail and a passion for quality.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Thousands of satisfied customers have made Halil Hoji Ota
                    Furniture House their go-to destination for furniture, and
                    we are honored to be a part of their lives. Our commitment
                    to excellent customer service ensures that every visit to
                    our store is a pleasant and rewarding experience.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    We invite you to explore our collection and discover the
                    perfect furniture that will transform your living or working
                    space. At Halil Hoji Ota Furniture House, we are more than
                    just a furniture store—we are a community dedicated to
                    making your space a place of comfort, style, and
                    inspiration.
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body1" paragraph>
                    Halil Hoji Ota Mebellar Uyi 2009 yilda zamonaviy, sifatli va
                    funksional mebellarni taqdim etish maqsadida tashkil
                    etilgan. Yillar davomida biz mijozlarimizning ehtiyojini
                    qondirishga sodiq bo'lgan ishonchli nomga aylandik.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Tashkil etilganimizdan buyon, turli did va talablarga mos
                    keladigan har xil mebellar assortimentini kengaytirib
                    bordik. Agar siz nafis va zamonaviy yoki doimiy va klassik
                    dizaynda mebel izlaytogan bo'lsangiz, bizda har bir did
                    sohibi uchun mos keladigan to'plamlar bor.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Bizning tariximiz kichik ko'rgazma zalidan boshlangan, ammo
                    mijozlarimizning sadoqati va jamoamizning mehnati tufayli
                    biz mintaqadagi yetakchi mebel sotuvchilardan biriga
                    aylandik. Bizning fikrimizcha, mebel nafaqat chiroyli, balki
                    amaliy va chidamli bo'lishi kerak.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Biz etakchi usta hunarmandlar va ishlab chiqaruvchilar bilan
                    hamkorlik qilish va eng yaxshi materiallardan yasalgan
                    mebellarni topish qobiliyatimiz bilan faxrlanamiz, bu
                    mebellarni vaqt sinovidan o'tadigan qilib yaratish imkonini
                    beradi. Bizning kolleksiyamizdagi har bir buyum sifatga
                    bo'lgan ishtiyoq va diqqat bilan yaratilgan.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Minglab mamnun mijozlar Halil Hoji Ota Mebellar Uyini
                    o'zlarining mebel sotib olish maskaniga aylantirdilar va biz
                    ularning hayotining bir qismi bo'lishdan faxrlanamiz.
                    Mijozlarga a'lo xizmat ko'rsatishga sodiqligimiz
                    do'konimizga har bir tashrifni yoqimli va foydali tajribaga
                    aylantiradi.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Sizni bizning kollektsiyamiz bilan tanishishga va yashash
                    yoki ish joyingizni o'zgartiradigan betakror mebellarni
                    kashf etishga taklif qilamiz. Halil Hoji Ota Mebellar Uyi
                    shunchaki mebel do‘koni emas, balki sizning makoningizni
                    qulaylik, chiroy va ilhom maskaniga aylantirishga
                    bag‘ishlangan jamoadirmiz.
                  </Typography>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Container>
  );
};

export default AboutUs;
