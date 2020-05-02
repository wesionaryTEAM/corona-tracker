NOTE:
componets vitra seperate folder xa and inside folder jsx and module.css file xa so that css only applied to perticular components only 
with the help of css module
eg.
Cards.jsx
Cards.module.css//this css is only applied for Cards.jsx component


//async/await

since componentDidMount special function vako huna le tesko agadi async rakhna milxa

async componentDidMount() {
    const data = await fetchData();
    console.log(data)
  }


//module.css  bata multiple css apply garna
import cx from 'classnames'
import styles from './Cards.module.css'
<Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
</Grid>



chart.js
for react-chartjs-2 to work we need to install chart.js manaully


Maping:

suppose we have data as array of object:
[
0: {confirmed: 555, deaths: 17, date: "2020-01-22"}
1: {confirmed: 654, deaths: 18, date: "2020-01-23"}
2: {confirmed: 941, deaths: 26, date: "2020-01-24"}
]


map garera data as object return garxa, new key confirmed,deaths,date ma value halera change gareko
 const modifiedData = data.map((dailyData) => (
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date:dailyData.reportDate


            }
        ));
