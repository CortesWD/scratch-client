/*
 * Dependencies
 */
import { memo, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


/*
 * Components
 */
import VinylTrackList from "./components/vinylTrackList/VinylTrackList";
import VinylArtist from "./components/vinylArtist/VinylArtist";
import VinylHeader from "./components/vinylHeader/VinylHeader";

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
import VinylDescription from "./components/vinylDescription/VinylDescription";

function VinylDetail() {
  const { id = '' } = useParams<{ id: string }>();
  const { store, setStore } = useContext(AppContext);
  const { album, loading } = useAlbum(id);
  const navigate = useNavigate();
  const colorTheme = colorGenerator(true);

  const {
    title,
    image,
    artist,
    year,
    genre,
    trackList,
    country
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

  return (
    <main
      style={mainStyle}
      className={vinylStyles['vinyl-detail-main']}
    >
      <VinylHeader
        title={title ?? ''}
        artist={artist}
      />
      <div className={vinylStyles['vinyl-detail-container']}>
        <div className={vinylStyles['vinyl-detail-cover']}>
          <figure>
            <img src={image} alt={title} />
          </figure>
        </div>
        <VinylDescription
          artist={artist}
          year={year}
          country={country}
          genre={genre}
        />
        {
          trackList.length ? (
            <VinylTrackList trackList={trackList} />
          ) : null
        }
        {
          artist && artist.id && (
            <VinylArtist artist={artist} />
          )
        }
      </div >
    </main >
  );
}

export default memo(VinylDetail);