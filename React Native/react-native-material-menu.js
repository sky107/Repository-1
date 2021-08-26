/*
Author : Siddharth Kumar Yadav
24/08/2021
*/
import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

export default function App() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
	  <View style={{marginTop:50,
	  padding:10,marginLeft:'75%',marginRight:'5%'}}>
      <Menu
        visible={visible}
        anchor={<Text style={{color:'dodgerblue',alignSelf:'flex-end'}} onPress={showMenu}>MORE</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Profile</MenuItem>
        <MenuItem disabled>Settings</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Log out</MenuItem>
      </Menu>
   </View>
  );
}