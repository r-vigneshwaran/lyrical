import React, { useEffect, useState } from 'react';
import { fetchLyrics } from "../../axios/index";
import { CircularProgress, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const TrackPage = ({ match }) => {
    const classes = useStyles();
    const [Track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});
    useEffect(() => {
        const fetchTrackLyrics = async () => {
            const { lyrics, track } = await fetchLyrics(match.params.id);
            setLyrics(lyrics.data.message.body.lyrics);
            setTrack(track.data.message.body.track);
        }
        fetchTrackLyrics();
    }, [match.params.id]);

    console.log(lyrics, Track, 'vanakam di maple api request la irunthu');
    if (Track === undefined || lyrics === undefined || Object.keys(Track).length === 0 || Object.keys(lyrics).length === 0) {
        return (
            <div className={classes.CircularProgress}><CircularProgress /></div>
        )
    } else {
        return (
            <Container>
                <Link to="/" className="btn btn-sm btn-dark mt-4 mb-2">Go Back</Link>
                <div className="card">
                    <h5 className="card-header">
                        {Track.track_name} by <span className="text-secondary">{Track.artist_name}</span>
                    </h5>
                    <div className="card-body">
                        <p className="card-text">
                            {lyrics.lyrics_body}
                        </p>
                    </div>
                </div>
                <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong>ALBUM ID</strong> : &nbsp;
                        {Track.album_id}
                    </li>
                        {Track.primary_genres.music_genre_list[0] && (
                    <li className="list-group-item">
                            <strong>SONG GENRE</strong> : &nbsp;
                            {Track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li>
                    )}
                    <li className="list-group-item">
                        <strong>
                            EXPLICIT WORDS : &nbsp;
                        </strong>
                        {Track.explicit===0 ? 'No' : 'YES'}
                    </li>
                    {Track.first_release_date && <li className="list-group-item">
                        <strong>
                            RELEASE DATE : &nbsp;
                        </strong>
                        {Track.first_release_date}
                    </li>}
                    <li className="list-group-item">
                        <strong>
                            Number of Likes : &nbsp;
                        </strong>
                        {Track.num_favourite }
                    </li>
                </ul>
            </Container>
        )
    }
}

export default TrackPage
