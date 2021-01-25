import React from 'react'
import { Card, CardActions, CardContent, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import AlbumIcon from '@material-ui/icons/Album';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import { Link } from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const Track = ({ track }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className="p-20">
                <Typography className={classes.center} variant="h5" color="textPrimary" gutterBottom>
                    artist : {track.track.artist_name}
                </Typography>
                <Typography variant="h5" className={classes.title} component="p" >
                    <AlbumIcon /> &nbsp; {track.track.album_name}
                </Typography>
                <Typography variant="h5" component="p" className={classes.title}  color="textSecondary">
                    <PlayCircleFilledIcon />  &nbsp;  {track.track.track_name}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    <ThumbsUpDownIcon /> &nbsp;  track_rating &nbsp;
                    {track.track.track_rating}
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <Link className={classes.view} to={`/track/${track.track.track_id}`}>
                    <ChevronRightIcon/> &nbsp;
                    <Button  size="small">View Lyrics</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Track
