import React, { Component } from 'react';
import FlashCard from '../FlashCard/FlashCard';
import Grid from '@material-ui/core/Grid';

class StudyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'List1',
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
    }

    render() {
        const {cards} = this.state;
        return (
            <div className="root">
                <Grid container spacing={24} style={{padding: 24}}>
                    {cards.map(card => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <FlashCard card={card}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default StudyList;