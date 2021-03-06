import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  // Typography,
  // colors,
  makeStyles,
  // useTheme
} from '@material-ui/core';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import PhoneIcon from '@material-ui/icons/Phone';
// import TabletIcon from '@material-ui/icons/Tablet';
import LineGraph from './Line';

const useStyles = makeStyles(() => ({
  root: {
    height: '250px'
  }
}));

const TrafficByDevice = ({ className, ...rest }) => {
  const classes = useStyles();
  // const theme = useTheme();

  // const data = {
  //   datasets: [
  //     {
  //       data: [63, 15, 22],
  //       backgroundColor: [
  //         colors.indigo[500],
  //         colors.red[600],
  //         colors.orange[600]
  //       ],
  //       borderWidth: 8,
  //       borderColor: colors.common.white,
  //       hoverBorderColor: colors.common.white
  //     }
  //   ],
  //   labels: ['Desktop', 'Tablet', 'Mobile']
  // };

  // const options = {
  //   animation: false,
  //   cutoutPercentage: 80,
  //   layout: { padding: 0 },
  //   legend: {
  //     display: false
  //   },
  //   maintainAspectRatio: false,
  //   responsive: true,
  //   tooltips: {
  //     backgroundColor: theme.palette.background.default,
  //     bodyFontColor: theme.palette.text.secondary,
  //     borderColor: theme.palette.divider,
  //     borderWidth: 1,
  //     enabled: true,
  //     footerFontColor: theme.palette.text.secondary,
  //     intersect: false,
  //     mode: 'index',
  //     titleFontColor: theme.palette.text.primary
  //   }
  // };

  // const devices = [
  //   {
  //     title: 'Desktop',
  //     value: 63,
  //     icon: LaptopMacIcon,
  //     color: colors.indigo[500]
  //   },
  //   {
  //     title: 'Tablet',
  //     value: 15,
  //     icon: TabletIcon,
  //     color: colors.red[600]
  //   },
  //   {
  //     title: 'Mobile',
  //     value: 23,
  //     icon: PhoneIcon,
  //     color: colors.orange[600]
  //   }
  // ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Progress" />
      <Divider />
      <CardContent>
        <Box position="relative">
          <LineGraph />
        </Box>
      </CardContent>
    </Card>
  );
};

TrafficByDevice.propTypes = {
  className: PropTypes.string
};

export default TrafficByDevice;
