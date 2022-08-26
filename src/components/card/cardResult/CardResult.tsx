/*
 * Dependencies
 */
// import { useSpring, animated, SpringValue } from 'react-spring'
import { SpringValue } from 'react-spring';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';

// import Fade from '@mui/material/Fade';

/*
 * Others
 */
import { Album } from '../../../models/graphql';

import cardStyles from './CardResult.module.scss';
import { Button } from '@mui/material';

interface Props extends Album {
  style: {
    [key: string]: SpringValue
  },
  axisX: number,
  url: string
}

function CardResult({
  title,
  image,
  artist,
  url = ''
}: Props): JSX.Element {
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
          <CardActions>
            <FormGroup>
              <FormControlLabel
                control={<IconButton><MdCheckBoxOutlineBlank /></IconButton>}
                label="Add to collection"
              />
            </FormGroup>
            <Button component={Link} to={url}>
              View Details
            </Button>
          </CardActions>
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

export default CardResult;