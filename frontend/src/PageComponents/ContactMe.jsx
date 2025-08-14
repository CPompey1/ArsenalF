import React, { useEffect, useState } from 'react'
import styles from '../stylesheets/ContactMe.module.css'
import { getStrapiData } from '../GlobalUtilities/globals';
function ContactMe() {
    const [contactMe, setContactMe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const fetchResult = await getStrapiData('/api/contact');
            setContactMe(fetchResult);
            setLoading(false);
            console.log(fetchResult);
        }
        fetchData();
    }, []);
  return (
    <>
        <div className={styles.contactMeContainer}>
            {loading ? <div>Loading...</div> : null}
            {contactMe == null ? null :
                <>
                    <h1 className={styles.primaryTitle}>Contact Me</h1>
                    <p className={styles.regularTextCenter}>
                        {contactMe.data.description}
                    </p>
                    <div className={styles.secondaryTitleCenter}>
                        <h2>Email</h2>
                    </div>
                    <p className={styles.regularTextCenter}>{contactMe.data.email}</p>

                    <div className={styles.secondaryTitleCenter}>
                        <h2>Phone</h2>
                    </div>
                    <p className={styles.regularTextCenter}>{contactMe.data.mobileNumber}</p>

                </>
            }
        </div>
    </>
  )
}

export default ContactMe