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
import DeleteIcon from '@mui/icons-material/Delete';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { EditModal } from './Edit';
import './Delete.css';

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
  const postsCollectionRef = collection(db, 'Posts');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Eliminar Post
  const deletePost = async (id) => {
    console.log(id);
    try {
      //Eliminar
      await deleteDoc(doc(db, 'Posts', id));
      console.log('Document deleted with ID: ', id);
      //Actualizar estado
      getAllData();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  //Traer nueva data actualizada
  const getAllData = async () => {
    const data = await getDocs(postsCollectionRef);
    //Actualizar estado
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={avatar}
          ></Avatar>
        }
        /*action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }*/
        title={author}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image="http://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/03/06/14888247674522.jpg"
        alt="img post"
        className="cardPost"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {publication}
        </Typography>
      </CardContent>

      {user.email === email ? (
        <CardActions disableSpacing>
          <IconButton aria-label="delete your post">
            <DeleteIcon onClick={() => deletePost(id)} className="DeletePost" />
          </IconButton>
          <IconButton aria-label="edit your post">
            <EditModal id={id} setPosts={setPosts} avatar={avatar} />
          </IconButton>
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
      ) : null}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>¡Eres parte de la mejor comunidad!</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
