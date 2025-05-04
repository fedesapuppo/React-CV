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
    education: {
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: ''
    },
    experience: {
      companyName: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: ''
    }
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
          />
          <Experience
            data={cvData.experience}
            onUpdate={(data) => updateCvData('experience', data)}
          />
          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Generate CV
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.preview}>
          <button onClick={handleEdit} className={styles.editButton}>
            Edit CV
          </button>

          <div className={styles.previewSection}>
            <h2>General Information</h2>
            <p><strong>Name:</strong> {cvData.generalInfo.name}</p>
            <p><strong>Email:</strong> {cvData.generalInfo.email}</p>
            <p><strong>Phone:</strong> {cvData.generalInfo.phone}</p>
          </div>

          <div className={styles.previewSection}>
            <h2>Education</h2>
            <p><strong>School:</strong> {cvData.education.schoolName}</p>
            <p><strong>Degree:</strong> {cvData.education.titleOfStudy}</p>
            <p><strong>Period:</strong> {cvData.education.startDate} - {cvData.education.endDate}</p>
          </div>

          <div className={styles.previewSection}>
            <h2>Work Experience</h2>
            <p><strong>Company:</strong> {cvData.experience.companyName}</p>
            <p><strong>Position:</strong> {cvData.experience.position}</p>
            <p><strong>Period:</strong> {cvData.experience.startDate} - {cvData.experience.endDate}</p>
            <p><strong>Responsibilities:</strong></p>
            <p className={styles.responsibilities}>{cvData.experience.responsibilities}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
