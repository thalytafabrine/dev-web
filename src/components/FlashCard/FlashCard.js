import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import './FlashCard.css';

const FlashCard = (props) => {
  return (
    <Card>
      <CardContent className="cardContent">
        <Typography variant="h4" component="h2">
          {props.card.term}
        </Typography>
        <Typography component="p">
          {props.card.definition}
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small" color="primary">Learn More</Button>
          <IconButton aria-label="Delete">
              <DeleteIcon />
          </IconButton>
      </CardActions>
    </Card>
  );
}

export default FlashCard;
