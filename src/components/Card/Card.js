import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {card.term}
          </Typography>
          <Typography component="p">
            {card.definition}
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
            <IconButton aria-label="Delete">
                <DeleteIcon />
            </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default Card;
