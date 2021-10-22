import React,{ useState, useEffect }  from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default ({ indicateur_executions, indicateur_n, service_executant_n,search_indicateur, indicateur_name}) => {

    const series_i = [];
    let date;
    const title_i = '';
    
        
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
        },
        title: {
            text: title_i,
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
        yAxis: { 
        title: {
            text: "Valeur de l'indicateur",
            }
        },
        series: series_i,
    };

    return (
    <div>
        <div className="text-center titre_etiquette">
         {`Suivi de l'indicateur ${indicateur_name}`}   
        </div>

        <HighchartsReact highcharts={Highcharts} options={options} />
        
    </div>
    );
};
