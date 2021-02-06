import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView, View, ScrollView, Pressable, Image } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../../theme-context';
import { styles } from './userSettings.styles';

export const UserSettings = ({ navigation }) => {

  const theme = useTheme();
  const statusBarHeight = getStatusBarHeight();
  const themeContext = React.useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: '#006FD6'}}>
      <SafeAreaView style={{flex: 1, backgroundColor: theme['background-basic-color-1'], marginTop:statusBarHeight}}>
        <Text style={{margin:5}}>
          This is the User Settings
        </Text>
        <Button style={{margin:5}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
      </SafeAreaView>
    </View>
  );
};
