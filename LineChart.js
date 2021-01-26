import React from 'react'
import { Line } from 'react-chartjs-2'
function LineChart (){

    const data= {
        lables:["JAN","FEB","MAR","APR","MAY"],
        datasets:[
            {
                label : 'Monthly Footfall In software development',
                data:[3,6,4,20],
                borderColor:['rgb(145, 0, 188,0.2)'],
                pointBackgroundColor:['rgb(145, 0, 188,0.2)'],
                pointBorderColor:['rgb(145, 0, 188,0.2)']

            },
            {
                label :'Monthly Footfall In Finance',
                data:[1,18,4,10],
                borderColor:['rgb(255, 99, 71,0.2)'],
                pointBackgroundColor:['rgb(255, 99, 71,0.2)'],
                pointBorderColor:['rgb(255, 99, 71,0.2)']
            },
            {
                label :'Monthly Footfall In Design',
                data:[5,9,4,10],
                borderColor:['rgb(255, 165, 0,0.2)'],
                pointBackgroundColor:['rgb(255, 165, 0,0.2)'],
                pointBorderColor:['rgb(255, 165, 0,0.2)']
            },
            {
                label : 'Monthly Footfall In R&D',
                data:[12,4,4,10],
                borderColor:['rgb(60, 179, 113,0.2)'],
                pointBackgroundColor:['rgb(60, 179, 113,0.2)'],
                pointBorderColor:['rgb(60, 179, 113,0.2)']
            },
        
        ]
    }

    const options = {
        title:{
            display : true,
            text : 'Monthly fotfall Across department',
            fontSize: 30
        },
        scales:{
            yAxes:{
                ticks:{
                    min:0,
                    max:20,
                    stepSize:1

                }
            }
        }
    }

    
    return(
        <Line data ={data} key={Line.label} options={options}/>   
    )
}
export default LineChart;