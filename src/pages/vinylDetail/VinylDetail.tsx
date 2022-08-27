/*
 * Dependencies
 */
import { memo, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import Paper from "@mui/material/Paper";
import { uid } from 'uid';

/*
 * Others
 */
import { useAlbum } from "../../graphql/hooks";
import { colorGenerator } from "../../utils/utils";

/*
 * Styles
 */
import vinylStyles from "./VinylDetail.module.scss";
import { album } from "../../__mocks/mocks";
import { AppContext, Store } from "../../context/AppContext";

function VinylDetail(): JSX.Element | null {
  const { id = '' } = useParams<{ id: string }>();
  const { store, setStore } = useContext(AppContext);
  // const { album, loading } = useAlbum(id);
  const navigate = useNavigate();
  const colorTheme = colorGenerator();

  const {
    title,
    image,
    artist,
    year,
    genre,
    // format?: string[];
    trackList,
  } = album || {};

  useEffect(() => {
    if (!id && !album?.id) {
      navigate('/404');
    }
    else if (store.showNavBar) {
      setStore((prevStore: Store) => ({ ...prevStore, showNavBar: false }))
    }
  }, []);

  const mainStyle = {
    '--colorTheme': colorTheme
  } as React.CSSProperties;

  const style = {
    '--bgImg': `url(${artist?.image})`
  } as React.CSSProperties;

  return (
    <main
      style={mainStyle}
      className={vinylStyles['vinyl-detail-main']}
    >
      <header
        style={style}
        className={vinylStyles['vinyl-detail-header']}
      >
        <div className={vinylStyles['vinyl-detail-header-card']}>
          <figure>
            <img src={image} alt={title} />
          </figure>
          <div>
            <Typography component="h1" variant="body1">
              {title}
            </Typography>
            <Typography component="p" variant="body2">
              Artist: {artist?.name}
            </Typography>
            <Typography component="p" variant="body2">
              Released: {year}
            </Typography>
          </div>
        </div>
      </header>
      <Container>
        <Paper elevation={1}>
          <Typography component="h2" variant="h5">
            Tracklist
          </Typography>
          <ul>
            {trackList?.map((track) => {
              return (
                <li key={uid()}>
                  {track.title}
                </li>
              )
            })}
          </ul>
        </Paper>
      </Container>
      <Container>
        <Paper elevation={1}>
          <Typography component="h2" variant="h5">
            More About 
            <Link to={artist?.id}>
              {artist?.name}
            </Link>
          </Typography>
        </Paper>
      </Container>
    </main>
  );
}

export default memo(VinylDetail);