/*
 * Dependencies
 */
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { uid } from 'uid';

/*
 * Components
 */
import SectionLayout from '../../../../components/layout/sectionLayout/SectionLayout';

/*
 * Others
 */
import { Artist } from '../../../../models/graphql';
import { URLS } from '../../../../utils/constants';

/*
 * Styles
 */
import styleArtist from './VinylArtist.module.scss';

interface Props {
  artist: Artist
}

function VinylArtist({ artist }: Props) {

  const Title = () => (
    <>
      More About {" "}
      <Link className={styleArtist['vinyl-artist-anchor']} to={`/artist/${artist?.id}`}>
        {artist.name}
      </Link>
    </>
  );

  return (
    <SectionLayout title={<Title />}>
      <Box className={styleArtist['vinyl-artist-container']}>
        {artist.albums &&
          <>
            <Typography component="h2" variant="subtitle2">
              Other albums:
            </Typography>
            <ImageList
              className={styleArtist['vinyl-artist-images-container']}
              key="Subheader"
              cols={2}
            >
              {artist.albums.map((album) => {
                return (
                  <ImageListItem key={uid()}>
                    <img
                      src={album.image}
                      alt={album.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      className={styleArtist['vinyl-artist-image-bar']}
                      title={<Link to={`/${URLS.vinylDetail}/${album.id}`}>{album.title}</Link>}
                      subtitle={<span>by: {artist.name}</span>}
                    />
                  </ImageListItem>
                )
              })}
            </ImageList>
          </>
        }
      </Box>
    </SectionLayout>
  )
}

export default VinylArtist;