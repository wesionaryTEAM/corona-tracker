import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Chart.module.css'

const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        getDailyData();


    }, [])

    const getDailyData = async () => {
        setDailyData(await fetchDailyData())

    }

    //**************Line Chart defining JSX only************ */
    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    // labels: [],//array of labels
                    // datasets:[{},{}]recieves array of object
                    labels: dailyData.map(({ date }) => date),//map garera date filed matra destructure  gareko
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: "#3333ff",
                            fill: true


                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: "red",
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true


                        }
                    ]


                }}


            />
        ) : <CircularProgress disableShrink />



    )


    //**************Bar chart defining JSX**************************** */

    const barChart = (

        data.confirmed ?
            (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'No of People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 2.5)',
                                'rgba(0, 255, 0, 2.5)',
                                'rgba(255, 0, 0, 2.5)'
                            ],
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value]

                        }],


                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current status in ${country}` }

                    }}



                />


            ) : (
                <CircularProgress />

            )



    )


    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}

        </div>
    )
}

export default Chart
