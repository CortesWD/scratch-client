/*
 * Dependencies
 */
import { Fragment, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { uid } from 'uid';

/*
 * Components
 */
import TabPanel from '../../../../components/tabPanel/TabPanel';
import SectionLayout from '../../../../components/layout/sectionLayout/SectionLayout';

/*
 * Others
 */
import { OrderedTrackList } from '../../../../models/graphql';

/*
 * Styles
 */
import vinylTrackStyles from './VinylTrackList.module.scss';

interface Props {
  trackList: OrderedTrackList[]
}

function VinylTrackList({ trackList }: Props): JSX.Element {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SectionLayout title="Tracklist">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="Vinyl track list"
      >
        {trackList.map((track) => (<Tab key={uid()} label={`LP${track.lpNumber}/ Side ${track.side}`} />))}
      </Tabs>

      {trackList.map((list, i) => {
        return (
          <Fragment key={uid()}>
            <TabPanel
              value={value}
              index={i}
            >
              <TableContainer>
                <Table className={vinylTrackStyles['vinyl-tracklist-table']}>
                  <TableBody>
                    {list.tracks.map((track, i) => {
                      return (
                        <TableRow key={uid()}>
                          <TableCell>
                            <span className={vinylTrackStyles['vinyl-track-list-counter']}>{i + 1}</span>
                          </TableCell>
                          <TableCell align="left">{track.title}</TableCell>
                          <TableCell align="right">{track.duration}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </Fragment>
        )
      })}
    </SectionLayout>
  )
}

export default VinylTrackList