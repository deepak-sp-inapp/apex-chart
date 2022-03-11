import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexGrid,
  ApexDataLabels,
  ApexTooltip,
  ApexPlotOptions,
  ApexStroke,
  ApexFill
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  toolTip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  fill: ApexFill;
};
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  @ViewChild('chart') chart: ChartComponent;
  public candleChartOptions: Partial<ChartOptions>;
  public chartBarOptions: Partial<ChartOptions>;
  public chartYAxis = ['1H', '24H', '1W', '1M', '1Y', 'ALL'];
  public activeYAxis = 5;
  public currentSegment = 'order-book';

  public candleDataSet = [
    {
      x: new Date(2016, 1, 1),
      y: [51.98, 56.29, 51.59, 53.85]
    },
    {
      x: new Date(2016, 2, 1),
      y: [53.66, 54.99, 51.35, 52.95]
    },
    {
      x: new Date(2016, 3, 1),
      y: [52.96, 53.78, 51.54, 52.48]
    },
    {
      x: new Date(2016, 4, 1),
      y: [52.54, 52.79, 47.88, 49.24]
    },
    {
      x: new Date(2016, 5, 1),
      y: [49.1, 52.86, 47.7, 52.78]
    },
    {
      x: new Date(2016, 6, 1),
      y: [52.83, 53.48, 50.32, 52.29]
    },
    {
      x: new Date(2016, 7, 1),
      y: [52.2, 54.48, 51.64, 52.58]
    },
    {
      x: new Date(2016, 8, 1),
      y: [52.76, 57.35, 52.15, 57.03]
    },
    {
      x: new Date(2016, 9, 1),
      y: [57.04, 58.15, 48.88, 56.19]
    },
    {
      x: new Date(2016, 10, 1),
      y: [56.09, 58.85, 55.48, 58.79]
    },
    {
      x: new Date(2016, 11, 1),
      y: [58.78, 59.65, 58.23, 59.05]
    },
    {
      x: new Date(2017, 0, 1),
      y: [59.37, 61.11, 59.35, 60.34]
    },
    {
      x: new Date(2017, 1, 1),
      y: [60.4, 60.52, 56.71, 56.93]
    },
    {
      x: new Date(2017, 2, 1),
      y: [57.02, 59.71, 56.04, 56.82]
    },
    {
      x: new Date(2017, 3, 1),
      y: [56.97, 59.62, 54.77, 59.3]
    },
    {
      x: new Date(2017, 4, 1),
      y: [59.11, 62.29, 59.1, 59.85]
    },
    {
      x: new Date(2017, 5, 1),
      y: [59.97, 60.11, 55.66, 58.42]
    },
    {
      x: new Date(2017, 6, 1),
      y: [58.34, 60.93, 56.75, 57.42]
    },
    {
      x: new Date(2017, 7, 1),
      y: [57.76, 58.08, 51.18, 54.71]
    },
    {
      x: new Date(2017, 8, 1),
      y: [54.8, 61.42, 53.18, 57.35]
    },
    {
      x: new Date(2017, 9, 1),
      y: [57.56, 63.09, 57.0, 62.99]
    },
    {
      x: new Date(2017, 10, 1),
      y: [62.89, 63.42, 59.72, 61.76]
    },
    {
      x: new Date(2017, 11, 1),
      y: [61.71, 64.15, 61.29, 63.04]
    }
  ];

  public barDataSet = [
    {
      x: new Date(2016, 1, 1),
      y: 30.85
    },
    {
      x: new Date(2016, 2, 1),
      y: 22.95
    },
    {
      x: new Date(2016, 3, 1),
      y: 15.48
    },
    {
      x: new Date(2016, 4, 1),
      y: 19.24
    },
    {
      x: new Date(2016, 5, 1),
      y: 12.78
    },
    {
      x: new Date(2016, 6, 1),
      y: 22.29
    },
    {
      x: new Date(2016, 7, 1),
      y: 12.58
    },
    {
      x: new Date(2016, 8, 1),
      y: 17.03
    },
    {
      x: new Date(2016, 9, 1),
      y: 19.19
    },
    {
      x: new Date(2016, 10, 1),
      y: 28.79
    },
    {
      x: new Date(2016, 11, 1),
      y: 39.05
    },
    {
      x: new Date(2017, 0, 1),
      y: 20.34
    },
    {
      x: new Date(2017, 1, 1),
      y: 36.93
    },
    {
      x: new Date(2017, 2, 1),
      y: 36.82
    },
    {
      x: new Date(2017, 3, 1),
      y: 29.3
    },
    {
      x: new Date(2017, 4, 1),
      y: 39.85
    },
    {
      x: new Date(2017, 5, 1),
      y: 28.42
    },
    {
      x: new Date(2017, 6, 1),
      y: 37.42
    },
    {
      x: new Date(2017, 7, 1),
      y: 24.71
    },
    {
      x: new Date(2017, 8, 1),
      y: 37.35
    },
    {
      x: new Date(2017, 9, 1),
      y: 32.99
    },
    {
      x: new Date(2017, 10, 1),
      y: 31.76
    },
    {
      x: new Date(2017, 11, 1),
      y: 43.04
    }
  ];

  constructor() {
    this.candleChartOptions = {
      series: [
        {
          name: 'volume',
          data: this.candleDataSet
        }
      ],
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#94d1d1',
            downward: '#fa7a5a'
          }
        }
      },
      chart: {
        type: 'candlestick',
        width: '100%',
        height: 'auto',
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 1500
          },
          dynamicAnimation: {
            enabled: true,
            speed: 35
          }
        }
      },
      grid: {
        show: true,
        borderColor: '#3a3850'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      yaxis: {
        tickAmount: 5,
        opposite: true,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#605d81',
          },
        },
        tooltip: {
          enabled: true
        }
      },
      toolTip: {
        enabled: true,
        theme: 'light',
      }
    };

    this.chartBarOptions = {
      series: [
        {
          name: 'volume',
          data: this.barDataSet
        }
      ],
      chart: {
        height: 90,
        type: 'bar',
        width: '100%',
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 1500
          },
          dynamicAnimation: {
            enabled: true,
            speed: 35
          }
        }
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          colors: {
            ranges: [
              {
                from: -10000,
                to: 100000,
                color: '#3a3850'
              }
            ]
          }
        }
      },
      stroke: {
        width: 0
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        floating: true,
      },
      toolTip: {
        enabled: true,
        theme: 'light',
      }
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.getChartData('ALL', 5);
    }, 200);
  }

  getChartData(yaxis: string, i: number) {
    this.activeYAxis = i;
    window.dispatchEvent(new Event('resize'));
  }


}
