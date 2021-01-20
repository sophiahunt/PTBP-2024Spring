import React, { Component } from 'react';

import MyHeader from '../components/MyHeader.js';
import HomeResultView from './ResultView.js';
import HomeMapView from './HomeMapView.js';
import DummyResult from '../components/DummyResult.js';
import ConfirmCompare from '../components/ConfirmCompare.js';

import { View, ScrollView, Pressable, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Input, Icon, Modal } from '@ui-kitten/components';
import styles from './homeStyles.js';

class HomeScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            location: props.location,
            compare: false,
            compareCount: 0,
            selectedProjects: []
        }

        this.onComparePress = this.onComparePress.bind(this);
        this.compareIncrement = this.compareIncrement.bind(this);
        this.compareDecrement = this.compareDecrement.bind(this);
        this.addToSelectedProjects = this.addToSelectedProjects.bind(this);
        this.removeFromSelectedProjectes = this.removeFromSelectedProjectes.bind(this)
    }

    onComparePress() {

        this.setState({
            compare: !this.state.compare
        });
    }

    compareIncrement() {

        this.setState({
            compareCount: this.state.compareCount + 1
        })
    }

    compareDecrement() {

        this.setState({
            compareCount: this.state.compareCount - 1
        })
    }

    async addToSelectedProjects(name) {

        var selectedProjectsArray = this.state.selectedProjects

        selectedProjectsArray.push(name)

        await this.setState({
            selectedProjects: selectedProjectsArray
        })

        await this.props.setProjects(selectedProjectsArray)

    }

    async removeFromSelectedProjectes(name) {

        var selectedProjectsArray = this.state.selectedProjects

        var index = selectedProjectsArray.indexOf(name)

        selectedProjectsArray.splice(index, 1)

        console.log("Array: " + JSON.stringify(selectedProjectsArray))

        await this.setState({
            selectedProjects: selectedProjectsArray
        })

        await this.props.setProjects(selectedProjectsArray)
    }

    render() {

        return(
            
            <View style={styles.container}>

                <MyHeader myHeaderText={"Home"}/>

                <View style={{height:'35%'}}>
                    <HomeMapView location={this.state.location}/>
                </View>

                <HomeResultView onComparePress={this.onComparePress}/>

                <ScrollView>
                    <DummyResult 
                        compare={this.state.compare} 
                        compareIncrement={this.compareIncrement} 
                        compareDecrement={this.compareDecrement}
                        addProject={this.addToSelectedProjects}
                        removeProject={this.removeFromSelectedProjectes}
                        projectArea={"Lake Lilian"}
                        projectComment={"Pavillion at Lake Lilian"}
                        />
                    <DummyResult 
                        compare={this.state.compare} 
                        compareIncrement={this.compareIncrement} 
                        compareDecrement={this.compareDecrement}
                        addProject={this.addToSelectedProjects}
                        removeProject={this.removeFromSelectedProjectes}
                        projectArea={"Lake Eola"}
                        projectComment={"East side of Lake Eola"}
                        />
                    <DummyResult 
                        compare={this.state.compare} 
                        compareIncrement={this.compareIncrement} 
                        compareDecrement={this.compareDecrement}
                        addProject={this.addToSelectedProjects}
                        removeProject={this.removeFromSelectedProjectes}
                        projectArea={"J. Blanchard Park"}
                        projectComment={"First mile of trails"}
                        />
                </ScrollView>

                <ConfirmCompare 
                    navigation={this.props.navigation} 
                    compare={this.state.compare} 
                    selected={this.state.compareCount}
                    selectedProjects={this.state.selectedProjects}
                />
                
            </View>
        );

    }
}

export default HomeScreen;