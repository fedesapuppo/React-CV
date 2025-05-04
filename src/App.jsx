import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import styles from './styles/cv.module.css'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cvData, setCvData] = useState({
    generalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    education: [{
      id: 1,
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: ''
    }],
    experience: [{
      id: 1,
      companyName: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: ''
    }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const updateCvData = (section, data) => {
    setCvData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: prev.education.length + 1,
          schoolName: '',
          titleOfStudy: '',
          startDate: '',
          endDate: ''
        }
      ]
    }));
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: prev.experience.length + 1,
          companyName: '',
          position: '',
          responsibilities: '',
          startDate: '',
          endDate: ''
        }
      ]
    }));
  };

  const removeEducation = (id) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const removeExperience = (id) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  return (
    <div className={styles.app}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <GeneralInfo
            data={cvData.generalInfo}
            onUpdate={(data) => updateCvData('generalInfo', data)}
          />
          <Education
            data={cvData.education}
            onUpdate={(data) => updateCvData('education', data)}
            onAdd={addEducation}
            onRemove={removeEducation}
          />
          <Experience
            data={cvData.experience}
            onUpdate={(data) => updateCvData('experience', data)}
            onAdd={addExperience}
            onRemove={removeExperience}
          />
          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Generate CV
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.preview}>
          <div className={styles.previewSection}>
            <h2>General Information</h2>
            <p><strong>Name:</strong> {cvData.generalInfo.name}</p>
            <p><strong>Email:</strong> {cvData.generalInfo.email}</p>
            <p><strong>Phone:</strong> {cvData.generalInfo.phone}</p>
          </div>

          <div className={styles.previewSection}>
            <h2>Education</h2>
            {cvData.education.map((edu, index) => (
              <div key={edu.id} className={styles.previewEntry}>
                <h3>Education {index + 1}</h3>
                <p><strong>School:</strong> {edu.schoolName}</p>
                <p><strong>Degree:</strong> {edu.titleOfStudy}</p>
                <p><strong>Period:</strong> {edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>

          <div className={styles.previewSection}>
            <h2>Work Experience</h2>
            {cvData.experience.map((exp, index) => (
              <div key={exp.id} className={styles.previewEntry}>
                <h3>Experience {index + 1}</h3>
                <p><strong>Company:</strong> {exp.companyName}</p>
                <p><strong>Position:</strong> {exp.position}</p>
                <p><strong>Period:</strong> {exp.startDate} - {exp.endDate}</p>
                <p><strong>Responsibilities:</strong></p>
                <p className={styles.responsibilities}>{exp.responsibilities}</p>
              </div>
            ))}
          </div>

          <div className={styles.editButtonContainer}>
            <button onClick={handleEdit} className={styles.editButton}>
              Edit CV
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
