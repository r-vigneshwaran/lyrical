import React, { useContext,useEffect,useState} from 'react'
import useStyles from "./styles";
import TracksList from "../../../Context/index";
import { fetchSearchTrack} from "../../../axios/index"
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SearchTwoToneIcon  from "@material-ui/icons/SearchTwoTone"
import {Link} from "react-router-dom"

const Search = () => {
    const classes = useStyles();
    const { query, setQuery } = useContext(TracksList);
    const [options, setOptions] = useState('');
    const [list, setList] = useState([]);
    useEffect(() => {
        const handleSearchLyrics = async () => {
            if (options) {
                const { data } = await fetchSearchTrack(options);
                setList(data.message.body.track_list);
                console.log(list, "list")
            } else {
                setList([]);
            }
        }
        handleSearchLyrics();
    }, [options]);
    useEffect(() => {
        if (options === '' || options === undefined) {
            setList([]);
            setOptions('');
        }
    }, [options]);
    console.log(list,"from search")
    return (
        <div className={classes.wrapper}>
            <h5 className={classes.title}><MusicNoteIcon/> &nbsp; Search for Songs</h5>
            <div className={classes.searchInput}>
                <input className={classes.inputBox} type="text" onChange={(e) => setOptions(e.target.value)} placeholder="search here" />
                {list &&
                    <div className={classes.autoComBox}>
                        {list.map((li) => (
                            <li id={li.track.track_id} className={classes.li} onClick={()=>console.log('hello world')}>
                                <Link className={classes.link} to={`/track/${li.track.track_id}`}>
                                        {li.track.track_name}
                                        {console.log(li.track.track_id)}
                                </Link>
                            </li>
                        ))}
                    </div>
                    }
                <div onClick={()=>setQuery(options)} className={classes.icon}>
                    <SearchTwoToneIcon/>
                </div>
            </div>
            <h1 className={classes.title} >{options ? 'Search Result':''}</h1>
        </div>
    )
}

export default Search
