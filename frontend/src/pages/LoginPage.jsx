import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from '../components/AppButton';
import InputField from '../components/InputField';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="page fade-in">
      <div className="content-block">
        <h1 className="page-title">Signin to your PopX account</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="form-layout" onSubmit={(event) => event.preventDefault()}>
          <InputField
            id="login-email"
            name="email"
            label="Email Address"
            placeholder="Enter email address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            id="login-password"
            name="password"
            label="Password"
            placeholder="Enter password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <AppButton text="Login" onClick={() => navigate('/account')} variant="disabled" />
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
