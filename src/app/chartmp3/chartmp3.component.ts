import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chartmp3',
  templateUrl: './chartmp3.component.html',
  styleUrls: ['./chartmp3.component.scss']
})
export class Chartmp3Component implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'spline',
        backgroundColor: '#c662ef',
      },
      title: {
        text: '',
      },

      subtitle: {
        text: '',
      },
      plotOptions: {
        series: {
          lineWidth: 1,
          states: {
            inactive: {
              enabled: false,
            },
          },
        },
      },

      yAxis: {
        title: {
          text: '',
        },
        labels: {
          enabled: false,
        },
      },

      xAxis: {
        categories: [
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
        ],
      },

      // plotOptions: {},
      legend: {
        enabled: false,
      },

      tooltip: {
        useHTML: true,
        crosshairs: {
          width: 1,
          color: 'red',
        },
        headerFormat: '<table>',
        pointFormat:
          '<tr><td>{point.key}</td>' +
          '<td style="color: {series.color}">{series.name} </td>' +
          '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        // formatter: function () {
        //   return '<img src="/./assets/img/anh2.jpg" title="" alt="" border="0" height="25" width="25">';
        // },
      },

      series: [
        {
          name: 'Installation',
          data: [
            43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 97031,
            119931, 137133, 154175, 43934, 52503, 57177, 69658, 97031, 119931,
            137133, 154175, 97031, 119931, 137133,
          ],
        },
        {
          name: 'Manufacturing',
          data: [
            24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 24916,
            24064, 29742, 29851, 24916, 24064, 29742, 29851, 32490, 30282,
            38121, 40434, 24916, 24064, 29742,
          ],
          color: 'red',
          marker: {
            symbol: 'none',
            lineColor: 'none',
            width: 16,
            height: 16,
          },
        },
        {
          name: 'Sales & Distribution',
          data: [
            11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 16005,
            19771, 20185, 24377, 11744, 17722, 16005, 19771, 20185, 24377,
            32147, 39387, 16005, 19771, 20185,
          ],
          marker: {
            symbol: 'none',
            lineColor: 'none',
            width: 16,
            height: 16,
            // enabled: false,
          },
        },
      ],
    };
  }
}

