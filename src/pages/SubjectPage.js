import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Api } from '../services/Api';
import NewStudyList from '../components/StudyList/NewStudyList';
import StudyList from '../components/StudyList/StudyList';
import NavBar from '../components/NavBar/NavBar';
import { CircularProgress } from '@material-ui/core';

class SubjectPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            teacher: '',
            studyLists: [],
            idsStudyLists: []
        }

        this.refresh = this.refresh.bind(this);
        this.reset = this.reset.bind(this);
        this.renderStudyLists = this.renderStudyLists.bind(this)
    }

    componentWillMount = () => {
        this.refresh();
    }

    refresh = () => {
        this.reset();
        let url = this.props.match.url;
        Api.get(`${url}`).then(response => {
            let subject = response.data;
            this.setState({
                name: subject.name, 
                teacher: subject.teacher, 
                idsStudyLists: subject.studyLists
            });
            this.renderStudyLists();
        });
    }

    reset = () => {
        this.setState({
            name: '',
            teacher: '',
            studyLists: [],
            idsStudyLists: []
        });
    }

    renderStudyLists = () => {
        this.state.idsStudyLists && this.state.idsStudyLists.forEach(id => {
            Api.get(`listaEstudo/${id}`).then(response => {
                if (response.data !== null) {
                    this.setState({studyLists: this.state.studyLists.concat(response.data)});
                }
            });
        });
    }

    render() {
        const {studyLists} = this.state;
        return (
            <div className="root">
                <NavBar auth={true} />
                {this.loaded ? (
                    <Grid container spacing={24} style={{padding: 24}}>
                        {studyLists.map(studyList => (
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <StudyList studyList={studyList} deleteStudyList={this.refresh} url={this.props.match.url}/>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <CircularProgress />
                )}
                <NewStudyList newStudyList={this.refresh} location={this.props.location}/>
            </div>
        );
    }
}

export default SubjectPage;