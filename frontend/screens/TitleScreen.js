import React, { Component } from 'react';
import { View,  ScrollView, Pressable, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import styles from './titleScreenStyles.js';

// ****** TODO *******
// 1.) Add some sort of highlight when sign up is pressed (Pressable, TouchableHighlight) -- Complete
// 2.) Add circles to hold images -- Complete
// 3.) Add images to circles -- Complete (Maybe add a rim)
// 4.) Get feedback on color scheme and overall design
// 5.) Hook up redirects to login and sign up page -- Complete
// 6.) Possibly add animation to the text and image bubbles
// 7.) Maybe add a subtitle text under the title

const ImageCircleCity = (props) => {

    return(
        <View marginLeft= {props.leftMargin} marginBottom= {props.bottomMargin} style={styles.circle}>
            <Image
                style = {styles.image}
                source = {require('./city-isometric.jpg')}
            />
        </View>
    );
}

const ImageCircleConstruction = (props) => {

    return(
        <View marginLeft= {props.leftMargin} marginBottom= {props.bottomMargin} style={styles.circle}>
            <Image
                style = {styles.image}
                source = {require('./construction.jpeg')}
            />
        </View>
    );
}

class TitleScreenClass extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            active: -1
        };
    }

    onPressSignIn = () => {
        this.setState({
            active: 1
        });

    }

    onUnPressSignIn = () => {
        this.setState({
            active: -1
        });

        this.props.navigation.navigate("SignUp");
    }

    onPressLogIn = () => {
        this.props.navigation.navigate("LogIn");
    }

    render() {

        return(
            <View backgroundColor={styles.container.backgroundColor} flex={1}>
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>

                    <View marginTop={10} marginLeft={30}>
                        <ImageCircleCity leftMargin={100} bottomMargin={-80}/>
                        <ImageCircleConstruction leftMargin={180} bottomMargin={20}/>
                    </View>

                    <View>
                        <Text category='h1' status='control'>
                            2+ Community
                        </Text>
                    </View>

                    <View>

                        <Button size='giant' onPress={this.onPressLogIn} style={styles.logInButton}>
                            <Text style={styles.logInText}>
                                Log In
                            </Text>
                        </Button>

                        <View style={styles.signUpButton}>
                            <Pressable onPressIn={this.onPressSignIn} onPressOut={this.onUnPressSignIn}>
                                <Text style={this.state.active === 1 ? styles.signUpTextPressed : styles.signUpText}>
                                    Sign Up
                                </Text>
                            </Pressable>
                        </View>

                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default TitleScreenClass;