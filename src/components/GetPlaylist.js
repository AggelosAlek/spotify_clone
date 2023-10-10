import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetCurrentPlaylist } from "../redux";

function GetPlaylist({ id }) {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => {
        return {
            token: state.UserData.token,
        };
    });
    useEffect(() => {
        const getFeaturedPlaylists = async () => {
            const response = await axios.get(
                `https://api.spotify.com/v1/playlists/${id}`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            const selectedPlaylist = {
                id: response.data.id,
                name: response.data.name,
                description: response.data.description.startsWith("<a")
                    ? ""
                    : response.data.description,
                image: response.data.images[0].url,
                tracks: response.data.tracks.items.map(({ track }) => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist) => artist.name),
                    image: track.album.images[2].url,
                    duration: track.duration_ms,
                    album: track.album.name,
                    context_uri: track.album.uri,
                    track_number: track.track_number,
                })),
            };
            dispatch(SetCurrentPlaylist(selectedPlaylist));
        };

        getFeaturedPlaylists();
    }, [dispatch, token, id]);

    return;
}

export default GetPlaylist;
