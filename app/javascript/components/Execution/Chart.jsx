import React from "react";

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
export default ({ indicateur_executions, indicateur_n, service_executant_n,search_indicateur, indicateur_name,data_inter_ministerielle,liste_se_empty}) => {

    const series_i = [];
    let date;
    const title_i = "Suivi temporel de l'indicateur "+indicateur_name;
    const unite = indicateur_n[0].unite;

    series_i.push({
            name: "Moyenne interministérielle",
            data:[]
          });
    {data_inter_ministerielle.forEach(function (el) {
                date = new Date(el[0]).getTime();
                series_i[0].data.push({x:date, y:Math.round(el[1] * 100) / 100});
            })};

    {service_executant_n.forEach(function (e,index) {
          series_i.push({
            name: e.libelle,
            data:[]
          });
            {indicateur_executions.forEach(function (el) {
              if (e.id == el.service_executant_id){
              date = new Date(el.date).getTime();
              
              series_i[index+1].data.push({x:date, y:Math.round(el.valeur * 100) / 100});
              }
            });}
         
        });}

    const options = {
        chart: {
            style:{
                fontFamily: "Marianne",

            }, 
            height:600,
            reflow: true,

              
        },
        lang: {
                downloadCSV:"Télécharger en format CSV",
                downloadJPEG:"Télécharger l'image en JPEG",
                downloadPDF:"Télécharger en format PDF",
                downloadPNG:"Télécharger l'image en PNG",
                downloadSVG:"Télécharger l'image en SVG",
                downloadXLS:"Télécharger en format XLS",
                printChart:"Imprimer le graphique",
                viewFullscreen: "Voir en plein écran",
                viewData: "Voir la table des données",
                noData: "Les courbes s'afficheront lorsque vous aurez <br>renseigné et validé les informations du formulaire.",
                loading: 'Chargement...',
                months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
                weekdays: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
                shortMonths: ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc'],
            },
        navigator: {
            
            maskFill: 'rgba(248,248,248,0.3)',
        },
        rangeSelector: {

            buttons: [ 
            {
                type: 'month',
                count: 6,
                text: '6m'
            }, {
                type: 'year',
                count: 1,
                text: '1an'
            }, {
                type: 'all',
                text: 'Tout'
            }],
            selected: 3,
            buttonTheme: { // styles for the buttons
            fill: '#FFF',
            stroke: 'none',
            'stroke-width': 0,
            r: 2,
            style: {
                color: 'var(--text-title-grey)',
                fontWeight: 'bold'
            },
            states: {
                hover: {
                },
                select: {
                    fill: 'var(--text-action-high-blue-france)',
                    style: {
                        color: 'white'
                    }
                }
                // disabled: { ... }
            }
            },
            inputStyle: {
                    color: 'var(--text-title-grey)',            
                },
            labelStyle: {
                color: 'var(--text-title-grey)', 
            },
        },
        
        legend: {
            enabled: true,
            maxHeight: 80,
            itemStyle: {"color": 'var(--text-title-grey)', "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis"},
            itemHoverStyle: {"color": 'var(--text-title-grey)'},
        },
        title: {
            text: title_i,
            style: {
            fontSize: '16px',
            fontWeight: "900",
            color: 'var(--text-title-grey)',
            }
        },
        tooltip: {
            shared: true,
            borderColor: 'transparent',
            borderRadius: 16,
            backgroundColor: '#fff',
            xDateFormat:'%b %Y',
            pointFormat: '{series.name} : <b>{point.y}'+unite+'</b>',
            
        },
        xAxis:{
            type: 'datetime',
      
            labels: {
            formatter: function() {
            return Highcharts.dateFormat('%b', this.value);
            },
            style: {color: 'var(--text-title-grey)'},
            },
        },
        yAxis: { 
        labels: {
                    style: {color: 'var(--text-title-grey)'},
                },
        title: {
            text: "Valeur de l'indicateur",
            style: {color: 'var(--text-title-grey)'},    
            }
        },
        series: series_i,
    };


    return (
    <div>
   

        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options}  />
    </div>
    );
};
