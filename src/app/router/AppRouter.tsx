import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
import AboutPage from '../../pages/AboutPage';
import HomePage from '../../pages/HomePage';
import TeamsPage from '../../pages/TeamsPage';
import Layout from '../../components/_common/Layout/Layout';
import ROUTER from './../../constants/routerConstants';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTER.ABOUT_PAGE} element={<AboutPage />} />
        <Route path={ROUTER.TEAM_PAGE} element={<TeamsPage />} />
        <Route path={ROUTER.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
