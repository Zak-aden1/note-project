import React from 'react'
// import styles from 'Layout.module.scss'
import { makeStyles } from '@material-ui/core'
import { Drawer, Typography } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
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

    return (
        <div className={classes.root}>
            {/* app bar */}

            {/* side Drawer */}
            <Drawer
            className={classes.drawer}
            anchor='left'
            variant='permanent' 
            classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5'>
                        Notes for -user
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
                {children}
            </div>
        </div>
    )
}

export default Layout
