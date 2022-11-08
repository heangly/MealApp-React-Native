import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { RootDrawerParamList, RootStackParamList } from './src/common/types'
import CategoriesScreen from './src/screens/CategoriesScreen'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen'
import MealDetailsScreen from './src/screens/MealDetailsScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<RootDrawerParamList>()

// This Draw Navigation is nested inside Native Stack
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        //shadwcolor here Remove the white line of the header
        headerStyle: { backgroundColor: '#351401', shadowColor: 'transparent' },
        headerTintColor: 'white',
        // this change the background color of the main content area (not draw sidebar)
        sceneContainerStyle: {
          backgroundColor: '#3f2f25'
        },
        // this change the background color of the draw sidebar
        drawerContentStyle: {
          backgroundColor: '#351401'
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#3f2f25',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
            headerBackTitle: ''
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            options={{ title: 'Meals Overview' }}
          />

          <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
