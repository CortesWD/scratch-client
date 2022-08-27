/*
 * Dependencies
 */
import React, { Fragment, useContext, useEffect } from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

/*
 * Others
 */
import { AppContext, Store } from '../../../context/AppContext';

// React.FC<{}>
// import baseStyles from './BaseLayout.module.scss';

interface ComponentLayoutProps {
  children: React.ReactNode;
  withPaper?: boolean
  visibleNavBar?: boolean
}

const BaseLayout: React.FC<ComponentLayoutProps> = ({ children, withPaper = false, visibleNavBar = true }) => {
  const { setStore } = useContext(AppContext);
  const Wrapper = (props: { children: React.ReactNode }) => withPaper ? <Paper {...props} /> : <Fragment {...props} />;

  useEffect(() => {
    if (visibleNavBar === false) {
      setStore((prevStore: Store) => ({ ...prevStore, showNavBar: visibleNavBar }));
    }
  }, []);

  return (
    <Box>
        <Wrapper>
          {children}
        </Wrapper>
    </Box>
  )
}


export default BaseLayout;