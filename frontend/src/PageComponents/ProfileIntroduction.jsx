import React, { useEffect, useState } from 'react'
import styles from '../stylesheets/ProfileIntroduction.module.css';
import { Avatar, Grid } from '@mui/material';
import { getStrapiData } from '../GlobalUtilities/globals';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function ProfileIntroduction() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fecthData  = async () => {
            const response = await getStrapiData('/api/profile-personal?populate=*');
            setUserInfo(response);
            console.log(response)
        }
        fecthData();
    }, [])
  return (
    <>
        {userInfo == null ? 
        <div className={styles.profileIntroductionContainer}>Loading...</div> 
        : 
        <div className={styles.profileIntroductionContainer}>
            <div className={styles.primaryTitle}>
                <h1 >{userInfo.data.name}</h1>
            </div>
            <Avatar 
                alt='Profile Picture' 
                src={userInfo.data.picture.url} 
                sx={{ width: 300, height: 300 }} 
                className={styles.avatarContainer}   
            />

            <Grid container spacing={2} className={styles.socialMediaContainer}>
                <Grid item xs={6} >
                    <a href='https://www.linkedin.com/in/cristian-pompey-39828b156/'>
                        <LinkedInIcon className={styles.linkedInIcon}/>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <a href='https://github.com/CPompey1'>
                        <GitHubIcon className={styles.gitHubIcon}/>
                    </a>
                </Grid>
            </Grid>

            <div className={styles.descriptionContainer}>
                <BlocksRenderer content={userInfo.data.description} />
            </div>

            
        </div>
        }
    </>
  )
}

export default ProfileIntroduction