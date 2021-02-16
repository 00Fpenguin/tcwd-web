import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

function PieChart() {
  const DEFAULT_DATA = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 310,
      width: 310,
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{point.percentage:.1f}%'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'paid',
        y: 61.41,
        sliced: true,
        selected: true,
        color: 'blue',
      }, {
        name: 'Unpaid',
        y: 11.84,
        color: 'red',
      }]
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={DEFAULT_DATA} />;
}

export default PieChart;
