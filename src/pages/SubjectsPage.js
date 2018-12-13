import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Api } from '../services/Api'
import Subject from '../components/Subject/Subject'
import NewSubject from '../components/Subject/NewSubject'

class SubjectsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjects: [],
            searchSubject: ''
        }
    }

    componentWillMount = async() => {
        await this.refresh();
    }

    refresh = async() => {
        let response = await Api.get('disciplina');
        this.setState({ subjects: response.data });
    }

    handleChange = searchSubject => event => {
        this.setState({
          [searchSubject]: event.target.value,
        });
    };

    render() {
        const searchSubject = this.state.searchSubject;
        const allSubjects = this.state.subjects;
        let subjectsFind;
        if (searchSubject === '') {
            subjectsFind = allSubjects.map(currentSubject => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Subject subject={currentSubject} />
                </Grid>
            ));
        } else {
            const subjects = allSubjects.filter(subject => {
                return subject.name.slice(0, searchSubject.length).toLowerCase() === searchSubject;
              });
            subjectsFind = subjects.map(currentSubject => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Subject subject={currentSubject} />
                </Grid>
            ));
        }

        return (
            <div>
                { this.state.subjects ? 
                (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for subjects"   
                            margin="normal"
                            type="search"
                            onChange={this.handleChange('searchSubject')}
                        />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {subjectsFind}
                        </Grid>
                        <NewSubject newSubject={this.refresh}/>
                    </div>
                ) : 
                (
                    <div>
                        <NewSubject newSubject={this.refresh}/>
                    </div>
                )
                }
            </div>
        )
    }
}

export default SubjectsPage;