import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersAction from "../redux/actions/usersActions";
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {  user } = useSelector((state) => state.user);
  const { getUser} = usersAction;

  useEffect(() => {
    dispatch(getUser("63843822a7cb6fdc13b9307c"));
    // eslint-disable-next-line
  }, []);



  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'column', marginTop: 60, alignItems:"center", justifyContent:"center"}}>
          <Avatar.Image 
            source={{
              uri: user.photo,
            }}
            size={200}
          />
          <View >
            <Title style={[styles.title, {
              marginTop:20,
              flexDirection: 'column',
             textAlign:"center"
            }]}>{user.name}</Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <Ionicons name="person-outline" size={21} color="#1c7cafe6" />
          <Text style={{color:"#777777", marginLeft: 20, marginBottom:26, fontSize:20}}>{user.name}, {user.lastName}</Text>
        </View>
        <View style={styles.row}>
        <AntDesign name="profile" size={21} color="#1c7cafe6" />
          <Text style={{color:"#777777", marginLeft: 20, marginBottom:26, fontSize:20}}>Age: {user.age}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#1c7cafe6" size={21}/>
          <Text style={{color:"#777777", marginLeft: 20, marginBottom:26, fontSize:20}}>{user.mail}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Feather name="heart" size={24} color="#1c7cafe6" />
            <Text style={styles.menuItemText}>Your Reactions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <AntDesign name="edit" size={24} color="#1c7cafe6" />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:100,
    alignItems:"center",
    justifyContent:"space-between"
  },
  userInfoSection: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
   
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    height: 150,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});