import React,{ useState, useEffect }  from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
export default ({ indicateur_executions, indicateur_n, service_executant_n,search_indicateur, indicateur_name}) => {

    const series_i = [];
    let date;
    const title_i = "Suivi temporel de l'indicateur "+indicateur_name;
    
        
    {service_executant_n.forEach(function (e,index) {
          series_i.push({
            name: e.libelle,
            data:[]
          });
            {indicateur_executions.forEach(function (el) {
              if (e.id == el.service_executant_id){
              date = new Date(el.date).getTime();
              
              series_i[index].data.push([date, Math.round(el.valeur * 100) / 100]);
              }
            });}
         
        });}

      const options = {
        chart: {
            type: 'spline',
            style:{
                fontFamily: "Marianne",
            }, 
            //scrollablePlotArea: {
            //          minWidth: 1000,
            //          scrollPositionX: 1
            //      },      
        },
        title: {
            text: title_i,
            style: {
            fontSize: '15px',
            fontWeight: "900",
            color: '#1E1E1E',
            }
        },
        tooltip: {
            shared: true,
            borderColor: 'transparent',
            borderRadius: 16,
            backgroundColor: '#fff', 
        },
        xAxis:{
            type: 'datetime',
            //minTickInterval: 3*28*24*3600*1000,
        },
        yAxis: { 
        title: {
            text: "Valeur de l'indicateur",
            
            }
        },
        series: series_i,
    };

    return (
    <div>
   

        <HighchartsReact highcharts={Highcharts} options={options} />
        
    </div>
    );
};
