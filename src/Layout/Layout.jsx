import React from 'react'
// import styles from 'Layout.module.scss'
import { Avatar, makeStyles } from '@material-ui/core'
import { Drawer, Typography } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
import { AppBar, Toolbar } from '@material-ui/core'
import { format } from 'date-fns'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const drawerWidth = 240

const useStyles = makeStyles((theme) =>{
    return {
        page: {
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth, 
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            backgroundColor: '#f4f4f4',
            color: 'black',
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
        }
})

const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create'
        }
    ]

    // const userContext = useContext(UserContext);
    // console.log(userContext);
    // const { user, signIn, signOut } = userContext;

    // const ShowUserName = user ? user.displayName : 'guest';
    

    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.date} variant='h5'>
                         today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        {/* {ShowUserName} */}
                    </Typography>
                    <Avatar className={classes.avatar}>Z</Avatar>
                </Toolbar>
            </AppBar>

            {/* side Drawer */}
            <Drawer
            className={classes.drawer}
            anchor='left'
            variant='permanent' 
            classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                          User Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map((menu) => (
                        <ListItem 
                        key={menu.text}
                        button
                        onClick={() => {history.push(menu.path)}}
                        className={location.pathname == menu.path ? classes.active: null}
                        // selected={location.pathname == menu.path}
                        >
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.text} /> 
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
