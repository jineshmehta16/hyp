import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { headerMenu } from '../../data/menuItems';
import styles from './styles';
import { useDispatch } from 'react-redux';

export const MenuItemHeader = ({
  handleClick,
  anchorEl,
  open,
  handleClose,
  classes,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      {headerMenu?.map((currHeader, headerIdx) => {
        return (
          <Box px={3} fontWeight={600}>
            {currHeader.children && currHeader.children.length ? (
              <>
                <Button
                  aria-controls="fade-menu"
                  className={classes?.headerMenu}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  {currHeader.name} <ArrowDropDownIcon />
                </Button>

                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  {currHeader?.children?.map((currChild, childIdx) => {
                    return (
                      <MenuItem onClick={handleClose}>
                        <NavLink
                          className={classes?.headerLinks}
                          to={currChild?.state}
                        >
                          {currChild?.name}
                        </NavLink>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              <Box>
                <NavLink className={classes?.headerLinks} to={currHeader.state}>
                  {currHeader.name}
                </NavLink>
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
};

export default MenuItemHeader
