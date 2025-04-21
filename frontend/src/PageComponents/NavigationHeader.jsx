import React, { useState, useEffect } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { AUTH, getStrapiData, strapiClient } from '../GlobalUtilities/globals';
import { useNavigate } from 'react-router-dom';
import styles from '../stylesheets/NavigationHeader.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';

function NavigationHeader() {
    // Fetch the navigation bar data from Strapi
    const [navBarData, setNavBarData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const fetchResult = await getStrapiData('/api/navigation-bar?populate=*')
            setNavBarData(fetchResult);
            console.log(fetchResult);
        };

        fetchData();
    }
    , []);

        

  return (
        <div className={styles.navBarContainer}>
            <ButtonGroup variant='text' aria-label='text button group'>
                {navBarData && navBarData.data.NavigationBar.buttons.map((button) => (
                    <Button variant='text' className={styles.navButton}  key={button.id} onClick={() => {
                        window.location.href = button.link;
                    }}>
                        {button.text}
                    </Button>
                ))}
            </ButtonGroup>

            <MenuIcon className={styles.navBarMenu} onClick={() => {
                window.location.href = '/';
            }} />
        </div>

  )
}




export default NavigationHeader 