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
            <div className={styles.secondaryTitle}>
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
                                            style={{ height: '400px', width: '80%', objectFit: 'cover' }}
                                        />
                                    </a>
                                </CCarouselItem>
                                
                        ))}
                    </CCarousel>


                
            
            }

      
            <div className={styles.experienceDescription}>
                <BlocksRenderer className={styles.regularText} content={description} />

                {/* <CKEditor
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                /> */}
            </div>
        </>
    )
}

/**
 * 
 * Takes following json strucutre and renders component:
 * {
 *      [
 *          {
 *              "url": "https://www.example.com",
 *              "caption": "Example Caption",
 *              ...
 *           },
 *          
 *          ...
 *      ]
 * }
 */
// function ExperienceSlideshow({images}){
//     const slideRef = createRef();

//     const nextPictureClick = () => {
//         if (slideRef.current !== null) {
//             slideRef.current.goNext();
//         }
//     }
//     const lastPictureClick = () => {
//         if (slideRef.current !== null) {
//             slideRef.current.goBack();
//         }
//     }
//     const properties = {
//         duration: 5000,
//         transitionDuration: 500,
//         infinite: true,
//         indicators: true,
//         arrows: false
//     }
//     return (
//         <>
//             <Grid container spacing={0}>
                
//                 <Grid item size={{xs:2 }} className={`${styles.arrowKeyLeft}`} >
//                     <ArrowBackIosNewIcon sx={{ fontSize: 40 }} onClick={lastPictureClick} />
//                 </Grid>

//                 <Grid item size={{xs:8}}>
//                     <div className="slide-container">
//                         <Slide ref={slideRef} {...properties}>
//                             {images && images.map((image,index) => (
//                                 <div style={{ ...divStyle, 'backgroundImage': `url(${image.url})` }}>
//                                     <span style={spanStyle}>{image.caption}</span>
//                                 </div>
//                             ))}
//                         </Slide>
//                     </div>
//                 </Grid>

//                 <Grid item size={{xs:2}} className={styles.arrowKey}>
//                     <ArrowForwardIosIcon sx={{ fontSize: 40 }}  onClick={nextPictureClick}  />
//                 </Grid>

//             </Grid>
            
//         </>
//     )
// }

export default ProjectExperiences