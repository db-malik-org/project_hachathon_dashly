import React from "react";
import {
  Paper,
  Container,
  Grid,
  Col,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import useStyles from "./style.js";

function ContactForm() {
  const { classes } = useStyles();

  return (
    <Paper padding="xl" shadow="xs" className={classes.form}>
      <Container>
        <Grid gutter="xl">
          <Col span={12} className={classes.input}>
            <h2 className={classes.title}>Nom</h2>
            <TextInput label="nom" placeholder="Veuillez entrer votre nom" />
          </Col>
          <Col span={12} className={classes.input}>
            <h2 className={classes.title}>Prenom</h2>
            <TextInput
              label="prenom"
              placeholder="Veuillez entrer votre prenom"
            />
          </Col>
          <Col span={12} className={classes.input}>
            <h2 className={classes.title}>Email</h2>
            <TextInput
              label="email"
              placeholder="Veuillez entrer votre email"
            />
          </Col>
          <Col span={12} className={classes.input}>
            <h2 className={classes.title}>Message</h2>
            <Textarea
              label="message"
              placeholder="Veuillez entrer votre message"
              autosize
              minRows={3}
            />
          </Col>
          <Col span={12}>
            <Button className={classes.button}>Submit</Button>
          </Col>
        </Grid>
      </Container>
    </Paper>
  );
}

export default ContactForm;
