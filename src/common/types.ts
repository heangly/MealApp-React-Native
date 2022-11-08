import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  MealsCategories: undefined
  MealsOverview: { categoryId: string }
  MealDetails: { mealId: string }
}

export type RootDrawerParamList = {
  Categories: NavigatorScreenParams<RootStackParamList>
  Favorites: undefined
}
