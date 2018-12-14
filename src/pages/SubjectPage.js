import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Api } from '../services/Api';
import NewStudyList from '../components/StudyList/NewStudyList';
import StudyList from '../components/StudyList/StudyList';
import NavBar from '../components/NavBar/NavBar';

class SubjectPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            teacher: '',
            studyLists: []
        }
    }

    componentWillMount = async() => {
        await this.refresh();
    }

    refresh = async() => {
        let response = await Api.get('listaEstudo');
        this.setState({ studyLists: response.data });
    }

    render() {
        const {studyLists} = this.state;
        return (
            <div className="root">
                <NavBar auth={true} />
                <Grid container spacing={24} style={{padding: 24}}>
                    {studyLists.map(studyList => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <StudyList studyList={studyList} deleteStudyList={this.refresh}/>
                        </Grid>
                    ))}
                </Grid>
                <NewStudyList newStudyList={this.refresh}/>
            </div>
        );
    }
}

export default SubjectPage;