import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert, Dimensions, TextInput } from 'react-native';
import Select2 from 'react-native-select-two';
import DateTimePicker from 'react-native-datepicker'
import { db } from './config';

let addItem = item => {
  setTimeout(() => {
    db.ref('meetings').push({
      subject: item.subject,
      room: item.room,
      part: item.part,
      date: item.date
    })
  }, 5);
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const mockData = [
  { id: 'room 1', name: 'room1' },
  { id: 'room 2', name: 'room 2' },
  { id: 'room 3', name: 'room 3' },
  { id: 'room 4', name: 'room 4' },
  { id: 'room 5', name: 'room 5' },
  { id: 'room 6', name: 'room 6' },
  { id: 'room 7', name: 'room 7' },
  { id: 'room 8', name: 'room 8' },
  { id: 'room 9', name: 'room 9' },
  { id: 'room 10', name: 'room 10' },
];

const partData = [
  { id: 'tom@gmail.com', name: 'tom@gmail.com' },
  { id: 'bob@gmail.com', name: 'bob@gmail.com' },
  { id: 'tit@gmail.com', name: 'tit@gmail.com' },
  { id: 'per@gmail.com', name: 'per@gmail.com' },
  { id: 'mal@gmail.com', name: 'mal@gmail.com' },
  { id: 'jam@gmail.com', name: 'jam@gmail.com' },
  { id: 'bon@gmail.com', name: 'bon@gmail.com' },
  { id: 'elj12@gmail.com', name: 'elj12@gmail.com' },
  { id: 'eli00@gmail.com', name: 'eli00@gmail.com' },
  { id: 'liam@gmail.com', name: 'liam@gmail.com' },
  { id: 'jamal@gmail.com', name: 'jamal@gmail.com' },
  { id: 'toni@gmail.com', name: 'toni@gmail.com' },
  { id: 'bert@gmail.com', name: 'bert@gmail.com' },
];

export default class Add extends React.Component {

  onLayout(e) {
    const {width, height} = Dimensions.get('window')
    console.log(width, height)
  }

  state = {
    subject: '',
    room: '',
    part: [],
    date: new Date()
  };

  handleChange = e => {
    this.setState({
      subject: e.nativeEvent.text
    });
  };

  handleChangeRoom = room => {
    this.setState({ room });
  };

  handleChangePart = part => {
    this.setState({ part });
  };

  handleSubmit = () => {
    console.warn(this.state);
    addItem(this.state)
    Alert.alert('Message', 'Meeting Added.');
  };

  render() {
    return (
      <View style={styles.main}
        onLayout={this.onLayout.bind(this)}>
        <TextInput
          style={styles.itemInput}
          onChange={this.handleChange}
          placeholder="Subject here!"
        />

        <View>
          <Select2
            isSelectSingle
            style={styles.itemInput}
            popupTitle='Select a room'
            title='Select a room'
            data={mockData}
            onSelect={this.handleChangeRoom}
            onRemoveItem={this.handleChangeRoom}
          />
        </View>

        <View>
          <Text>Select Meeting Datetime</Text>
          <DateTimePicker
            style={{ width: 350 }}
            date={this.state.date}
            mode='datetime'
            placeholder="Select date"
            format="YYYY-MM-DD  HH-MM"
            minDate="2019-05-01"
            maxDate="2021-06-01"
            is24Hour={true}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 28,
                backgroundColor: '#fff'
              }
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />
        </View>

        <View>
          <Select2
            isSelectSingle={false}
            style={styles.itemInput}
            popupTitle='Set a participants (three at least)'
            title='Set a participants (three at least)'
            data={partData}
            onSelect={this.handleChangePart}
            onRemoveItem={this.handleChangePart}
          />
        </View>

        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#38B5FD'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 100,
    margin: 100,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
