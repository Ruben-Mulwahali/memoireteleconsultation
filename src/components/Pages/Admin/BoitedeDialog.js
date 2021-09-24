// boite de dialogue
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import { Close } from "@material-ui/icons";
  import React from "react";
  
  const useStyles = makeStyles((theme) => ({
    arrangement: {
      padding: theme.spacing(2),
      position: "absolute",
      top: theme.spacing(5),
    },
  }));
  
  function Dialogs(props) {
    const classes = useStyles();
    const { title, children, open, setOpen, taille } = props;
    return (
      <Dialog open={open} className={classes.arrangement} maxWidth={taille}>
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: "1" }}>
              {title}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setOpen(false)}
              color="secondary"
            >
              {
                <IconButton onClick={() => setOpen(false)} size="small">
                  <Close />
                </IconButton>
              }
            </Button>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>{children}</DialogContent>
      </Dialog>
    );
  }
  
  export default Dialogs;