import { useCallback, useLayoutEffect } from 'react'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MEALS, CATEGORIES } from '../data'
import { RootStackParamList } from '../common/types'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>

const MealsOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { categoryId } = route.params

  // Dynamically set option
  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryId, navigation])

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  )?.title!

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  )

  const onPress = (mealId: string) => {
    navigation.navigate('MealDetails', { mealId })
  }

  const renderMealItem: ListRenderItem<Meal> = useCallback(({ item }) => {
    return <MealItem {...item} onPress={onPress.bind(null, item.id)} />
  }, [])

  return (
    <View style={styles.container}>
      <FlatList<Meal>
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
