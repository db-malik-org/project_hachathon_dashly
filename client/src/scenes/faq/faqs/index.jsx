import React from "react";
import { Paper, Col, Grid, Container } from "@mantine/core";
import useStyles from "./useStyles.js";

function FAQPage() {
  const link = [{ label: "Contact", link: "/contact" }];
  const classes = useStyles();
  const questionsAnswers = [
    {
      question: "Quel est votre objectif ?",
      answer:
        "L'Appel à l'Utilisation de l'Analyse Comparative de l'Impôt sur la Fortune Immobilière entre les Régions pour une Gestion Équitable et Informed",
    },
    {
      question: "Quelles sont les principales fonctionnalités du site web ?",
      answer: "Visualiser les données fiscales de différentes régions.",
    },
    {
      question: "Comment installer votre projet localement ?",
      answer: (
        <>
          Veuillez cliquer{" "}
          <a href="https://github.com/db-malik-org/project_hachathon_dashly#readme">
            Github
          </a>{" "}
          pour accéder à notre page GitHub où vous trouverez des instructions
          détaillées.
        </>
      ),
    },
    {
      question: "Comment pouvons-nous vous contacter ?",
      answer: (
        <>
          Veuillez cliquer sur {""}
          <a href={link[0].link}>contact</a>
          {""} pour accéder à notre page de contact.
        </>
      ),
    },
  ];

  return (
    <Paper
      padding="xl"
      shadow="xs"
      className={classes.form}
      style={{ backgroundColor: "#191F45" }}
    >
      <Container>
        <Grid gutter="xl" style={{}}>
          <Col Col span={12}>
            <h1 style={{ color: "rgb(255, 232, 181)", textAlign: "center" }}>
              Questions et réponses
            </h1>
          </Col>
          {questionsAnswers.map((item) => (
            <>
              <Col
                span={12}
                style={{ color: "rgb(255, 232, 181)", padding: "20px" }}
              >
                <h1>{item.question}</h1>
              </Col>
              <Col span={12}>
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    borderRadius: "15px",
                    backgroundColor: "#fff6e0",
                    padding: "10px",
                  }}
                >
                  <h3
                    style={{
                      color: "black",
                    }}
                  >
                    {item.answer}
                  </h3>
                </div>
              </Col>
            </>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}

export default FAQPage;
