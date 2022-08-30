/*
 * Dependencies
 */
// import { useSpring, animated, SpringValue } from 'react-spring'
import { SpringValue } from 'react-spring';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveRedEye } from 'react-icons/md';
import CardActions from '@mui/material/CardActions';

/*
 * Others
 */
import { Album } from '../../../models/graphql';

import cardStyles from './CardResult.module.scss';

interface Props extends Album {
  style?: {
    [key: string]: SpringValue
  },
  axisX?: number,
  url: string
}

function CardResult({
  title,
  image,
  artist,
  url = ''
}: Props) {
  return (
    <Card sx={{ display: 'flex' }} className={cardStyles['card-result-container']}>
      <Box className={cardStyles['card-result-text-container']} sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="h6" variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="span">
            {artist?.name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <CardActions>
            <FormGroup>
              <FormControlLabel
                control={<IconButton><MdCheckBoxOutlineBlank /></IconButton>}
                label="Add to collection"
              />
            </FormGroup>
          </CardActions>
        </Box>
      </Box>
      <div className={cardStyles['card-result-img-container']}>
        <IconButton className={cardStyles['card-result-view-icon']} component={Link} to={url}>
          <MdRemoveRedEye />
        </IconButton>
        <CardMedia
          className={cardStyles['card-result-img']}
          component="img"
          image={image}
          alt={title}
        />
      </div>
    </Card>
  );
}

export default CardResult;