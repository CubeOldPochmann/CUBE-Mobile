import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('./images/logo.gif')}
          style={styles.sideMenuProfileIcon}
        />
        <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
        }}>
            CUBE: Old Pochmann
        </Text>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={styles.customItem}>
          </View>
        </DrawerContentScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
    iconStyle: {
      width: 15,
      height: 15,
      marginHorizontal: 5,
    },
    customItem: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  
  export default CustomSidebarMenu;


