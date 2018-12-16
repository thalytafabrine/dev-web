import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Api } from '../../services/Api';

class StudyList extends Component {

    delete = async() => {
        await Api.delete(`listaEstudo/${this.props.studyList._id}`);
        if (this.props.deleteStudyList) {
          await this.props.deleteStudyList(this.props.studyList);
        }
    }

    getUrl = () => {
        window.location.href = `http://localhost:3000${this.props.url}/listaEstudo/${this.props.studyList._id}`;
    }

    render() {
        return(
        <div>
            { this.props.studyList ? (
                <Card >
                    <CardMedia 
                        style={{height: 200}}
                        image="https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg"
                        title={this.props.studyList.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {this.props.studyList.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank" onClick={this.getUrl}>
                            Ir para lista de estudo
                        </Button>
                        <IconButton onClick={this.delete} aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            ) : null}
        </div>
        )
    }
}

export default StudyList;