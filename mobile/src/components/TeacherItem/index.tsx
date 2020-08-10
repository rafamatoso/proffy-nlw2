import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';
import { styles } from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favored: boolean;
}

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favored }) => {
  const [isFavored, setIsFavored] = useState(favored);

  const handleLinkToWhatsapp = () => {
    api.post('connections', { user_id: teacher.id });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  };

  const handleToggleFavored = async () => {
    const favoreds = await AsyncStorage.getItem('favoreds');

    let favoredsArray = [];

    if (favoreds) {
      favoredsArray = JSON.parse(favoreds);
    }

    if (isFavored) {
      const favoredIndex = favoredsArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoredsArray.splice(favoredIndex, 1);

      setIsFavored(false);
    } else {
      favoredsArray.push(teacher);

      setIsFavored(true);
    }
    await AsyncStorage.setItem('favoreds', JSON.stringify(favoredsArray));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacher.avatar,
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, isFavored ? styles.favored : {}]}
            onPress={handleToggleFavored}>
            {isFavored ? <Image source={unfavoriteIcon} /> : <Image source={heartOutlineIcon} />}
          </RectButton>

          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
