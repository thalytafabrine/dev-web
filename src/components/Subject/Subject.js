import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Subject = (props) => {
    return(
        <div>
            { props.subject ? (
                <Card >
                    <CardMedia 
                        className="media"
                        image={props.subject.subjectImage}
                        title={props.subject.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.subject.title}
                    </Typography>
                    <Typography component="p">
                        {props.subject.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={props.subject.url} target="_blank">
                        Go To Subject
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Subject