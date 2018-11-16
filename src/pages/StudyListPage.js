import React, { Component } from 'react';
import FlashCard from '../components/FlashCard/FlashCard';
import Grid from '@material-ui/core/Grid';
import NewFlashCard from '../components/FlashCard/NewFlashCard';
import { Api } from '../services/Api';

class StudyListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
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

    componentWillMount = async() => {
        await this.refresh();
    }

    refresh = async() => {
        let response = await Api.get('card');
        this.setState({ cards: response.data });
    }

    render() {
        const {cards} = this.state;
        return (
            <div className="root">
                {this.refresh}
                <Grid container spacing={24} style={{padding: 24}}>
                    {cards.map(card => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <FlashCard card={card}/>
                        </Grid>
                    ))}
                </Grid>
                <NewFlashCard />
            </div>
        );
    }
}

export default StudyListPage;