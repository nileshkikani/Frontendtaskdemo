import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const DetailsScreen = props => {
  const [userDetails] = useState(props.data);

  const onPressBackButton = () => {
    Actions.pop();
  };

  const onPressLink = link => {
    Linking.openURL(link).catch(err => {
      console.error('Failed opening page because: ', err);
      alert('Failed to open page');
    });
  };

  return (
    <View>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.headerView}>
        <TouchableOpacity onPress={onPressBackButton}>
          <Image
            style={styles.backImg}
            source={require('../images/leftArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.profileView, styles.shadowProp]}>
        <Image style={styles.userImg} source={userDetails.issue.profile} />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.userTxt}>{userDetails.issue.author.name}</Text>
        </View>
      </View>
      <View style={[styles.issueDetails, styles.shadowProp]}>
        <Text style={{fontSize: 22, color: 'black'}}>Job Details :</Text>
        <Text style={{marginTop: 20, fontSize: 18, color: 'black'}}>
          Task : {userDetails.issue.title}
        </Text>
        <Text style={{marginTop: 15, fontSize: 18, color: 'black'}}>
          Description :{' '}
          {userDetails?.issue.description
            ? userDetails?.issue.description
            : 'Data Unavailable '}
        </Text>
        <TouchableOpacity
          style={styles.linkBtn}
          onPress={() => onPressLink(userDetails.issue.webUrl)}>
          <Text style={{fontSize: 18, color: 'white'}}>Open Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  headerView: {
    alignItems: 'center',
    alignSelf: 'center',
    width: Platform.OS === 'ios' ? 350 : 368,
    flexDirection: 'row',
    marginTop: 45,
    borderRadius: 10,
    marginTop: Platform.OS === 'ios' ? 45 : 8,
  },
  backImg: {
    height: 35,
    width: 18,
  },
  profileView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    elevation: 7,
  },
  issueDetails: {
    marginTop: 15,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    elevation: 7,
  },
  linkBtn: {
    backgroundColor: 'red',
    width: 110,
    height: 30,
    marginTop: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  userImg: {
    height: 100,
    width: 100,
    marginLeft: 5,
    color: 'black',
  },
  userTxt: {
    fontSize: 24,
    marginLeft: 18,
    color: 'black',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
