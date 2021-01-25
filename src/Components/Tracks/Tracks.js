import React, { useContext } from 'react'
import TracksList from "../../Context/index"
import { CircularProgress, Container, Grid } from "@material-ui/core";
import Track from "./Track/Track";
import useStyles from "./styles"
import Search from "./search/Search";

const Tracks = () => {
    const classes = useStyles();
    const { tracks} = useContext(TracksList);
    console.log(tracks,"from tracks")
    return (
        <div>

           <Search/>
            { !tracks ? <div className={classes.CircularProgress}><CircularProgress /></div> :
                (
                    <div className={classes.mainContainer}>
                        <h2 className={classes.title}>Top 10 Tracks</h2>
                        <Container>
                            <Grid container alignItems="stretch" spacing={3}>
                                {tracks.map((track) => (
                                    <Grid key={track.track.track_id} item xs={12} sm={12} md={12} className={classes.grid}>
                                        <Track track={track} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                )}
        </div>
    )
}

export default Tracks
