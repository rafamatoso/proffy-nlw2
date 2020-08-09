import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';
import landingImg from '../../assets/images/landing.png';
import { styles } from './styles';

export const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToGiveClassView = () => {
    navigate('GiveClasses');
  };

  const handleNavigateToStudyView = () => {
    navigate('Study');
  };

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyView}>
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClassView}>
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 200 conexões já realizadas {` `} <Image source={heartIcon} />
      </Text>
    </View>
  );
};
