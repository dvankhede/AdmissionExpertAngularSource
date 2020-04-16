import { Component, OnInit } from '@angular/core';
import { EChartOption } from "echarts";

declare const $: any;
declare const echarts: any;

@Component({
    selector: 'app-dashboard2',
    templateUrl: './dashboard2.component.html',
    styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {


    // Line chart start

    public chartLineOptions = {
        xkey: 'period',
        ykeys: ['doc1', 'doc2', 'doc3'],
        labels: ['Doctor 1', 'Doctor 2', 'Doctor 3'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ['#222222', '#cccccc', '#f96332'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 2,
        hideHover: 'auto',
        lineColors: ['#222222', '#20B2AA', '#f96332'],
        resize: true
    };

    public chartLineData = [
        {
            period: '2011',
            doc1: 70,
            doc2: 80,
            doc3: 85
        }, {
            period: '2012',
            doc1: 200,
            doc2: 250,
            doc3: 130
        }, {
            period: '2013',
            doc1: 80,
            doc2: 30,
            doc3: 85
        }, {
            period: '2014',
            doc1: 180,
            doc2: 120,
            doc3: 225
        }, {
            period: '2015',
            doc1: 180,
            doc2: 260,
            doc3: 80
        }, {
            period: '2016',
            doc1: 105,
            doc2: 100,
            doc3: 190
        },
        {
            period: '2017',
            doc1: 210,
            doc2: 180,
            doc3: 120
        }

    ];

    // line chart end

    // Doughnut chart start
    public doughnutChartLabels: string[] = ['India', 'USA', 'Itely'];
    public doughnutChartData: number[] = [45, 25, 30];
    public doughnutChartLegend = false;
    public doughnutChartColors: any[] = [{
        backgroundColor: ["#735A84",
            "#E76412",
            "#9BC311"]
    }];

    public doughnutChartType = 'doughnut';
    public doughnutChartOptions: any = {
        animation: false,
        responsive: true,
    };

    // Doughnut chart end



    constructor() { }

    ngOnInit() {

        this.initCharts();
        /*************** TO DO **********************/
        $(document).on('click', '.to-do-list .form-check-label .form-check-input', function () {
            $(this).parent('label').toggleClass('line-through');
        });
        $(document).on('click', '.todo-remove', function () {
            $(this).closest("li").remove();
            return false;
        });

        $(document).on('click', '.panel .tools .fa-times', function () {
            $(this).parents(".panel").parent().remove();
        });
        $(".dial").knob({
            'min': 0,
            'max': 100,
            'thickness': 0.1
        });
        $(".knob").knob({
            draw: function () {
                if ("tron" == this.$.data("skin")) {
                    this.cursorExt = .3;
                    var t, i = this.arc(this.cv);
                    return this.g.lineWidth = this.lineWidth, this.o.displayPrevious && (t = this.arc(this.v), this.g.beginPath(), this.g.strokeStyle = this.pColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, t.s, t.e, t.d), this.g.stroke()), this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, i.s, i.e, i.d), this.g.stroke(), this.g.lineWidth = 2, this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1), this.g.stroke(), !1
                }
            }
        });

        $('.recent-comment').slimscroll({
            height: '330px',
            size: '5px'

        });
    }

    //Charts
    private initCharts() {
        $('.chart.chart-bar2').sparkline(undefined, {
            type: 'bar',
            barColor: '#54B253',
            negBarColor: '#000',
            barWidth: '5px',
            height: '67px'
        });
    }


}
