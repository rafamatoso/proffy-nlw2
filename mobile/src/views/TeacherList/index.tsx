import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { PageHeader } from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import { styles } from './styles';

export const TeacherList = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [favoreds, setFavoreds] = useState<number[]>([]);

  const handleToggleFilterVisible = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  const handleFiltersSubmit = async () => {
    loadFavoreds();

    const res = await api.get('classes', { params: { subject, week_day, time } });

    setIsFiltersVisible(false);
    setTeachers(res.data);
  };

  const loadFavoreds = () => {
    AsyncStorage.getItem('favoreds').then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavoreds(favoritedTeachersIds);
      }
    });
  };

  const enableFilterButton = () => {
    return subject !== '' && week_day !== '' && time !== '';
  };

  useFocusEffect(
    React.useCallback(() => {
      loadFavoreds();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#FFFFFF" />
          </BorderlessButton>
        }>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#C1BCCC"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
              enabled={enableFilterButton()}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}>
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} favored={favoreds.includes(teacher.id)}>
              a
            </TeacherItem>
          );
        })}
      </ScrollView>
    </View>
  );
};
