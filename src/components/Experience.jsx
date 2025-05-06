import styles from '../styles/cv.module.css';

const Experience = ({ data, errors, touched, onChange, onBlur, onAdd, onRemove }) => {
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
      {data.map((exp, index) => (
        <div key={exp.id} className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3>Experience {index + 1}</h3>
            {data.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(exp.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            )}
          </div>
          <div className={styles.form}>
            {fieldMap.map(({ id, label, type, placeholder }) => (
              <div key={id} className={styles.formGroup}>
                <label htmlFor={`${exp.id}-${id}`} className={styles.label}>{label}</label>
                {type === 'textarea' ? (
                  <textarea
                    id={`${exp.id}-${id}`}
                    name={`experience[${index}].${id}`}
                    value={exp[id]}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    className={`${styles.textarea} ${touched?.[index]?.[id] && errors?.[index]?.[id] ? styles.inputError : ''}`}
                    rows="4"
                  />
                ) : (
                  <input
                    type={type}
                    id={`${exp.id}-${id}`}
                    name={`experience[${index}].${id}`}
                    value={exp[id]}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    className={`${styles.input} ${touched?.[index]?.[id] && errors?.[index]?.[id] ? styles.inputError : ''}`}
                  />
                )}
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

export default Experience;