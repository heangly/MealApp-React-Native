import { StyleSheet, Text, View } from 'react-native'

type Props = {
  duration: number
  complexity: string
  affordability: string
  additionalStyles?: {}
  textStyle?: {}
}

const MealDetails: React.FC<Props> = ({
  duration,
  complexity,
  affordability,
  additionalStyles,
  textStyle
}) => {
  return (
    <View style={[styles.details, additionalStyles]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>

      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>

      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'center'
  },

  detailItem: {
    marginHorizontal: 4
  }
})
