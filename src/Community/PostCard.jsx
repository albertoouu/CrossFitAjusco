import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useAuth } from '../Context/authContext';
import './PostCard.css';
import { MenuEditDelete } from './MenuEditDelete';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PostCard = ({
  publication,
  author,
  date,
  email,
  id,
  setPosts,
  avatar,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const { user } = useAuth();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: '100%',
        display: 'block',
        margin: 'auto',
        height: '90%',
        padding: '2%',
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={avatar}
          ></Avatar>
        }
        action={
          user.email === email ? (
            <div>
              <IconButton aria-label="settings">
                <MenuEditDelete
                  style={{ position: 'relative' }}
                  id={id}
                  setPosts={setPosts}
                  avatar={avatar}
                />
              </IconButton>
            </div>
          ) : null
        }
        title={author}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="70%"
        image="https://thetribeconcept.com/blog/wp-content/uploads/2019/08/Entrena_crossfit-1024x477.jpg"
        alt="img post"
        className="cardPost"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {publication}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="delete your post">
            <DeleteIcon onClick={() => deletePost(id)} className="DeletePost" />
          </IconButton>
          <IconButton aria-label="edit your post">
            <EditModal id={id} setPosts={setPosts} avatar={avatar} />
          </IconButton>*/}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comentarios:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
