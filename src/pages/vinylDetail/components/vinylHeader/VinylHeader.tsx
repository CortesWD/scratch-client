/*
 * Dependencies
 */
import Typography from '@mui/material/Typography';

/*
 * Styles
 */
import styleVinylHeader from "./VinylHeader.module.scss";

interface Props {
  title: string;
  artist?: {
    image?: string;
  }
}

function VinylHeader({
  title,
  artist: { image } = {image: ''}
}: Props) {
  const style = {
    '--bgImg': `url(${image })`
  } as React.CSSProperties;

  return (
    <header
      style={style}
      className={styleVinylHeader['vinyl-detail-header']}
    >
      <div className={styleVinylHeader['vinyl-detail-texts']}>
        <Typography component="h1" variant="h1" align='center'>
          {title}
        </Typography>
      </div>
    </header>
  )
}

export default VinylHeader;