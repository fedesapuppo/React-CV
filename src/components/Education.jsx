import { useState, useEffect } from 'react';
import styles from '../styles/cv.module.css';

const Education = ({ data, onUpdate }) => {
  const [education, setEducation] = useState(data);

  useEffect(() => {
    setEducation(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...education,
      [name]: value
    };
    setEducation(newData);
    onUpdate(newData);
  };

  const fieldMap = [
    {
      id: 'schoolName',
      label: 'School Name',
      type: 'text',
      placeholder: 'Enter school or university name'
    },
    {
      id: 'titleOfStudy',
      label: 'Title of Study',
      type: 'text',
      placeholder: 'Enter your degree or course name'
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
    <div className={styles.education}>
      <h2>Education</h2>
      <form className={styles.form}>
        {fieldMap.map(({ id, label, type, placeholder }) => (
          <div key={id} className={styles.formGroup}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              value={education[id]}
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

export default Education;