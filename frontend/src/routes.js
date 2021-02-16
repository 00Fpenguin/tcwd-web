import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account';
import AccountDetailView from 'src/views/account/Detail';
import ComplaintsView from 'src/views/complaints';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import HomeView from 'src/views/home';
import PaymentView from 'src/views/payments';
import FormView from 'src/views/forms';
import JobView from 'src/views/jobs';
import TicketsView from 'src/views/tickets';
import AnnouncementView from 'src/views/announcements';
import FaqView from 'src/views/faqs';
import ReportView from 'src/views/report';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <HomeView /> },
      { path: 'home', element: <HomeView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'accounts', element: <AccountView /> },
      { path: 'accounts/:id', element: <AccountDetailView /> },
      { path: 'payments', element: <PaymentView /> },
      { path: 'complaints', element: <ComplaintsView /> },
      { path: 'forms', element: <FormView /> },
      { path: 'jobs', element: <JobView /> },
      { path: 'tickets', element: <TicketsView /> },
      { path: 'announcements', element: <AnnouncementView /> },
      { path: 'faqs', element: <FaqView /> },
      { path: 'reports', element: <ReportView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
