import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexResponsive,
  ApexGrid,
  ApexYAxis,
  ApexFill,
  ApexMarkers
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public vaultChartOptions: Partial<ChartOptions>;
  public tradeChartOptions: Partial<ChartOptions>;
  public premiumChartOptions: Partial<ChartOptions>;
  public chartYAxis = ['1D', '1W', '1M', 'YTD', '1Y', 'ALL'];
  public activeYAxis = 5;
  public showChart = false;
  public waveSvg = 'vault';
  public activeOptionButton = 'ALL';
  public selectedDate = '';
  public updateOptionsData = {
    '1D': {
      xaxis: {
        min: new Date('28 Jan 2013').getTime(),
        max: new Date('27 Feb 2013').getTime()
      }
    },
    '1W': {
      xaxis: {
        min: new Date('27 Sep 2012').getTime(),
        max: new Date('27 Feb 2013').getTime()
      }
    },
    '1M': {
      xaxis: {
        min: new Date('27 Feb 2012').getTime(),
        max: new Date('27 Feb 2013').getTime()
      }
    },
    'YTD': {
      xaxis: {
        min: new Date('01 Jan 2013').getTime(),
        max: new Date('27 Feb 2013').getTime()
      }
    },
    '1Y': {
      xaxis: {
        min: new Date('01 Jan 2013').getTime(),
        max: new Date('27 Feb 2013').getTime()
      }
    },
    'ALL': {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

  constructor() {
    const tabInstance = this;
    this.vaultChartOptions = {
      series: [
        {
          data: [
            [1322359600000, 11.95],
            [1324446000000, 14.34],
            [1327546000000, 21.34],
            [1334008800000, 30.61],
            [1335132000000, 20.62],
            [1336600800000, 25.92],
            [1342600800000, 30.92],
            [1344600800000, 34.92],
            [1346600800000, 40.92],
            [1350597600000, 34.24],
            [1350856800000, 32.49],
            [1354230000000, 34.61],
            [1361746800000, 39.11],
            [1363919600000, 43.61],
            [1366919600000, 45.6],
          ],
        }
      ],
      chart: {
        width: '100%',
        height: 'auto',
        type: 'area',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: true,
          easing: 'easeout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        },
      },
      markers: {
        colors: ['#25343E'],
        strokeColors: '#1A73E8'
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1.8,
        lineCap: 'butt',
        colors: ['#1A73E8']
      },
      xaxis: {
        // type: 'datetime',
        labels: {
          style: {
            colors: '#25343E',
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: false,
          width: '1.2',
          position: 'back',
          opacity: 0.7,
          stroke: {
            color: '#25343E',
            dashArray: 0,
          },
        },
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;flex-direction: column;background: #25333ee0;padding-top: 4px;">
                    <span class="tooltip-vault">${series[seriesIndex][dataPointIndex]} USDC</span>
                    <span class="tooltip-date">${tabInstance.selectedDate}</span>
                  </div>`;
        },
        theme: 'dark',
        x: {
          format: "dd MMM yyyy",
          formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
            this.selectedDate = new Date(value).toLocaleDateString();
            tabInstance.selectedDate = new Date(value).toLocaleDateString();
            return '';
          }
        }
      },
      fill: {
        colors: ['#1A73E8'],
        opacity: 0.4,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 1,
          type: 'vertical',
          gradientToColors: ['#1A73E8', '#25343E'],
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 95, 100],
        },
      },
    };
    this.tradeChartOptions = {
      series: [
        {
          name: 'series2',
          data: [11, 22, 30, 20, 35, 28, 32, 34, 52, 41, 60]
        }
      ],
      chart: {
        width: '100%',
        height: 'auto',
        type: 'area',
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
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
        },
        events: {
        }
      },
      fill: {
        colors: ['#4CB51E'],
        opacity: 0.4,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 1,
          type: 'vertical',
          gradientToColors: ['#4CB51E', '#25343E'],
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 95, 100],
        },
      },
      markers: {
        colors: ['#25343E'],
        strokeColors: '#4CB51E'
      },
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1.8,
        lineCap: 'butt',
        colors: ['#4CB51E']
      },
      yaxis: {
        opposite: true,
        floating: false,
        tickAmount: 8,
        forceNiceScale: true,
        decimalsInFloat: 10,
        labels: {
          style: {
            fontSize: '15px',
            fontWeight: 500,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: true
        }
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: false,
          width: '1.4',
          position: 'back',
          opacity: 0.1,
          stroke: {
            color: '#4CB51E',
            width: 1,
            dashArray: 0,
          },
        },
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;"><span class="tooltip-trade">${dataPointIndex} USDC</span></div>`;
        },
        theme: 'dark',
        x: {
          show: false
        }
      },
    };
    this.premiumChartOptions = {
      series: [
        {
          name: 'series2',
          data: [11, 22, 30, 20, 35, 28, 32, 34, 52, 41, 60]
        }
      ],
      chart: {
        width: '100%',
        height: 'auto',
        type: 'area',
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
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
        },
        events: {
        }
      },
      fill: {
        colors: ['#FCAA12'],
        opacity: 0.4,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 1,
          type: 'vertical',
          gradientToColors: ['#FCAA12', '#25343E'],
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      markers: {
        colors: ['#25343E'],
        strokeColors: '#FCAA12'
      },
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1.8,
        lineCap: 'butt',
        colors: ['#FCAA12']
      },
      yaxis: {
        opposite: true,
        floating: false,
        tickAmount: 8,
        forceNiceScale: true,
        decimalsInFloat: 10,
        labels: {
          style: {
            fontSize: '15px',
            fontWeight: 500,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: true
        }
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: false,
          width: '1.4',
          position: 'back',
          opacity: 0.1,
          stroke: {
            color: '#FCAA12',
            width: 1,
            dashArray: 0,
          },
        },
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;"><span class="tooltip-premium">${dataPointIndex} USDC</span></div>`;
        },
        theme: 'dark',
        x: {
          show: false
        }
      },
    };
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.chartOptions = this.vaultChartOptions;
    setTimeout(() => {
      this.showChart = true;
      this.updateOptions('ALL');
    }, 3500);
  }

  changeWallet(wallet: string) {
    this.waveSvg = wallet;
    switch (wallet) {
      case 'trade':
        this.chartOptions = this.tradeChartOptions;
        break;
      case 'premium':
        this.chartOptions = this.premiumChartOptions;
        break;
      default:
        this.waveSvg = 'vault';
        this.chartOptions = this.vaultChartOptions;
    }
  }

  public updateOptions(option: any): void {
    this.selectedDate = '';
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }

  resetChart() {
    this.activeOptionButton = 'ALL';
    this.selectedDate = '';
    this.showChart = false;
    this.initChart();
  }

}
