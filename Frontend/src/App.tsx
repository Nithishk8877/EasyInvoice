import { useState } from 'react';
import { ToastProvider } from './ui/ToastContext';
import { ToastContainer } from './ui/Toast';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="w-screen min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white">
          {isLoggedIn ? (
            <Dashboard onLogout={() => setIsLoggedIn(false)} />
          ) : (
            <Login onLogin={() => setIsLoggedIn(true)} />
          )}
        </div>
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
