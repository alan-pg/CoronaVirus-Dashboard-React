import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    overflowX: "hidden",
    height: '100%',
  },
  img: {
    '&:hover':{
        webkittransition: 'all 0.5s ease;-moz-transition: all 0.5s ease;transition: all 0.5s ease',
        moztransform: 'scale(1)',
        webkittransform: 'scale(1)',
        otransform: 'scale(1) )',
        mstransform: 'scale(1)',
        transform: 'scale(1.1)',
        },
    overflow: 'hidden',
    color: 'white'
  }
}));

export default function VirtualizedList({ countries, onClick }) {
  const classes = useStyles();

  function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem className={classes.img} button style={style} key={index} onClick={() => onClick(countries[index])}>
        <ListItemAvatar >
            <Avatar
            alt={`Avatar n°${countries[index].label}`}
            src={countries[index].flag}
            />
        </ListItemAvatar>
        <ListItemText id={countries[index].value} primary={countries[index].label} />
      </ListItem>
    );
  }

  return (
    <div className={classes.root}>
      <FixedSizeList height={530} width={300} itemSize={46} itemCount={countries.length}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
