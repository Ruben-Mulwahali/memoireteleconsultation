import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    root:{

        backgroundColor: '#364A56',
    
    },

    pageheader:{
        padding:theme.spacing(0.5),
        display:"flex",
        marginBottom:theme.spacing(3)
    },

    pageIcon:{

        display:"align-block",
        padding:theme.spacing(2),
        color:"#3c44b1"

    },

    pageTitle:{
        paddingLeft :theme.spacing(4),
    }


}));


function Pageheader( props) {

    const {title, subtitle, icon}= props;
    const classes = useStyles();

    return (
            <Paper elevation={1} square className={classes.root}  >

                    <div className={classes.pageheader}>
                        <card className={classes.pageIcon}>
                            {icon}
                        </card>
                        <div className={classes.pageTitle}>
                            <Typography variant="h5" component="div" >
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" component="div" >
                                {subtitle}
                            </Typography>
                        </div>
                    </div>

            </Paper>
  );
}

export default Pageheader;
