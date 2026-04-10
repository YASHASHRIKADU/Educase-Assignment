import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from '../components/AppButton';
import InputField from '../components/InputField';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="page page--register fade-in">
      <div className="content-block content-block--full-height">
        <h1 className="page-title">Create your PopX account</h1>

        <form className="form-layout form-layout--grow" onSubmit={(event) => event.preventDefault()}>
          <InputField
            id="register-full-name"
            name="fullName"
            label="Full Name"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <InputField
            id="register-phone"
            name="phone"
            label="Phone number"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <InputField
            id="register-email"
            name="email"
            label="Email address"
            type="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            id="register-password"
            name="password"
            label="Password"
            type="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <InputField
            id="register-company"
            name="company"
            label="Company name"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={handleChange}
          />

          <fieldset className="radio-group">
            <legend>
              Are you an Agency?<span className="required-marker">*</span>
            </legend>
            <label className="radio-option" htmlFor="agency-yes">
              <input
                id="agency-yes"
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === 'yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option" htmlFor="agency-no">
              <input
                id="agency-no"
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === 'no'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </fieldset>

          <div className="bottom-action">
            <AppButton text="Create Account" onClick={() => navigate('/account')} variant="primary" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
