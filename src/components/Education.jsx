import { useState } from 'react';
import '../styles/Education.css';

const Education = () => {
  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation(prevEducation => ({
      ...prevEducation,
      [name]: value
    }));
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <form className="education-form">
        {fieldMap.map(({ id, label, type, placeholder }) => (
          <div key={id} className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              value={education[id]}
              onChange={handleChange}
              placeholder={placeholder}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Education;