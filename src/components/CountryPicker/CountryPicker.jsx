import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { countryFetch } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchApi();
    }, [setCountries])

    const fetchApi = async () => {
        setCountries(await countryFetch());//promise resolve nahujel samma wait garxa and fetch actual data

    }
    return (
        <div className={styles.container}>
            <FormControl className={styles.formControl}>
                <label className={styles.label}>Choose Country</label>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {
                        countries.length
                        && countries.map((country, index) => {
                            return <option key={index} value={country}>{country}</option>



                        })


                    }

                </NativeSelect>
            </FormControl>


        </div>
    )
}

export default CountryPicker
