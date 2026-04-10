import { useNavigate } from 'react-router-dom';
import AppButton from '../components/AppButton';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <section className="page page--welcome fade-in">
      <div className="content-block bottom-block">
        <h1 className="page-title">Welcome to PopX</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="button-stack">
          <AppButton text="Create Account" onClick={() => navigate('/register')} variant="primary" />
          <AppButton
            text="Already Registered? Login"
            onClick={() => navigate('/login')}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;
