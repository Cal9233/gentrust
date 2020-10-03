import React from "react";
import Gps from "../components/Gps";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  message: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
  },
  button: {
    marginTop: "1rem",
    color: "#E5DADA",
    borderColor: "#E5DADA",
  },
  aboutMe: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#E5DADA",
    },
    "& label": {
      color: "#E5DADA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E5DADA",
      },
      "&:hover fieldset": {
        borderColor: "#E5DADA",
      },
      "& .Mui-focused field": {
        borderColor: "#E5DADA",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email sent!");
        },
        (error) => {
          console.log(error.text);
          alert("something went wrong!");
        }
      );
  }
  return (
    <Box component="div" style={{ background: "#840032", height: "100vh" }}>
      <Grid container justify="center" className={classes.message}>
        <Box
          component="form"
          className={classes.form}
          action="/contact"
          name="contact"
          onSubmit={sendEmail}
        >
          <Typography
            variant="h2"
            style={{
              color: "#E5DADA",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contact me!
          </Typography>
          <InputField type="hidden" name="user_name" value="contact" />
          <InputField
            fullWidth={true}
            required
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "#E5DADA" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            requred
            name="user_email"
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "#E5DADA" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            required
            name="company_name"
            label="Company Name"
            variant="outlined"
            inputProps={{ style: { color: "#E5DADA" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            required
            name="message"
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "#E5DADA" } }}
            margin="dense"
            size="medium"
            multiline
            rows={8}
            rowsMax={10}
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            type="submit"
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
