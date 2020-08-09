import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Favorites } from '../views/Favorites';
import { TeacherList } from '../views/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => {
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
};

export default StudyTabs;
