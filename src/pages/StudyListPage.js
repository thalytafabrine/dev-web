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
            cards: [],
            idsCards : [],
            location: ''
        }
    }

    componentWillMount = () => {
        this.refresh();
    }

    refresh = () => {
        this.reset();
        let separateURL = (this.props.match.url).split('/');
        let url = separateURL[3].concat('/').concat(separateURL[4]);
        this.setState({location : url})
        Api.get(`${url}/card`).then(response => {
            let ids = response.data;
            this.setState({idsCards: ids});
            this.renderCards();
        });
    }

    reset = () => {
        this.setState({
            name: '',
            cards: [],
            idsCards: []
        });
    }

    renderCards = () => {
        this.state.idsCards && this.state.idsCards.forEach(id => {
            Api.get(`card/${id}`).then(response => {
                if (response.data !== null) {
                    this.setState({cards: this.state.cards.concat(response.data)});
                }
            });
        });
    }

    render() {
        const {cards} = this.state;
        return (
            <div className="root">
                <NavBar auth={true}/>
                <Grid container spacing={24} style={{padding: 24}}>
                    {cards.map(card => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <FlashCard card={card} deleteCard={this.refresh}/>
                        </Grid>
                    ))}
                </Grid>
                <NewFlashCard newCard={this.refresh} location={this.state.location}/>
            </div>
        );
    }
}

export default StudyListPage;