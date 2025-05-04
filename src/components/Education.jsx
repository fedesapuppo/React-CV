import { useState, useEffect } from 'react';
import styles from '../styles/cv.module.css';

const Education = ({ data, onUpdate, onAdd, onRemove }) => {
  const [education, setEducation] = useState(data);

  useEffect(() => {
    setEducation(data);
  }, [data]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    const newData = education.map(edu =>
      edu.id === id ? { ...edu, [name]: value } : edu
    );
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
      <div className={styles.sectionHeader}>
        <h2>Education</h2>
        <button
          type="button"
          onClick={onAdd}
          className={styles.addButton}
        >
          Add Education
        </button>
      </div>
      {education.map((edu, index) => (
        <div key={edu.id} className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3>Education {index + 1}</h3>
            {education.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(edu.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            )}
          </div>
          <form className={styles.form}>
            {fieldMap.map(({ id, label, type, placeholder }) => (
              <div key={id} className={styles.formGroup}>
                <label htmlFor={`${edu.id}-${id}`} className={styles.label}>{label}</label>
                <input
                  type={type}
                  id={`${edu.id}-${id}`}
                  name={id}
                  value={edu[id]}
                  onChange={(e) => handleChange(edu.id, e)}
                  placeholder={placeholder}
                  className={styles.input}
                />
              </div>
            ))}
          </form>
        </div>
      ))}
    </div>
  );
};

export default Education;