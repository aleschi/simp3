import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'spline',
        style:{
            fontFamily: "Marianne",
        },       
    },
    title: {
        text: 'Titre du graphe'
    },
    tooltip: {
        shared: true,
        borderColor: 'transparent',
        borderRadius: 16,
        backgroundColor: '#fff', 
    },
    series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    }
  ]
};

export class Chart extends React.Component {
render() {
    return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    );
    }
}

export default Chart;