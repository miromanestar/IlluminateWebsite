import { createUseStyles } from "react-jss";
import React, { useState } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import * as DATA from "../../content/pages/client.json";
import { Title } from "@mui/icons-material";

const useStyles = createUseStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.mutedWhite,
  },
  container: {
    marginTop: "250px",
  },
  section1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "90px",
  },
  section2: {
    background: theme.colors.darkGradient,
    padding: "60px",
    borderBottomLeftRadius: "0.75rem",
    borderBottomRightRadius: "0.75rem",
  },
  subtitle: {
    flexDirection: "column",
    textAlign: "center",
    padding: "20px",
  },
  subtitle2: {
    flexDirection: "column",
    textAlign: "center",
    paddingTop: "15px",
    paddingBottom: "13px",
    color: "white",
  },
}));

const Clients = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallerThan768 = useMediaQuery("(max-width: 768px)");
  const [clients1and2, setClients1and2] = useState([
    {
      id: 1,
      name: DATA.Client_1,
      image: DATA.image1,
    },
    { id: 2, name: DATA.Client_2, image: DATA.image2 },
    {
      id: 3,
      name: DATA.Client_3,
      image: DATA.image3,
    },
    {
      id: 4,
      name: DATA.Client_4,
      image: DATA.image4,
    },
  ]);
  const [clients3and4, setClients3and4] = useState([
    {
      id: 5,
      name: DATA.Current_Client_1,
      image: DATA.image5,
    },
  ]);
  return (
    <div className={classes.root}>
      <Header title={DATA.header} />
      <Main className={classes.container} style={{ flexDirection: "column" }}>
        <Typography
          gutterBottom
          variant="h2"
          component="h2"
          className={classes.subtitle}
          fontWeight="bold"
        >
          {DATA.Title1}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h5"
          paddingLeft={isSmallerThan768 ? 1 : 5}
          paddingRight={isSmallerThan768 ? 1 : 5}
        >
          {DATA.Subtitle1}
        </Typography>
        <section className={classes.section1}>
          <Grid container spacing={6}>
            {clients1and2.map((client) => (
              <Grid item xs={12} sm={6} md={3} key={client.id}>
                <Card
                  style={{
                    background: theme.colors.darkGradient,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="230"
                      image={client.image}
                      alt={client.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {client.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
        <section className={classes.section2}>
          <Typography
            gutterBottom
            variant="h2"
            component="h2"
            className={classes.subtitle2}
            fontWeight="bold"
          >
            {DATA.Title2}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            paddingLeft={isSmallerThan768 ? 1 : 5}
            paddingRight={isSmallerThan768 ? 1 : 5}
            color={"white"}
            paddingBottom={5}
            style={{ textAlign: "center" }}
          >
            {DATA.Subtitle2}
          </Typography>
          <Container
            style={{
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {clients3and4.map((client) => (
              <Grid item xs={12} sm={6} md={3} key={client.id}>
                <Card
                  style={{
                    background: theme.colors.darkGradient,
                    color: "white",
                    textAlign: "center",
                    margin: "30px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="230"
                      image={client.image}
                      alt={client.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {client.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Container>
        </section>
      </Main>
    </div>
  );
};

export default Clients;
