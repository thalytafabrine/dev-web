import React, { Component } from 'react';
import FlashCard from '../components/FlashCard/FlashCard';
import Grid from '@material-ui/core/Grid';
import NewFlashCard from '../components/FlashCard/NewFlashCard';
import { Api } from '../services/Api';
import NavBar from '../components/NavBar/NavBar';

class StudyListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cards: []
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
                <NavBar />
                <Grid container spacing={24} style={{padding: 24}}>
                    {cards.map(card => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <FlashCard card={card} deleteCard={this.refresh}/>
                        </Grid>
                    ))}
                </Grid>
                <NewFlashCard newCard={this.refresh}/>
            </div>
        );
    }
}

export default StudyListPage;