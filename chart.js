var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
        "Algorithm": "ZeroR",
        "Nominal With Zeroes": 61.374,
        "Nominal Without Zeroes": 48.2573
    }, {
        "Algorithm": "J48",
        "Nominal With Zeroes": 82.0617,
        "Nominal Without Zeroes": 77.7506
    }, {
        "Algorithm": "J48 Graft",
        "Nominal With Zeroes": 82.1532,
        "Nominal Without Zeroes": 77.7506
    }, {
        "Algorithm": "IB1",
        "Nominal With Zeroes": 81.668,
        "Nominal Without Zeroes": 75.0848
    }, {
        "Algorithm": "IBk",
        "Nominal With Zeroes": 81.668,
        "Nominal Without Zeroes": 75.0848
    }, {
        "Algorithm": "KStar",
        "Nominal With Zeroes": 83.215,
        "Nominal Without Zeroes": 76.8557
    }, {
        "Algorithm": "NaiveBayes",
        "Nominal With Zeroes": 69.6224,
        "Nominal Without Zeroes": 63.4326
    }, {
        "Algorithm": "MultilayerPerceptron",
        "Nominal With Zeroes": 70.9163,
        "Nominal Without Zeroes": 71.0531
    }, {
        "Algorithm":"SimpleLogistic",
        "Nominal With Zeroes": 66.437,
        "Nominal Without Zeroes": 63.4891
    }],
    "valueAxes": [{
        "unit": "%",
        "position": "left",
        "title": "Accuracy",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "Accuracy of [[category]] on Nominal With Zeroes: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "Nominal With Zeroes",
        "type": "column",
        "valueField": "Nominal With Zeroes"
    }, {
        "balloonText": "Accuracy of [[category]] on Nominal Without Zeroes: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "Nominal Without Zeroes",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "Nominal Without Zeroes"
    }],
    "plotAreaFillAlphas": 0.1,
    "categoryField": "Algorithm",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45
    },
    "export": {
	"enabled": true
     },
    "legend": {
    "useGraphSettings": true,
    "position": "right"
  },
});
