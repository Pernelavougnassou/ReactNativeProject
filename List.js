import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, ScrollView, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { db } from './config'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }

  onMeetingsReceived = (items) => {
    console.log(items)
    this.setState(prevState => ({
      items: prevState.items = items
    }));
  }

  componentDidMount() {
    db.ref('/meetings').on('value', snapshot => {
      console.log(snapshot.val())
      if (snapshot.val() === null) {
        Alert.alert("no meeting found");
      }
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.items}
          keyExtractor={item => item.key}
          renderItem={_renderItem} />
      </ScrollView>
    );
  }
}

const _renderItem = ({ item }) => (
  <MeetingRow
    subject={item.subject}
    room={item.room}
    part={item.part}
    date={item.date}
  />
)

const clearMeeting = () => {
  db.ref('meetings').remove();
  Alert.alert('Message', 'Meeting deleted.');
}

const MeetingRow = item => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: "https://img.icons8.com/flat_round/64/000000/checkmark.png" }} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.subject}</Text>
        <Text style={styles.count}> At {item.room}</Text>
        <Text style={styles.part}> Participants </Text>
        <Text style={styles.name}>{item.part[0]}</Text>
        <Text style={styles.name}>{item.part[1]}</Text>
        <Text style={styles.name}>{item.part[2]}</Text>
        <Text style={styles.name}>{item.part[3]}</Text>
        <Text style={styles.name}>{item.part[4]}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.time}>{item.date}</Text>
          <View style={styles.btn}>
            <TouchableOpacity onPress={clearMeeting}>
              <Icon
                reverse
                name='delete'
                type='material'
                color='#38B5FD'
              />
            </TouchableOpacity></View>

        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ebf0f7"
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 25,
    height: 25,
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderLeftWidth: 6,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#30414B",
    fontWeight: 'bold',
    padding: 5,
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#dcdcdc",
    fontSize: 12,
  },
  contentHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 2
  },

  content: {
    marginLeft: 5,
    flex: 1,
  },
  time: {
    fontSize: 20,
    color: "#696969",
  },
  part: {

  },
  part: {
    marginTop: 20,
    paddingLeft: 10,
    color: "#BF1506"
  },
  btn: {
    marginLeft: 50,
    paddingTop: 200
  }
});  