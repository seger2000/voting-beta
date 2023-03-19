import React, { Fragment, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const StatisticsCharts = ({ type, dataStat }) => {
    const [chartData, setChartData] = React.useState({labels:[], datasets: []});
    useEffect(() => {
      if (type === "bar") {
        const dataBar = {
            labels: ['Maia Sandu', 'Donald Trump', 'Barako Obamo'],
            datasets: [{
              label: 'Voturi',
              data: dataStat,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }]
        }
        setChartData(dataBar);
        }  else if (type == "circle") {
  
          
          const dataCircle = {
            labels: [
              'Trebuie să voteze',
              'Au votat',
            ],
            datasets: [{
              label: 'Prezenta la vot',
              data: dataStat,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
              ],
              hoverOffset: 4
            }]
          };
    
          setChartData(dataCircle)
        }
    }, [dataStat]);
    


  return (
    <Fragment>
      {type === 'bar' && <Bar datasetIdKey='barChar' data={chartData} options={{indexAxis: 'y',
              maintainAspectRatio: false}}/>}
      {type === 'circle' && <Doughnut  datasetIdKey='circleChar' data={chartData} options={{indexAxis: 'y',
              maintainAspectRatio: false}}  />}
    </Fragment>
  )
}

export default StatisticsCharts
