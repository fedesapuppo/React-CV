import { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const fieldMap = [
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name'
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email'
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      <form className="general-info-form">
        {fieldMap.map(({ id, label, type, placeholder }) => (
          <div key={id} className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              value={generalInfo[id]}
              onChange={handleChange}
              placeholder={placeholder}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default GeneralInfo;