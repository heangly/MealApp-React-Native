import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../common/types'
import { useLayoutEffect, useMemo } from 'react'
import { MEALS } from '../data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetails'>

const MealDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { mealId } = route.params

  const meal = useMemo(
    () => MEALS.find((meal) => meal.id === mealId)!,
    [mealId]
  )

  const onHeaderButtonPress = () => {
    console.log('====================================')
    console.log('Press')
    console.log('====================================')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton icon='star' color='white' onPress={onHeaderButtonPress} />
      )
    })
  }, [navigation, onHeaderButtonPress])

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />

      <Text style={styles.title}>{meal.title}</Text>

      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />

      <Subtitle text='Ingredients' />
      <List data={meal.ingredients} />

      <Subtitle text='Steps' />
      <List data={meal.steps} />
    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },

  detailText: {
    color: 'white'
  }
})
