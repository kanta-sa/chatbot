import React from "react";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'chat_item_left' : 'chat_item_right'

  return(
        <ListItem className={classes}>
          <ListItemAvatar>
            {isQuestion ? (
              <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
            ) : (
              <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
            )}

          </ListItemAvatar>
          <div className="chat_style">{props.text}</div>
        </ListItem>
  );
}

export default Chat