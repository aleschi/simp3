import React,{ useState, useEffect }  from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default ({ indicateur_executions, indicateur_n, service_executant_n}) => {

    const [options, setOptions] = useState({
        chart: {
            type: 'spline',
            style:{
                fontFamily: "Marianne",
            },       
        },
        title: {
            text: ''
        },
        tooltip: {
            shared: true,
            borderColor: 'transparent',
            borderRadius: 16,
            backgroundColor: '#fff', 
        },
        xAxis:{
            type: 'datetime',
        },
        series: [
        {
          data: []
        }
      ]
    });

    useEffect(() => {
    const url = "/api/v1/indicateur_executions/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        const series = [];
        let date;

        response.data8.forEach(function (e,index) {
          series.push({
            name: e.libelle,
            data:[]
          });
            response.data6.forEach(function (el) {
              if (e.id == el.service_executant_id){
              date = new Date(el.date).getTime();
              
              series[index].data.push([date, el.valeur]);
              }
            });
         
        })

        setOptions({ series: series });
      });
    },[]);
    return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div>
            
        </div>
    </div>
    );
};