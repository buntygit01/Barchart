import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart() {
    const data={
        labels: ['jan','feb','mar','Apr','May'],
        datasets:[
            {
                label:'Alcohol',
                data:[3,2,2,1,5],
               
                backgroundColor:'red',
                pointBackgroundColor:'rgba(0,0,255)',
                pointBorderColor:'rgba(255,255,255)'

            }
            ,{
                label:'Malic Acid',
                data:[1,2,3,2,5],
                
                backgroundColor:'green',
                pointBackgroundColor:'rgba(255,0,0)',
                pointBorderColor:'rgba(255,206,255)'
            }
        ]
    }
 
    return <Bar data={data} />
    
}


export default BarChart




