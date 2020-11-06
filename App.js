import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { AuthContext } from "./src/context"

import WelcomeScreen from "./src/WelcomeScreen"
import LoginScreen from "./src/LoginScreen"
import SignupScreen from "./src/SignupScreen"
import Loader from "./src/Loader"
import Profile from "./src/Profile"

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
  <AuthStack.Screen 
  name="Welcome" 
  component={WelcomeScreen} 
  options={{ title: "Welcome" }}/>
  <AuthStack.Screen 
  name="SignIn" 
  component={LoginScreen} 
  options={{ title: "Sign In" }}/>
  <AuthStack.Screen 
  name="CreateAccount" 
  component={SignupScreen} 
  options={{ title: "Create Account" }}/>
</AuthStack.Navigator>
)


const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
)

const RootStack = createStackNavigator()
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={DrawerScreen} options={{
        animationEnabled: false
      }}/>
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackScreen} options={{
          animationEnabled: false
        }}/>
    )}
  </RootStack.Navigator>
)

export default () => {

  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf')
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf')
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null)
      }
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  

 return ( 
   <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen userToken={userToken}/>
    </NavigationContainer>
    </AuthContext.Provider>)
    }
