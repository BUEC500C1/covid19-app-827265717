import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableHighlight } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';


let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;


export default class MapExample extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 0.9072, 
        longitude: -77.0369,
        latitudeDelta: 90.0,
        longitudeDelta: 90.0,
      },

      totalCon: '',
      TotalD: '',
      TotalRec: '',

      BrazilConfirmed: '',
      JapanConfirmed: '',
      ItalyConfirmed: '',
      UKConfirmed: '',
      USAConfirmed: '',
      ChinaConfirmed: '',
      CanadaConfirmed: '',
      MexicoConfirmed: '',
      RussiaConfirmed: '',
      IndiaConfirmed: '',
      GermanyConfirmed: '',
      

      marker1:{
        title: 'Brazil',
        description: 'Total Confirmed case in Brazil',
        coordinates: {
          latitude: -15.8267,
          longitude: -47.9218
        }
      },

      marker2:{
        title: 'Japan',
        description: 'Total Confirmed case in Japan',
        coordinates: {
        latitude: 35.6762,
        longitude: 139.6503
        }
      },

      marker3:{
        title: 'Italy',
        description: 'Total Confirmed case in Italy',
        coordinates: {
        latitude: 41.8719,
        longitude: 12.5674
        } 
      },

      marker4:{
        title: 'United Kingdom',
        description: 'Total Confirmed case in United Kingdom',
        coordinates: {
        latitude: 51.5074,
        longitude: -0.1278
        }
      },

      marker5:{
        title: 'USA',
        description: 'Total Confirmed case in United States',
        coordinates: {
          latitude: 38.9072,
          longitude: -77.0369
        }
      },

      marker6:{
        title: 'China',
        description: 'Total Confirmed case in China',
        coordinates: {
        latitude: 39.9042,
        longitude: 116.4074
        }
      },

      marker7:{
        title: 'Canada',
        description: 'Total Confirmed case in Canada',
        coordinates: {
        latitude: 45.4215,
        longitude: -75.6972
        }
      },

      marker8:{
        title: 'Mexico',
        description: 'Total Confirmed case in Mexico',
        coordinates: {
        latitude: 19.4326,
        longitude: -99.1312
        }
      },

      marker9:{
        title: 'Russia',
        description: 'Total Confirmed case in Russia',
        coordinates: {
        latitude: 61.5240,
        longitude: 105.3188
        }
      },

      marker10:{
        title: 'india',
        description: 'Total Confirmed case in India',
        coordinates: {
        latitude: 28.6139,
        longitude: 77.2090
        }
      },

      marker11:{
        title: 'Germany',
        description: 'Total Confirmed case in Germany',
        coordinates: {
        latitude: 51.1657,
        longitude: 10.4515
        }
      }

    };
    
  }

  /*
  // get current location
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
  }
  */

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary')
    .then(response => {
      this.setState({ totalCon: response.data.Global.TotalConfirmed });
      this.setState({ TotalD: response.data.Global.TotalDeaths });
      this.setState({ TotalRec: response.data.Global.TotalRecovered });
      this.setState({ BrazilConfirmed: response.data.Countries[30].TotalConfirmed });
      this.setState({ JapanConfirmed: response.data.Countries[110].TotalConfirmed });
      this.setState({ ItalyConfirmed: response.data.Countries[108].TotalConfirmed });
      this.setState({ UKConfirmed: response.data.Countries[235].TotalConfirmed });
      this.setState({ USAConfirmed: response.data.Countries[236].TotalConfirmed });
      this.setState({ ChinaConfirmed: response.data.Countries[45].TotalConfirmed });
      this.setState({ CanadaConfirmed: response.data.Countries[39].TotalConfirmed });
      this.setState({ MexicoConfirmed: response.data.Countries[142].TotalConfirmed });
      this.setState({ RussiaConfirmed: response.data.Countries[182].TotalConfirmed });
      this.setState({ IndiaConfirmed: response.data.Countries[31].TotalConfirmed });
      this.setState({ GermanyConfirmed: response.data.Countries[81].TotalConfirmed });
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    const { totalCon, TotalD, TotalRec } = this.state;
    const { BrazilConfirmed, JapanConfirmed, ItalyConfirmed, UKConfirmed, USAConfirmed, ChinaConfirmed, CanadaConfirmed, MexicoConfirmed, RussiaConfirmed, IndiaConfirmed, GermanyConfirmed } = this.state;
    const {marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11} = this.state;

    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={this.state.region}
        //showsUserLocation={true}
        onMapReady={this.onMapReady}
        onRegionChangeComplete={this.onRegionChange}>
          
        <MapView.Marker 
          coordinate={marker1.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker1.title}{"\n"} 
                {marker1.description} {"\n"}
                {BrazilConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker2.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker2.title}{"\n"} 
                {marker2.description} {"\n"}
                {JapanConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker3.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker3.title}{"\n"} 
                {marker3.description} {"\n"}
                {ItalyConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker4.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker4.title}{"\n"} 
                {marker4.description} {"\n"}
                {UKConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker5.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker5.title}{"\n"} 
                {marker5.description} {"\n"}
                {USAConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker6.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker6.title}{"\n"} 
                {marker6.description} {"\n"}
                {ChinaConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker7.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker7.title}{"\n"} 
                {marker7.description} {"\n"}
                {CanadaConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker8.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker8.title}{"\n"} 
                {marker8.description} {"\n"}
                {MexicoConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker9.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker9.title}{"\n"} 
                {marker9.description} {"\n"}
                {RussiaConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker10.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker10.title}{"\n"} 
                {marker10.description} {"\n"}
                {IndiaConfirmed} -- Wait, serious??
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker 
          coordinate={marker11.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text> 
                {marker11.title}{"\n"} 
                {marker11.description} {"\n"}
                {GermanyConfirmed}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
          
      </MapView>



      <View style={styles.whiteView}>
        <Text style={styles.instruction}>
          You can move map to check multiple countries in the world and click marker to see virus information.
        </Text>
        <Text style={styles.title}>
          COVID-19 cases in World:
        </Text>
        <Text style={styles.txtStyle}> 
          Total Confirmed: {totalCon} {"\n"}
          Total Deaths: {TotalD}{"\n"}
          Total Recovered: {TotalRec}{"\n"}
        </Text>
      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instruction: {
    color: "red"
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  whiteView: {
    position:'absolute', 
    backgroundColor: 'white', 
    height: 150,
    top: height-150, 
    width: width,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center', 
    top: 20,
    color: 'blue'
  },
  txtStyle: {
    left: 100,
    top: 30,
    color: 'blue'
  }
});

