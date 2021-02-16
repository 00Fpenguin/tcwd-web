/* eslint-disable arrow-parens */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';

import { AppContext } from 'src/AppProvider';

import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  LogOut as LogoutIcon
} from 'react-feather';
import NavItem from './NavItem';

const items = [
  {
    href: '/home',
    icon: BarChartIcon,
    title: 'Home'
  },
  {
    href: '/dashboard',
    icon: UsersIcon,
    title: 'Dashboard'
  },
  {
    href: '/accounts',
    icon: ShoppingBagIcon,
    title: 'Accounts'
  },
  {
    href: '/payments',
    icon: UserIcon,
    title: 'Payments'
  },
  {
    href: '/complaints',
    icon: SettingsIcon,
    title: 'Complaints'
  },
  {
    href: '/forms',
    icon: LockIcon,
    title: 'Forms'
  },
  {
    href: '/jobs',
    icon: UserPlusIcon,
    title: 'Jobs'
  },
  {
    href: '/tickets',
    icon: AlertCircleIcon,
    title: 'Tickets'
  },
  {
    href: '/announcements',
    icon: AlertCircleIcon,
    title: 'Announcements'
  },
  {
    href: '/faqs',
    icon: AlertCircleIcon,
    title: 'Faqs'
  },
  {
    href: '/reports',
    icon: AlertCircleIcon,
    title: 'Reports'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const { logout } = React.useContext(AppContext);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box p={2}>
        <List>
          {items.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box px={2}>
        <List>
          <Button type="button" onClick={logout}>
            <LogoutIcon />
            &nbsp; Logout
          </Button>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
