import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './PaperSheet.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div id="story">
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h5">
          <a href={props.url}>{props.title}</a>
        </Typography>
        <Typography component="p">
          By: {props.author}
        </Typography>
        <Typography component="p">
          {props.comments} replies
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);