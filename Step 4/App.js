import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default class App extends React.Component {

    constructor(props){
    super(props);
    this.state = {
      TotalConfirmed: '',
      TotalDeaths: '',
      Date: '',
    };
  } 

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then(responseJson => {
        this.setState({
          TotalConfirmed: responseJson['Countries'][235]['TotalConfirmed'],
          TotalDeaths: responseJson['Countries'][235]['TotalDeaths'],
          Date: responseJson['Countries'][235]['Date'],
        },
        function(){}
      );
      console.log(this.state.jsondata);
      })
      .catch(error => {
        console.error(error);
      });
  }


  render(){
    return(
      <View style={style.container}>
        <Text style = {style.title}>  Country: United States</Text>
        <Text style = {style.text}>Total Confirmed Cases: {this.state.TotalConfirmed}</Text>
        <Text style = {style.text}>Total Death Cases: {this.state.TotalDeaths}</Text>
        <Text style = {style.text}>Date: {this.state.Date}</Text>
        </View>
    )
  }
}


const style = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: '#BEE2E7',
    paddingBottom: 400,
  },

  title:{
    marginTop: 300,
    fontSize: 20,

  },
  text: {
    color: 'black',
    marginTop: 20,
    padding: 10,
    fontSize: 20,
    backgroundColor: '#BEE2E7',
    
  },
  
});