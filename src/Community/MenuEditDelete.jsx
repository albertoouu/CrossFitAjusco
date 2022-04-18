import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

import { EditModal } from './Edit';
import { Delete } from './Delete';

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
                backgroundColor: '#f4f4f4',
                marginLeft: '-30px',
                borderRadius: '8%',
                marginTop: '3px',
              }}
            >
              <MenuItem>
                <Delete
                  id={id}
                  setPosts={setPosts}
                  avatar={avatar}
                  fontSize="small"
                  style={{ display: 'block', margin: 'auto' }}
                />
              </MenuItem>

              <MenuItem>
                <EditModal
                  id={id}
                  setPosts={setPosts}
                  avatar={avatar}
                  fontSize="small"
                  style={{ display: 'block', margin: 'auto' }}
                />
              </MenuItem>
            </MenuList>
          </Paper>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};
