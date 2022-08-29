/*
 * Dependencies
 */
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { uid } from 'uid';

/*
 * Components
 */
import SectionLayout from '../../../../components/layout/sectionLayout/SectionLayout';

/*
 * Others
 */
import { Artist } from '../../../../models/graphql';
import { Typography } from '@mui/material';

interface Props {
  artist: Artist
}

function VinylArtist({ artist }: Props): JSX.Element {
  const Title = () => (
    <>
      More About {" "}
      <Link to={`/artist/${artist?.id}`}>
        {artist.name}
      </Link>
    </>
  );

  return (
    <SectionLayout title={<Title />}>
      <>
        {artist.albums &&
          <>
            <Typography component="h2" variant="body2">
              Other albums:
            </Typography>

            <ImageList sx={{ width: 350 }}>
              {artist.albums.map((album) => {
                return (
                  <ImageListItem key={uid()}>
                    <img
                      src={album.image}
                      alt={album.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={album.title}
                      subtitle={<span>by: {artist.name}</span>}
                      position="below"
                    />
                  </ImageListItem>
                )
              })}
            </ImageList>
          </>
        }
      </>
    </SectionLayout>
  )
}

export default VinylArtist;