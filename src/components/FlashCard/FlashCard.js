import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import './FlashCard.css';
import { Api } from '../../services/Api';

class FlashCard extends Component {

    delete = async() => {
        await Api.delete(`card/${this.props.card._id}`);
        if (this.props.deleteCard) {
          await this.props.deleteCard(this.props.card);
        }
    }

    render() {
        return (
            <Card>
                <CardContent className="cardContent">
                    <Typography variant="display1" component="h2">
                        {this.props.card.term}
                    </Typography>
                    <Typography variant="subtitle1">
                        {this.props.card.definition}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={this.delete} aria-label="Delete">
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default FlashCard;
