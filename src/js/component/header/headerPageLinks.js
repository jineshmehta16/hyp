import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {
  headerMenuMobileMain,
  headerMenuMobilePrimary,
  headerMenuMobileSecondary,
} from '../../data/menuItems';
import Box from '@mui/material/Box';
import styles from './styles';
import { Link } from 'react-router-dom';

export const HeaderPageLinks = ({ classes, loginUser, handleCloseModal }) => {
  return (
    <>
      {/*My Profile changes for Side Panel*/}
      {loginUser && loginUser.phone_number &&
        <Box pb={2}>
          <List
            component="nav"
            className={classes?.headerLinkList}
            aria-label="other brands"
          >
            {[]?.map((currData, dataIdx) => {
              return (
                <Link to={currData?.url} className='text-decoration-none'>
                  <ListItem key={dataIdx} onClick={handleCloseModal}>
                    <ListItemText
                      classes={{ primary: classes?.listItemText }}
                      primary={currData.title}
                    />
                  </ListItem>
                  <Divider />
                </Link>
              );
            })}
          </List>
        </Box>
      }

      <Box pb={2}>
        <List
          component="nav"
          className={classes?.headerLinkList}
          aria-label="other brands"
        >
          {headerMenuMobileMain?.map((currData, dataIdx) => {
            return (
              <Link to={currData?.state} className='text-decoration-none'>
                <ListItem key={dataIdx} onClick={handleCloseModal}>
                  <ListItemText
                    classes={{ primary: classes?.listItemText }}
                    primary={currData.name}
                  />
                </ListItem>
                <Divider />
              </Link>
            );
          })}
        </List>
      </Box>

      <Box pb={2}>
        <List
          component="nav"
          className={classes?.headerLinkList}
          aria-label="other brands"
        >
          {headerMenuMobilePrimary?.map((currData, dataIdx) => {
            return (
              <Link to={currData?.state} className='text-decoration-none'>
                <ListItem key={dataIdx} onClick={handleCloseModal}>
                  <ListItemText
                    classes={{ primary: classes?.listItemText }}
                    primary={currData.name}
                  />
                </ListItem>
                <Divider />
              </Link>
            );
          })}
        </List>
      </Box>

      <Box>
        <List
          component="nav"
          className={classes?.headerLinkList}
          aria-label="other brands"
        >
          {headerMenuMobileSecondary?.map((currData, dataIdx) => {
            return (
              <Link to={currData?.state} className='text-decoration-none'>
                <ListItem key={dataIdx} onClick={handleCloseModal}>
                  <ListItemText
                    classes={{ primary: classes?.listItemText }}
                    primary={currData.name}
                  />
                </ListItem>
                <Divider />
              </Link>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default HeaderPageLinks