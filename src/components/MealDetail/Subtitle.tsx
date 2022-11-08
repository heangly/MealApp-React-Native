import { StyleSheet, Text, View } from 'react-native'

type Props = {
  text: string
}

const Subtitle: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#e2b397',
    borderBottomWidth: 2
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e2b397'
  }
})
