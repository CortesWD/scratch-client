/*
 * Dependencies
 */
import { Link } from 'react-router-dom';
import { uid } from 'uid';

/*
 * Components
 */
import SectionLayout from '../../../../components/layout/sectionLayout/SectionLayout';

/*
 * Others
 */
import { Artist } from '../../../../models/graphql';

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
      hola
    </SectionLayout>
  )
}

export default VinylArtist;