import React, { Component } from 'react';
import FlashCard from '../components/FlashCard/FlashCard';
import Grid from '@material-ui/core/Grid';
import NewFlashCard from '../components/FlashCard/NewFlashCard';
import { Api } from '../services/Api';
import NavBar from '../components/NavBar/NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';

class StudyListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cards: [],
            idsCards : [],
            location: '',
            loaded: false
        }

        this.refresh = this.refresh.bind(this);
        this.reset = this.reset.bind(this);
        this.renderCards = this.renderCards.bind(this);
    }

    componentWillMount = () => {
        this.refresh();
    }

    refresh = () => {
        this.reset();
        let separateURL = (this.props.match.url).split('/');
        let url = separateURL[3].concat('/').concat(separateURL[4]);
        Api.get(`${url}`).then(response => {
            let list = response.data;
            this.setState({
                name: list.name, 
                idsCards: list.cards, 
                location : url
            });
            this.renderCards();
        });
    }

    reset = () => {
        this.setState({
            name: '',
            cards: [],
            idsCards: [],
            loaded: false
        });
    }

    renderCards = () => {
        this.state.idsCards && this.state.idsCards.forEach(id => {
            Api.get(`card/${id}`).then(response => {
                if (response.data !== null) {
                    this.setState({cards: this.state.cards.concat(response.data)});
                    this.setState({loaded: true});
                }
            });
        });
    }

    render() {
        const {cards} = this.state;
        return (
            <div className="root">
                <NavBar auth={true}/>
                {this.state.loaded ? (
                    <Grid container spacing={16} style={{padding: 24}}>
                    {cards.map(card => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <FlashCard card={card} deleteCard={this.refresh}/>
                        </Grid>
                    ))}
                    </Grid>
                ) : (
                    <CircularProgress />
                )}
                <NewFlashCard newCard={this.refresh} location={this.state.location}/>
            </div>
        );
    }
}

export default StudyListPage;