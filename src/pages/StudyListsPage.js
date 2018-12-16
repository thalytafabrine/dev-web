import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Api } from '../services/Api';
import NewStudyList from '../components/StudyList/NewStudyList';
import StudyList from '../components/StudyList/StudyList';
import NavBar from '../components/NavBar/NavBar';

class StudyListsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studyLists: []
        }
        this.refresh = this.refresh.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentWillMount = () => {
        this.refresh();
    }

    refresh = () => {
        this.reset();
        Api.get(`/listaEstudo`).then(response => {
            this.setState({ studyLists: response.data });
        });
    }

    reset = () => {
        this.setState({
            studyLists: []
        });
    }

    render() {
        const {studyLists} = this.state;
        return (
            <div className="root">
                <NavBar auth={true} />
                <Grid container spacing={24} style={{padding: 24}}>
                    {studyLists.map(studyList => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <StudyList studyList={studyList} deleteStudyList={this.refresh} url={this.props.match.url}/>
                        </Grid>
                    ))}
                </Grid>
                <NewStudyList newStudyList={this.refresh} location={this.props.location}/>
            </div>
        );
    }
}

export default StudyListsPage;