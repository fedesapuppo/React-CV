import { useState, useEffect } from 'react';
import styles from '../styles/cv.module.css';

const Experience = ({ data, onUpdate }) => {
  const [experience, setExperience] = useState(data);

  useEffect(() => {
    setExperience(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...experience,
      [name]: value
    };
    setExperience(newData);
    onUpdate(newData);
  };

  const fieldMap = [
    {
      id: 'companyName',
      label: 'Company Name',
      type: 'text',
      placeholder: 'Enter company name'
    },
    {
      id: 'position',
      label: 'Position Title',
      type: 'text',
      placeholder: 'Enter your job title'
    },
    {
      id: 'responsibilities',
      label: 'Main Responsibilities',
      type: 'textarea',
      placeholder: 'Describe your main responsibilities and achievements'
    },
    {
      id: 'startDate',
      label: 'Start Date',
      type: 'date',
      placeholder: 'Select start date'
    },
    {
      id: 'endDate',
      label: 'End Date',
      type: 'date',
      placeholder: 'Select end date'
    }
  ];

  return (
    <div className={styles.experience}>
      <h2>Work Experience</h2>
      <form className={styles.form}>
        {fieldMap.map(({ id, label, type, placeholder }) => (
          <div key={id} className={styles.formGroup}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            {type === 'textarea' ? (
              <textarea
                id={id}
                name={id}
                value={experience[id]}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.textarea}
                rows="4"
              />
            ) : (
              <input
                type={type}
                id={id}
                name={id}
                value={experience[id]}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.input}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default Experience;