import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Edit } from './Edit';
import { Delete } from './Delete';
import { Card } from 'react-bootstrap';

export const MenuEditDelete = ({ id, setPosts, avatar }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <MoreVertIcon type="button" onClick={handleClick} />

        {open ? (
          <Paper
            sx={{
              position: 'absolute',
            }}
          >
            <MenuList
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFF',
                border: '0.5px solid #D3D3D3',
                boxShadow: '0px 5px 7px -7px',
                marginLeft: '-15px',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              <IconButton style={{ marginLeft: '8px', marginRight: '8px' }}>
                <Edit
                  id={id}
                  setPosts={setPosts}
                  avatar={avatar}
                  fontSize="small"
                  style={{ display: 'block', margin: 'auto' }}
                  closeMenu={handleClickAway}
                />
              </IconButton>
              <IconButton style={{ marginLeft: '8px', marginRight: '8px' }}>
                <Delete
                  id={id}
                  setPosts={setPosts}
                  avatar={avatar}
                  fontSize="small"
                  style={{ display: 'block', margin: 'auto' }}
                />
              </IconButton>
            </MenuList>
          </Paper>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};
