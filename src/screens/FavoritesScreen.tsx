import { StyleSheet, Text, View } from 'react-native'
import List from '../components/MealDetail/List'
import { MEALS } from '../data'
import { useAppDispatch, useAppSelector } from '../store'

const FavoritesScreen = () => {
  const favoriteMealids = useAppSelector((state) => state.favoriteMeals.ids)
  const dispatch = useAppDispatch()

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealids.includes(meal.id)
  )

  if (favoriteMealids.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text>You do not have favorite meals yet.</Text>
      </View>
    )
  }

  return (
    <View style={styles.rootContainer}>
      {favoriteMeals.map((meal) => (
        <Text key={meal.id} style={styles.text}>
          {meal.title}
        </Text>
      ))}
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },

  text: {
    color: 'white',
    margin: 10,
    fontSize: 18
  }
})
