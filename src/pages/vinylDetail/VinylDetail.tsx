/*
 * Dependencies
 */
import { memo, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

/*
 * Components
 */
import VinylTrackList from "./components/vinylTrackList/VinylTrackList";
import VinylArtist from "./components/vinylArtist/VinylArtist";

/*
 * Others
 */
import { useAlbum } from "../../graphql/hooks";
import { colorGenerator } from "../../utils/utils";
import { AppContext, Store } from "../../context/AppContext";

/*
 * Styles
 */
import vinylStyles from "./VinylDetail.module.scss";
// import { album } from "../../__mocks/mocks";


function VinylDetail(): JSX.Element | null {
  const { id = '' } = useParams<{ id: string }>();
  const { store, setStore } = useContext(AppContext);
  const { album, loading } = useAlbum(id);
  const navigate = useNavigate();
  const colorTheme = colorGenerator();

  const {
    title,
    image,
    artist,
    year,
    genre,
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
            <Typography component="h1" variant="subtitle1">
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
      {trackList.length ? (
        <VinylTrackList trackList={trackList} />
      ) : null}
      {artist && artist.id && (
        <VinylArtist artist={artist} />
      )}
    </main>
  );
}

export default memo(VinylDetail);