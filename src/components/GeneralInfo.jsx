import { useState, useEffect } from 'react';
import styles from '../styles/cv.module.css';

const GeneralInfo = ({ data, onUpdate }) => {
  const [generalInfo, setGeneralInfo] = useState(data);

  useEffect(() => {
    setGeneralInfo(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...generalInfo,
      [name]: value
    };
    setGeneralInfo(newData);
    onUpdate(newData);
  };

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

  return (
    <div className={styles.generalInfo}>
      <h2>General Information</h2>
      <form className={styles.form}>
        {fieldMap.map(({ id, label, type, placeholder }) => (
          <div key={id} className={styles.formGroup}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              value={generalInfo[id]}
              onChange={handleChange}
              placeholder={placeholder}
              className={styles.input}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default GeneralInfo;