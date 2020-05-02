import axios from 'axios'
const url = 'https://covid19.mathdro.id/api'


//*********Fetching All Data******************************** */
export const fetchData = async (country) => {
    let changableUrl = url;

    if (country) {//country will be undefined when calling from chart.jsx  function fetchDailyData() since no parameter send
        changableUrl = `${url}/countries/${country}`

    }


    try {
        // const response = await axios.get(url);
        // const modifiedData = {
        //     confirmed: response.data.confirmed,
        //     recovered: response.data.recovered,
        //     deaths: response.data.deaths,
        //     lastUpdate: response.daya.lastUpdate
        // }
        //OR by destructuring
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl)
        //if key and value has same name then we can write as below
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;

    } catch (error) {
        console.error('All Data fetch error', error)

    }

}

//***************Fetching Daily Data***************************************** */
export const fetchDailyData = async () => {
    try {
        const response = await axios.get(`${url}/daily`)

        const { data } = response;//result array ma auxa

        const modifiedData = data.map((dailyData) => (
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate


            }
        ));


        return modifiedData;



    } catch (error) {
        console.error('Daily data fetch error', error)

    }

}


//*********************Fetching Countries********************************************************/

export const countryFetch = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)//country ko name matra return gareko


    } catch (error) {
        console.error('Country fetch error', error)

    }


}