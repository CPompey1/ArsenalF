import React, { createRef, useEffect,useState } from 'react'
import { getStrapiData } from '../GlobalUtilities/globals'
import { BuilderComponent } from '@builder.io/react';
import { Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import styles from '../stylesheets/ProjectExperience.module.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'


function ProjectExperiences() {
    const [projectExperiences, setProjectExperiences] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const  fetchResult = await getStrapiData('/api/all-project-experiences?populate[0]=experience&populate[1]=experience.images')
            setProjectExperiences(fetchResult);
            setLoading(false);
            console.log(fetchResult);
        }

        fetchData();
    }
    , []);

  return (
    <div className={styles.projectExperiencesContainer} >
        {loading ? <div>Loading...</div> : null}
        {error ? <div>Error loading experiences</div> : null}

        {projectExperiences == null ? null :
            <>
                {projectExperiences.data[0].experience && projectExperiences.data[0].experience.map((projectExperience) => (
                    
                        <ProjectionExperience 
                            title={projectExperience.title} 
                            description={projectExperience.description} 
                            images={projectExperience.images} 
                            link={projectExperience.projectLink}
                        />

                        
                    
                 ))}
            </>
        }
        
    </div>
  )
}

function ProjectionExperience({title, description, images, link}) {
    return (
        <>
            <div className={styles.secondaryTitleCenter}>
                <h2 >{title}</h2>
            </div>
            {/* <ExperienceSlideshow images={images} /> */}
            {images && 

                    <CCarousel className={styles.carrouselImageContainer} controls indicators>
                        
                        {images.map((image,index) => (
                            
                                <CCarouselItem>
                                    <a href={link}>
                                        <CImage
                                            className="d-block w-100"
                                            src={image.url}
                                            alt={image.caption}
                                            style={{ height: '400px', width: '80%', objectFit: ' scale-down' }}
                                        />
                                    </a>
                                </CCarouselItem>
                                
                        ))}
                    </CCarousel>


                
            
            }

      
            <div className={styles.experienceDescription}>
                <BlocksRenderer className={styles.regularText} content={description} />
                <p className={styles.regularText}>
                    {link ? 
                    <a href={link} target="_blank" rel="noopener noreferrer">Link to Project</a> 
                    : <>Project is private. Please contact me for more details.</>
                    }
                </p>
            </div>
        </>
    )
}
export default ProjectExperiences
