import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import styles from './styles/cv.module.css'

function App() {
  return (
    <div className={styles.app}>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  )
}

export default App
