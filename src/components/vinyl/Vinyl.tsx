/*
 * Styles
 */
import vinylStyles from './Vinyl.module.scss';

interface Props {
  labelColor: string;
  className?: string;
}

function Vinyl({labelColor, className = ''}: Props) {

  const style = {
    '--labelColor': labelColor ?? '#ff3'
  } as React.CSSProperties;

  return (
    <div style={style} className={`${vinylStyles['vinyl']} ${className}`} />
  )
}

export default Vinyl;