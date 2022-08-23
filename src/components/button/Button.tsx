/*
 * Dependencies
 */
import MuiButton from '@mui/material/Button';
import btnStyles from './Button.module.scss';

function Button(): JSX.Element {

  const handleClick = (e: Event | any) => {
    e.preventDefault();
    console.log('hello');
  }

  return (
    <MuiButton className={btnStyles.button} component="button" onClick={handleClick}>
      Click Me!
    </MuiButton>
  )
}

export default Button