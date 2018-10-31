import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Subject from './Subject';

class SubjectsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subjects: [
                {title: 'subj1', description:'desc1', url:'/disciplina/subj1', subjectImage: '/static/artificialintelligence.jpg'},
                {title: 'subj2', description:'desc2', url:'/disciplina/subj2', subjectImage: '/static/concurrence.png'},
                {title: 'subj3', description:'desc3', url:'/disciplina/subj3', subjectImage: '/static/devweb.png'},
                {title: 'subj4', description:'desc4', url:'/disciplina/subj4', subjectImage: '/static/artificialintelligence.jpg'},
                {title: 'subj5', description:'desc5', url:'/disciplina/subj5', subjectImage: '/static/concurrence.png'},
                {title: 'subj6', description:'desc6', url:'/disciplina/subj6', subjectImage: '/static/devweb.png'}
            ],
            searchString: ''
        }
    }

    render() {
        const searchString = this.state.searchString;
        const allSubjects = this.state.subjects;
        let subjectsFind;

        if (searchString === '') {
            subjectsFind = allSubjects.map(currentSubject => (
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <Subject subject={currentSubject} />
                            </Grid>
            ));
        } else {
            const subjects = allSubjects.find((subject) => subject.title === this.state.searchString);
            subjectsFind = subjects.map(currentSubject => (
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <Subject subject={currentSubject} />
                            </Grid>
            ));
        }

        return (
            <div>
                { this.state.subjects ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for subjects"   
                            margin="normal"
                            onSubmit={(text) => this.setState({subjects: this.state.subjects, searchString: text})}
                        />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {subjectsFind}
                        </Grid>
                    </div>
                ) : "No subjects found" }
            </div>
        )
    }
}

export default SubjectsList;