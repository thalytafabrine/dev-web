import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import './Cards.css';

class Cards extends Component {
    
    state = {
        cards: [
            {
                term: 'term1',
                definition: 'definition1'
            },
            {
                term: 'term2',
                definition: 'definition2'
            },
            {
                term: 'term3',
                definition: 'definition3'
            },
            {
                term: 'term4',
                definition: 'definition4'
            },
        ]
    }

    render() {
        const {cards} = this.state;
        return (
            <div className="root">
                <GridList cellHeight={180} className="gridList">
                    {cards.map(card => (
                        <Card className="card">
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
                    ))}
                </GridList>
            </div>
        );
    }
}

export default Cards;