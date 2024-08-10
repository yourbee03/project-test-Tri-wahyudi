import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import PostsList from './components/PostsList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <PostsList />
    </div>
  );
};

export default App;