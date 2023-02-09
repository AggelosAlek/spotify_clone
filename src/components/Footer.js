import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const dispatch = useDispatch();
  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.UserData.currentSong,
    };
  });

  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src={currentSong?.image} alt="" />
        <div className="footer_songInfo">
          <h4>{currentSong?.name}</h4>
          <p>{currentSong?.artists}</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleIcon className="footer_icon" fontSize="large" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item xs={1}>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs={4}>
            <Slider size="small" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
