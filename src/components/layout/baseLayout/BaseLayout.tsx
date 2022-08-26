/*
 * Dependencies
 */

import React, { Fragment } from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

// React.FC<{}>

interface ComponentLayoutProps {
  children: React.ReactNode;
  withPaper: boolean
}

const BaseLayout: React.FC<ComponentLayoutProps> = ({ children, withPaper = false }) => {
  const Wrapper = (props: { children: React.ReactNode }) => withPaper ? <Paper {...props} /> : <Fragment {...props} />;

  return (
    <Box>
      <Container>
        <Wrapper>
          {children}
        </Wrapper>
      </Container>
    </Box>
  )
}


export default BaseLayout;