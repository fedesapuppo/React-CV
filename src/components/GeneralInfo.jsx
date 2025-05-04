import { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

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
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={generalInfo.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;