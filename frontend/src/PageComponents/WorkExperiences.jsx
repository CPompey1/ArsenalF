import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React, { useEffect, useState } from 'react'
import { getStrapiData } from '../GlobalUtilities/globals';
import styles from '../stylesheets/WorkExperience.module.css';
function WorkExperiences() {

    const [workExperiences, setWorkExperiences] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const fetchResult = await getStrapiData('/api/all-work-experiences')
            setWorkExperiences(fetchResult);
            setLoading(false);
            console.log(fetchResult);
        }
        fetchData();
    }, []);
  return (
    <>
        <div className={styles.workExperiencesContainer} >
            {loading ? <div>Loading...</div> : null}
            {error ? <div>Error loading experiences</div> : null}

            {workExperiences == null ? null :
                <>
                    {workExperiences.data && workExperiences.data.map((workExperience) => (
                        <WorkExperience 
                            role={workExperience.roleName} 
                            company={workExperience.company} 
                            startDate={workExperience.startDate} 
                            endDate={workExperience.endDate} 
                            description={workExperience.description}
                        />
                    
                    ))}
                </>
            }
        </div>
    </>
  )
}

function WorkExperience({role, company, startDate, endDate, description}) {
    const present = "Present";

    // Helper to format ISO date string to "Month YYYY"
    function formatMonthYear(dateString) {
        if (!dateString) return null;
        const date = new Date(dateString);
        return date.toLocaleString('default', { month: 'long', year: 'numeric' });
    }

    return (
        <>
            <div className={styles.secondaryTitleCenter}>
                <h2>{role} at {company}</h2>
            </div>


            <p className={styles.regularTextCenter}> 
                {formatMonthYear(startDate)} - {endDate == null ? present : formatMonthYear(endDate)}
            </p>
          
            <div className={styles.experienceDescription}>
                <BlocksRenderer content={description} className={styles.regularText} />
            </div>
        </>
    )
}

export default WorkExperiences
