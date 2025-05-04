import { useState, useEffect } from 'react';
import styles from '../styles/cv.module.css';

const Experience = ({ data, onUpdate, onAdd, onRemove }) => {
  const [experience, setExperience] = useState(data);

  useEffect(() => {
    setExperience(data);
  }, [data]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    const newData = experience.map(exp =>
      exp.id === id ? { ...exp, [name]: value } : exp
    );
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
      <div className={styles.sectionHeader}>
        <h2>Work Experience</h2>
        <button
          type="button"
          onClick={onAdd}
          className={styles.addButton}
        >
          Add Experience
        </button>
      </div>
      {experience.map((exp, index) => (
        <div key={exp.id} className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3>Experience {index + 1}</h3>
            {experience.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(exp.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            )}
          </div>
          <form className={styles.form}>
            {fieldMap.map(({ id, label, type, placeholder }) => (
              <div key={id} className={styles.formGroup}>
                <label htmlFor={`${exp.id}-${id}`} className={styles.label}>{label}</label>
                {type === 'textarea' ? (
                  <textarea
                    id={`${exp.id}-${id}`}
                    name={id}
                    value={exp[id]}
                    onChange={(e) => handleChange(exp.id, e)}
                    placeholder={placeholder}
                    className={styles.textarea}
                    rows="4"
                  />
                ) : (
                  <input
                    type={type}
                    id={`${exp.id}-${id}`}
                    name={id}
                    value={exp[id]}
                    onChange={(e) => handleChange(exp.id, e)}
                    placeholder={placeholder}
                    className={styles.input}
                  />
                )}
              </div>
            ))}
          </form>
        </div>
      ))}
    </div>
  );
};

export default Experience;