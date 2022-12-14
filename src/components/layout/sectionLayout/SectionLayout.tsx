/*
 * Dependencies
 */
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

/*
 * Styles
 */
import styleSection from './SectionLayout.module.scss';

interface Props {
  children: React.ReactNode;
  title: string | React.ReactNode | JSX.Element;
  className?: string;
}

function SectionLayout({ className, title, children }: Props) {
  return (
    <Container className={className}>
      <Typography className={styleSection['section-layout-heading']} component="h2" variant="h5">
        {title}
      </Typography>
      <Paper elevation={1}>
        {children}
      </Paper>
    </Container>
  );
}

export default SectionLayout;