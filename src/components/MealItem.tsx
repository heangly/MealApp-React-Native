import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Meal from '../models/meal'
import MealDetails from './MealDetails'

type Props = Meal & { onPress: () => void }

const MealItem: React.FC<Props> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />

            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
            additionalStyles={{ color: 'pink' }}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },

  buttonPressed: {
    opacity: 0.5
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: 200
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
})
