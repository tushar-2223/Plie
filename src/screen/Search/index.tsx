import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Strings} from '../../utils';
import styles from './style';

const Search = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <View style={styles.content}>
        <Icon name="search" size={64} color={Colors.BORDER} />
        <Text style={styles.title}>{Strings.search}</Text>
        <Text style={styles.subtitle}>Search for dance events near you</Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
