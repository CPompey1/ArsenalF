import React from 'react'
import NavigationHeader from '../PageComponents/NavigationHeader';
import Footer from '../PageComponents/Footer';
import ContactMe from '../PageComponents/ContactMe';
import styles from '../stylesheets/GlobalClasses.module.css';
function ContactMePage() {
  return (

    <>
      <NavigationHeader />
      <div className={styles.pageBodyContainer}>
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default ContactMePage