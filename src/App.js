import React, { useState, useEffect } from 'react'
import TrackList from "./Context/index";
import Navbar from "./Components/Navbar/Navbar";
import TrackPage from "./Components/single-track-page/TrackPage";
import Tracks from "./Components/Tracks/Tracks";
import {   Switch, Route } from "react-router-dom";
import { fetchChartTrackGet, fetchSearchTrack } from "./axios/index";

const App = () => {
    const [tracks, setTracks] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        const fetchTrackList = async () => {
            const {data} = await fetchChartTrackGet();
            setTracks(data.message.body.track_list);
        }
        fetchTrackList();
    }, []);
    useEffect(() => {
        const handleSearchLyrics = async () => {
            if (query) {
                const { data } = await fetchSearchTrack(query);
                console.log(data);
                setTracks(data.message.body.track_list);
            } else {
                setTracks([])
            }
        }
        handleSearchLyrics()
    },[query])
    return (
        <>
            <TrackList.Provider value={{tracks,query,setQuery}}>
                    <Navbar />
                        <Switch>
                            <Route exact path="/" component={Tracks} />
                            <Route exact path="/track/:id" component={TrackPage} />
                        </Switch>
            </TrackList.Provider>
        </>
    )
}

export default App
