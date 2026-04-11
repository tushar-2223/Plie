import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Strings} from '../../utils';
import styles from './style';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="search" size={64} color={Colors.BORDER} />
        <Text style={styles.title}>{Strings.search}</Text>
        <Text style={styles.subtitle}>Search for dance events near you</Text>
      </View>
    </View>
  );
};

export default Search;
