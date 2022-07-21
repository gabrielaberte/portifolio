import React from 'react';
import 'antd/dist/antd.css';
import ptBR from 'antd/lib/locale/pt_BR'
import { ConfigProvider } from 'antd';
import { useRoutes } from 'react-router-dom'



import './App.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/projects', element: <ProjectsPage /> },
  ]);
  return (
    <div className="App">
      <ConfigProvider locale={ptBR}>{routes}</ConfigProvider>
    </div>
  );
}

export default App;
