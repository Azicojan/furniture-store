import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/products_1.jpg";
import image2 from "../assets/products_2.jpg";
import image3 from "../assets/products_3.jpg";
import image4 from "../assets/products_4.jpg";
import image5 from "../assets/products_5.jpg";
import image6 from "../assets/products_6.jpg";
import image7 from "../assets/products_7.jpg";
import image8 from "../assets/products_8.jpg";
import image9 from "../assets/products_9.jpg";
import image10 from "../assets/products_10.jpg";
import image11 from "../assets/products_11.jpg";
import image12 from "../assets/products_12.jpg";
import image13 from "../assets/products_13.jpg";
import image14 from "../assets/products_14.jpg";
import image15 from "../assets/products_15.jpg";
import image16 from "../assets/products_16.jpg";
import image17 from "../assets/products_17.jpg";
import image18 from "../assets/products_18.jpg";
import image19 from "../assets/products_19.jpg";
import image20 from "../assets/products_20.jpg";
import image21 from "../assets/products_21.jpg";
import image22 from "../assets/products_22.jpg";
import image23 from "../assets/products_23.jpg";
import image24 from "../assets/products_24.jpg";
import image25 from "../assets/products_25.jpg";

// Array of images

const images = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
  { src: image7, alt: "Image 7" },
  { src: image8, alt: "Image 8" },
  { src: image9, alt: "Image 9" },
  { src: image10, alt: "Image 10" },
  { src: image11, alt: "Image 11" },
  { src: image12, alt: "Image 12" },
  { src: image13, alt: "Image 13" },
  { src: image14, alt: "Image 14" },
  { src: image15, alt: "Image 15" },
  { src: image16, alt: "Image 16" },
  { src: image17, alt: "Image 17" },
  { src: image18, alt: "Image 18" },
  { src: image19, alt: "Image 19" },
  { src: image20, alt: "Image 20" },
  { src: image21, alt: "Image 21" },
  { src: image22, alt: "Image 22" },
  { src: image23, alt: "Image 23" },
  { src: image24, alt: "Image 24" },
  { src: image25, alt: "Image 25" },
];

const Products = ({ language }) => {
  return (
    <Container disableGutters>
      {/* Products Section */}
      <Box id="products" sx={{ padding: { xs: "40px 0", md: "50px 0" } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", paddingBottom: { md: "40px" } }}
          gutterBottom
        >
          {language === "EN" ? <>Our Products</> : <>Mebel Mahsulotlarimiz</>}
        </Typography>
        <Grid container spacing={6}>
          {/* Image Section with Carousel */}
          <Grid size={{ md: 6 }}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Carousel
                showThumbs={false}
                autoPlay={false} // Disable automatic sliding
                infiniteLoop={true} // Disable infinite loop
                swipeable={false} // Allow swiping on mobile phones
                showArrows={true} // show left and right arrows for manual navigation
                showStatus={true} // Hide the status indicator (e.g., "1 of 3")
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ))}
              </Carousel>
            </Box>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" }, // Center text on mobile
                padding: { xs: 1 },
              }}
            >
              {language === "EN" ? (
                <>
                  <Typography variant="body1" paragraph>
                    At <strong>Halil Hoji Ota Furniture House</strong>, our{" "}
                    <strong>office furniture</strong> collection is designed to
                    enhance productivity and comfort while adding a touch of
                    style to any workspace. Whether you're creating a home
                    office or outfitting a corporate environment, we offer a
                    wide range of <strong>chairs</strong>,{" "}
                    <strong>desks</strong>, and{" "}
                    <strong>office sofa sets</strong> to meet your specific
                    needs. Our ergonomic chairs provide the perfect balance of
                    support and comfort, helping you maintain good posture
                    throughout the workday.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Paired with our durable desks, available in a variety of
                    sizes and designs, you can build an efficient workspace that
                    is both functional and stylish. Whether you need a sleek,
                    minimalist desk for a small space or a more elaborate
                    workstation with storage solutions, our selection ensures
                    there's something for every type of office setup.
                  </Typography>

                  <Typography variant="body1" paragraph>
                    In addition to our office furniture, we also offer an
                    impressive selection of{" "}
                    <strong>sofas and sectionals</strong> for your living room.
                    Whether you prefer a modern minimalist design or something
                    more traditional and cozy, our collection features options
                    that suit every taste and space. Our sofas are crafted with
                    premium materials, ensuring not only long-lasting comfort
                    but also a sophisticated aesthetic that elevates your living
                    room. From compact two-seater sofas perfect for smaller
                    spaces to spacious sectionals ideal for family gatherings,
                    we provide a variety of sizes and configurations to meet
                    your needs.
                  </Typography>

                  <Typography variant="body1" paragraph>
                    At <strong>Halil Hoji Ota Furniture House</strong>, every
                    piece is crafted with care to ensure long-lasting quality
                    and timeless appeal.
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body1" paragraph>
                    <strong>Halil Hoji Ota Mebellar Uyi</strong> da biz sizning
                    barcha ehtiyojlaringizni qondirish uchun keng turdagi mebel
                    yechimlarini taklif etamiz. Bizning{" "}
                    <strong>ofis mebellari</strong> to‘plamimiz funksionallikni
                    zamonaviy dizayn bilan birlashtirib, samarali ish muhitini
                    yaratish uchun ajoyib tanlovdir. Siz yakka ish stollarini
                    yoki to‘liq ish joylarini izlayapsizmi, bizda kichik uy
                    ofislaridan tortib, katta korporativ joylargacha mos
                    keladigan variantlar mavjud.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Ofis mebellarimizga qoʻshimcha ravishda, mehmon xonangiz
                    uchun ham keng tanlovdagi{" "}
                    <strong>divan va yumshoq burchak to'plamlarini</strong>{" "}
                    taklif etamiz. Siz zamonaviy minimalistik dizaynni yoki
                    anʼanaviy va qulay uslubni afzal koʻrasizmi, kolleksiyamiz
                    har qanday did va joyga mos keladigan variantlarni oʻz
                    ichiga oladi. Bizning divanlarimiz yuqori sifatli
                    materiallardan tayyorlangan boʻlib, uzoq muddatli qulaylikni
                    va xonadonizga nafislikni taʼminlaydi. Kichik joylar uchun
                    moʻljallangan ikki oʻrinli ixcham divanlardan tortib,
                    oilaviy yigʻilishlar uchun keng yumshoq mebel
                    to'plamlargacha, biz har qanday ehtiyojingizga mos turli
                    oʻlcham va konfiguratsiyalarni taklif qilamiz.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Bizning yumshoq mebel to'plamlarimiz maksimal qulaylik va
                    moslashuvchanlik uchun ishlab chiqilgan. Yaqinlaringiz bilan
                    ucharashuvni rejalashtirayapsizmi yoki uzoq ish kunidan
                    keyin shunchaki dam olishni xohlaysizmi, ushbu mebellar
                    hamma uchun yetarli joyni taʼminlaydi. Koʻpgina
                    to'plamlarimiz moslashtiriladigan variantlarga ega boʻlib,
                    ularni makoningizga mukammal tarzda joylashtirish imkonini
                    beradi. Hashamatli matolar va mustahkam konstruktsiya bilan
                    bezatilgan divan va boshqa yumshoq mebellarimiz har qanday
                    xonaning ajralmas qismi boʻlib, siz va oilangiz uchun qulay
                    va zamonaviy muhit yaratadi.
                  </Typography>

                  <Typography variant="body1" paragraph>
                    <strong>Halil Hoji Ota Mebellar Uyi</strong> da har bir
                    buyum uzoq muddatli sifat va o'ziga hos jozibadorlikni
                    ta'minlash uchun yaratilgan.
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

export default Products;
