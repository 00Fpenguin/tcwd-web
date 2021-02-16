import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

function BasicLine() {
  const DEFAULT_DATA = {
    chartOptions: {
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },

      yAxis: {
        title: {
          text: ''
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2017'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 11,
        }
      },

      series: [
        {
          name: 'NL',
          data: [5, 10, 15, 8, 9]
        },
        {
          name: 'GB',
          data: [6, 3, 20, 6, 11]
        },
        {
          name: 'US',
          data: [15, 8, 12, 6, 13]
        },
        {
          name: 'UK',
          data: [13, 13, 12, 10, 15]
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }
        ]
      }
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={DEFAULT_DATA.chartOptions} />;
}

export default BasicLine;
