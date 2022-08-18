
import { NavigationContainer } from '@react-navigation/native'
import { Fragment } from 'react';
import { StatusBar } from 'react-native';

import TabNavegacion from './components/Navegacion/TabNavegacion'


export default function App() {
  return (
    <Fragment>
      <StatusBar 
        hidden  
      />
      <NavigationContainer>

        <TabNavegacion />
      </NavigationContainer>
    </Fragment>

  );
}