import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps'
import { View } from 'react-native';
import { Text, Button, Input, Icon, Divider, List, ListItem} from '@ui-kitten/components';

class CreateNewProjectMap extends Component {

    constructor(props){
        super(props);

        this.state = {
            location: props.location
        }
    }

    render() {

        const DeleteIcon = (props) => (
          <Icon {...props} name='trash-2-outline'/>
        );

        const renderItem = ({ item, index }) => (
            <ListItem
              title={`Point ${index+1}: `}
              description={`${item.latitude}, ${item.longitude}`}
              accessoryRight={DeleteIcon}
              onPress={() => this.props.removeMarker(item, index)}
            />
        );

        const ShowPolygon = () => {
            if(this.props.markers === null) {
                return (null);
            } else {//if(this.props.markers.length < 3) {
                return (this.props.markers.map((coord, index) => (
                    <MapView.Marker
                        key={index}
                        coordinate = {{
                            latitude: coord.latitude,
                            longitude: coord.longitude
                        }}
                    />
                )));
            } /*else {
                return (
                     <MapView.Polygon
                      coordinates={this.props.markers}
                      strokeWidth={3}
                      strokeColor={'rgba(255,0,0,0.5)'}
                      fillColor={'rgba(0,0,0,0)'}
                    />
                );
            }*/
        };

        return(
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{height:'50%'}}
                    initialCamera ={{
                        center:{
                            latitude: this.state.location.coords.latitude,
                            longitude: this.state.location.coords.longitude
                        },
                        pitch: 10,
                        heading: this.state.location.coords.heading,
                        altitude: this.state.location.coords.altitude,
                        zoom: 17
                    }}
                    onPress={event => this.props.addMarker(event.nativeEvent.coordinate)}
                >
                    <ShowPolygon />
                </MapView>

                <View style={{flexDirection:'row', justifyContent:'center', height:'50%', marginTop:15}}>
                    <List
                      data={this.props.markers}
                      ItemSeparatorComponent={Divider}
                      renderItem={renderItem}
                    />
                </View>
            </View>
        );
    }
}

export default CreateNewProjectMap;