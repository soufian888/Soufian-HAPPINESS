import React, { useState, useEffect } from 'react';
import './App.css';
import YouTubeAnalytics from './components/YouTubeAnalytics';
import TodoList from './components/TodoList';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎉 Soufian HAPPINESS</h1>
        <p>YouTube Analytics + To-Do List</p>
      </header>

      <nav className="nav-tabs">
        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 YouTube Analytics
        </button>
        <button
          className={activeTab === 'todo' ? 'active' : ''}
          onClick={() => setActiveTab('todo')}
        >
          ✓ To-Do List
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'dashboard' && <YouTubeAnalytics />}
        {activeTab === 'todo' && <TodoList />}
      </main>
    </div>
  );
}

export default App;
