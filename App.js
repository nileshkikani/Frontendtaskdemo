import React from 'react';
import {Actions, Router, Scene, Stack, Tabs} from 'react-native-router-flux';

import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';

const RouterFile = () => (
  <Router>
    <Scene>
      <Scene key="homeScreen" component={HomeScreen} hideNavBar />
      <Scene key="detailsScreen" component={DetailsScreen} hideNavBar />
    </Scene>
  </Router>
);

export default RouterFile;
