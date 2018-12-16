import React, { Component } from 'react'
import { Api } from '../../services/Api';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studyListsLength : 0
        }
    }

    getUrl = () => {
        window.location.href = `http://localhost:3000/disciplina/${this.props.subject._id}`;
    }

    componentWillMount = async() => {
        await this.refresh();
    }

    refresh = async() => {
        let response = await Api.get(`disciplina/${this.props.subject._id}`);
        let studyListsLength = (response.data.studyLists).length;
        this.setState({ studyListsLength: studyListsLength });
    }

    render () {
        return(
            <div>
                { this.props.subject ? (
                    <Card >
                        <CardMedia 
                            style={{height: 200}}
                            image="https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg"
                            title={this.props.subject.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                {this.props.subject.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                Professor(a): {this.props.subject.teacher}
                            </Typography>
                            <Typography variant="subtitle2">
                                {this.state.studyListsLength} listas de estudo nesta disciplina.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary" onClick={this.getUrl}>
                            Ver disciplina
                        </Button>
                        </CardActions>
                    </Card>
                ) : null}
            </div>
        )
    }
}

export default Subject