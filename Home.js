
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Home({ navigation }) {
      return (
            <View style={styles.container}>
                  <Text style={{ fontSize: 48, fontStyle: 'italic', color: '#38B5FD', fontWeight: 'bold' }}>Maréu ,</Text>
                  <Text style={styles.text}>An easy way to <C>prepare</C> and <C>organize</C> successful </Text>
                  <Text style={styles.text}>meetings</Text>
                  <View style={styles.row}>
                        <View style={styles.left}>
                              <Icon
                                    reverse
                                    name='add'
                                    type='material'
                                    color='#38B5FD'
                                    onPress={() => navigation.navigate('Add')}
                              />
                              <Text style={{ fontSize: 15, fontStyle: 'italic', paddingTop: 20 }}>CREATE MEETING</Text>
                        </View>
                        <View style={styles.right}>
                              <Icon
                                    reverse
                                    name='list'
                                    type='material'
                                    color='#38B5FD'
                                    onPress={() => navigation.navigate('List')}
                              />
                              <Text style={{ fontSize: 15, fontStyle: 'italic', paddingTop: 20 }}>MEETINGS LISTS</Text>
                        </View>
                  </View>
            </View>
      );
}


const C = (props) => <Text style={{ color: '#38B5FD' }}>{props.children}</Text>

const styles = StyleSheet.create({
      container: {
            flex: 0.7,
            alignItems: 'center',
            justifyContent: 'center',
      },
      text: {
            paddingLeft: 10,
            fontSize: 20,
            fontStyle: 'italic', 
            fontWeight: 'bold',
            justifyContent: "center",
            alignItems: "center" 
      },
      row: {
            paddingTop: 80,
            flexDirection: 'row',
            justifyContent: 'space-between'
      },
      left: {
            flexDirection: 'column',
            marginRight: 20
      },
      right: {
            flexDirection: 'column',
            marginLeft: 20
      }
});
