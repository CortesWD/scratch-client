/*
 * Dependencies
 */
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { uid } from 'uid';

/*
 * Components
 */
import SectionLayout from "../../../../components/layout/sectionLayout/SectionLayout";

/*
 * Other
 */
import { Artist } from "../../../../models/graphql";

/*
 * Styles
 */
import styleVinylDescription from './VinylDescription.module.scss';

interface Props {
  genre?: string[];
  artist?: Artist;
  year?: number;
  country?: string;
}

function VinylDescription({ genre, artist, year, country }: Props) {
  return (
    <SectionLayout title="Album Details">
      <div className={styleVinylDescription['vinyl-details-desc']} >
        {genre?.map((item) => (<Chip key={uid()} label={item} color="primary" />))}
        <List className={styleVinylDescription['vinyl-detail-list']}>
          <ListItemText
            primary={artist?.name}
            secondary="Artist"
          />
          <ListItemText
            primary={year}
            secondary="Released year"
          />
          <ListItemText
            primary={country}
            secondary="Country"
          />
        </List>
      </div>
    </SectionLayout>
  )
}

export default VinylDescription;