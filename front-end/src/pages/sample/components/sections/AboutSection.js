import Section from "../Section";
import MyContainer from "@modules/components/ui/MyContainer";
import { Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import image1 from "../../../../../public/images/AddSale.png";
import { cardContents } from "@modules/utils/config";
import { maxHeaderSize } from "http";
import homeBG2 from"../../../../../public/images/gymbg2.png";

const AboutSection = ({ ...props }) => {
  console.log(image1);
  return (
    <Section
      {...props}
      className="flex items-center mt-[87px] -z-50"
      style={{
        backgroundImage: `url(${homeBG2.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MyContainer className="grid place-items-center h-[calc(100vh-74px)]">
        <div className="flex flex-col gap-12">
          <h1 className="text-6xl font-semibold	text-slate-50 drop-shadow-lg text-center">
            About
          </h1>
          <div className="flex md:flex-row flex-col gap-20">
            {cardContents.map((content, index) => (
              <Card sx={{ maxWidth: 345, maxHeight: 700 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    width="200"
                    image={content.image.src}
                    alt="Ctto"
                    style={{ maxHeight: 400 }}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                    >
                      {content.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                    >
                      {content.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      </MyContainer>
    </Section>
  );
};

export default AboutSection;
