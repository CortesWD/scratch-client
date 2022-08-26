/*
 * Dependencies
 */
import { FormControlLabel, FormGroup, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

/*
 * Others
 */
import { Album } from '../../../models/graphql';

import cardStyles from './CardResult.module.scss';

// interface Props extends Album {

// }

export default function CardActions({
  title,
  image,
  artist
}: Album): JSX.Element {

  return (
    <Card sx={{ display: 'flex' }} className={cardStyles['card-result-container']}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {artist?.name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <FormGroup>
            <FormControlLabel
              control={<IconButton><MdCheckBoxOutlineBlank /></IconButton>}
              label="Add to collection"
            />
          </FormGroup>
        </Box>
      </Box>
      <CardMedia
        className={cardStyles['card-result-img']}
        component="img"
        image={image}
        alt={title}
      />
    </Card>
  );
}
