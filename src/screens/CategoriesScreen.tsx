import { useCallback } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList, ListRenderItem } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data'
import Category from '../models/category'
import { RootDrawerParamList, RootStackParamList } from '../common/types'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'

type Props = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, 'Categories'>,
  NativeStackScreenProps<RootStackParamList, 'MealsCategories'>
>

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const onPress = (categoryId: string) =>
    navigation.navigate('MealsOverview', { categoryId })

  const renderCategoryItem: ListRenderItem<Category> = useCallback(
    ({ item }) => (
      <CategoryGridTile {...item} onPress={onPress.bind(null, item.id)} />
    ),
    [CATEGORIES]
  )

  return (
    <FlatList<Category>
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
