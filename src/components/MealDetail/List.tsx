import { StyleSheet, Text, View } from 'react-native'

type Props = { data: string[] }

const List: React.FC<Props> = ({ data }) => {
  return (
    <View>
      {data.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 12,
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 24,
    backgroundColor: '#e2b497'
  },

  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
})
