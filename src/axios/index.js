import axios from "axios";


const URL = 'https://api.musixmatch.com/ws/1.1';
const source = axios.CancelToken.source();
export const fetchChartTrackGet = async () => {
    const data = await axios.get(`${URL}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=ffd4b9491cf270e00fe66dd4fa4a2c18`);
    return data;
}

export const fetchLyrics = async (trackId) => {
    const lyrics = await axios.get(`${URL}/track.lyrics.get?track_id=${trackId}&apikey=ffd4b9491cf270e00fe66dd4fa4a2c18`);
    const track = await axios.get(`${URL}/track.get?track_id=${trackId}&apikey=ffd4b9491cf270e00fe66dd4fa4a2c18`);
    return { lyrics, track };
}

export const fetchSearchTrack = async (query) => {
    const lyrics = await axios.get(`${URL}/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&apikey=ffd4b9491cf270e00fe66dd4fa4a2c18`, {
        cancelToken: source.token,
    });
    return lyrics;
}