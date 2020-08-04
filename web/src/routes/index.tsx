import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Landing } from '../pages/Landing';
import { TeacherList } from '../pages/TeacherList';
import { TeacherForm } from '../pages/TeacherForm';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
      <Route path="/study" component={TeacherList} exact />
      <Route path="/give-class" component={TeacherForm} exact />
    </BrowserRouter>
  );
};
