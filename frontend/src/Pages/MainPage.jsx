import React from 'react'
import '../App.css';
import { BuilderComponent } from '@builder.io/react';
import NavigationHeader from '../PageComponents/NavigationHeader';
import ProfileIntroduction from '../PageComponents/ProfileIntroduction';
import ProjectExperiences from '../PageComponents/ProjectExperiences';
import styles from '../stylesheets/GlobalClasses.module.css';
import Footer from '../PageComponents/Footer';
function MainPage() {
  return (
    <>
        <NavigationHeader />
        <div className={styles.pageBodyContainer}>
          <ProfileIntroduction />
          <ProjectExperiences />
        </div>
        <Footer />
        
    </>
  )
}

export default MainPage