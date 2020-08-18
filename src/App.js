import React from 'react';

import { Cards, Chart , CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import corona from './images/covid-19.png';
 
 class App extends React.Component {

  state = {
    data: {},
    country: '',
  }
   async componentDidMount(){
     const data= await fetchData();
     this.setState({data });
   }

   handleCountryChange= async (country)=>{
    const data= await fetchData(country);
    this.setState({data  , country :country});

   }
     render() {

      const {data, country}= this.state;
         return (
             <div className={styles.container} >
               <img className={styles.images} src={corona} alt="COVID-19"/>
              <Cards data = {data} />
                 <CountryPicker handleCountryChange={this.handleCountryChange}/>
                 <Chart data = {data} country = {country} />


                 
                 <h2 style={{color: "green", fontSize: "50px", textDecorationLine: "underline"}}>Corona Updates</h2>
                 <p><a style={{color:"#8B0000", fontSize: "20px"}} href="https://www.firstpost.com/category/health">Latest new on Vaccine!</a></p>
                 <p><a style={{color:"#8B0000", fontSize: "20px"}} href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms"> Symptoms of Covid</a></p>
                 <p><a style={{color:"#8B0000", fontSize: "20px"}} href="https://www.healthline.com/health/coronavirus-covid-19">All you need to know about Novel Covid-19</a></p>
                 <p><a style={{color:"#8B0000", fontSize: "20px"}} href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN">If in India ,download this app for safety</a></p>
             </div>
         );
     }
 }
 export default App;