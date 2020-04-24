import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default
class App extends React.Component {
  render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         initialRegion={{
         latitude: 42.347870,
         longitude: -71.117089,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
         showsUserLocation
      />
    );
  }
}
// export default 
// class App extends Component<Props> {  
// 	render() {    
// 		return (      
// 			<MapView        
// 			style={{flex: 1}}        
// 			region={{          
// 				latitude: 42.347870,          
// 				longitude: -71.117089,          
// 				latitudeDelta: 0.0922,          
// 				longitudeDelta: 0.0421        
// 			}}        
// 			showsUserLocation={true}      
// 		    />    
// 	    );  
// 	}
// }