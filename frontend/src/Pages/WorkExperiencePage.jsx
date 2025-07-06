import React from 'react'
import '../App.css';
import { BuilderComponent } from '@builder.io/react';
import NavigationHeader from '../PageComponents/NavigationHeader';
import styles from '../stylesheets/GlobalClasses.module.css';
import Footer from '../PageComponents/Footer';
import WorkExperiences from '../PageComponents/WorkExperiences';
import ProfileIntroduction from '../PageComponents/ProfileIntroduction';
function WorkExperiencePage() {
  return (
    <>
        <NavigationHeader />
        <div className={styles.pageBodyContainer}>
          <ProfileIntroduction />
          <WorkExperiences />
        </div>
        <Footer />
        
    </>
  )
}

export default WorkExperiencePage
