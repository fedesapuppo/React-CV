import styles from '../styles/cv.module.css';

const Education = ({ data, errors, touched, onChange, onBlur, onAdd, onRemove }) => {
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
      {data.map((edu, index) => (
        <div key={edu.id} className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3>Education {index + 1}</h3>
            {data.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(edu.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            )}
          </div>
          <div className={styles.form}>
            {fieldMap.map(({ id, label, type, placeholder }) => (
              <div key={id} className={styles.formGroup}>
                <label htmlFor={`${edu.id}-${id}`} className={styles.label}>{label}</label>
                <input
                  type={type}
                  id={`${edu.id}-${id}`}
                  name={`education[${index}].${id}`}
                  value={edu[id]}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  className={`${styles.input} ${touched?.[index]?.[id] && errors?.[index]?.[id] ? styles.inputError : ''}`}
                />
                {touched?.[index]?.[id] && errors?.[index]?.[id] && (
                  <div className={styles.errorMessage}>{errors[index][id]}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      {errors && typeof errors === 'string' && (
        <div className={styles.errorMessage}>{errors}</div>
      )}
    </div>
  );
};

export default Education;