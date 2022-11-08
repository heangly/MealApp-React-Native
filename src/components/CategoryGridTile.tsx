import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'
import Category from '../models/category'

type Props = Category & { onPress: () => void }

const CategoryGridTile: React.FC<Props> = ({ title, color, onPress }) => {
  return (
    <View style={styles().gridItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles().button,
          pressed && styles().buttonPressed
        ]}
        android_ripple={{ color: '#ccc' }}
      >
        <View style={styles(color).innerContainer}>
          <Text style={styles().title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = (color?: string) =>
  StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      // shadow for andriod
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },

    button: {
      flex: 1
    },

    buttonPressed: {
      opacity: 0.5
    },

    innerContainer: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
      borderRadius: 8
    },

    title: {
      fontWeight: 'bold',
      fontSize: 18
    }
  })
