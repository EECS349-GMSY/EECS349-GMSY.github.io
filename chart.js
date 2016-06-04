var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
        "Algorithm": "ZeroR",
        "DataSet 1": 61.374,
        "DataSet 2": 48.2573
    }, {
        "Algorithm": "J48",
        "DataSet 1": 82.0617,
        "DataSet 2": 77.7506
    }, {
        "Algorithm": "J48 Graft",
        "DataSet 1": 82.1532,
        "DataSet 2": 77.7506
    }, {
        "Algorithm": "IB1",
        "DataSet 1": 81.668,
        "DataSet 2": 75.0848
    }, {
        "Algorithm": "IBk",
        "DataSet 1": 81.668,
        "DataSet 2": 75.0848
    }, {
        "Algorithm": "KStar",
        "DataSet 1": 83.215,
        "DataSet 2": 76.8557
    }, {
        "Algorithm": "NaiveBayes",
        "DataSet 1": 69.6224,
        "DataSet 2": 63.4326
    }, {
        "Algorithm": "MultilayerPerceptron",
        "DataSet 1": 70.9163,
        "DataSet 2": 0
    }, {
        "Algorithm":"SimpleLogistic",
        "DataSet 1": 66.437,
        "DataSet 2": 63.4891
    }],
    "valueAxes": [{
        "unit": "%",
        "position": "left",
        "title": "Accuracy",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "Accuracy of [[category]] on DataSet 1: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "DataSet 1",
        "type": "column",
        "valueField": "DataSet 1"
    }, {
        "balloonText": "Accuracy of [[category]] on DataSet 1: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "DataSet 2",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "DataSet 2"
    }],
    "plotAreaFillAlphas": 0.1,
    "categoryField": "Algorithm",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
    	"enabled": true
     }

});