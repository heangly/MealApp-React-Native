import { useMemo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { RootDrawerParamList, RootStackParamList } from './src/common/types'
import CategoriesScreen from './src/screens/CategoriesScreen'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen'
import MealDetailsScreen from './src/screens/MealDetailsScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<RootDrawerParamList>()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Categories' component={CategoriesScreen} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} />
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
              title: 'All Categories'
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
