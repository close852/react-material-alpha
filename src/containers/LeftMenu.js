import React, { Fragment,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function LeftMenu({history}) {

    const drawerWidth = 240;
    const useStyles = makeStyles(theme => ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        nested: {
            paddingLeft: theme.spacing(4),
          },
        
    }));

    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

    function handleClick() {
      setOpen(!open);
    }
    function handleClick2() {
        setOpen2(!open2);
      }
  
    
    const classes = useStyles();

    return (
        <Fragment>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text} onClick={()=>{history.push('#')}}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <>
                        <ListItem button key={text} onClick={handleClick2}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred1" />
                    </ListItem>
                    </List>
                </Collapse>
                        </>
                ))}

            </Drawer>
        </Fragment>
    )
}

export default LeftMenu
