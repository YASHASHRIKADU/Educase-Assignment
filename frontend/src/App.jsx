import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MobileShell from './components/MobileShell';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <main className="app-root">
        <MobileShell>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MobileShell>
      </main>
    </BrowserRouter>
  );
}

export default App;
