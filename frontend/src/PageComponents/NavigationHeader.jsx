import React, { useState, useEffect } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { AUTH, getStrapiData, STRAPI_BASE_DOMAIN, strapiClient } from '../GlobalUtilities/globals';
import { useNavigate } from 'react-router-dom';
import styles from '../stylesheets/NavigationHeader.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function NavigationHeader() {
    // Fetch the navigation bar data from Strapi
    const [navBarData, setNavBarData] = useState(null);
    const navigate = useNavigate();
    const [collapsableButtons, setCollapsableButtons] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchResult = await getStrapiData('/api/navigation-bar?populate=*')
            setNavBarData(fetchResult);
            console.log(fetchResult);
            // setCollapsableButtons(JSON.parse(fetchResult.data.NavigationBar.collapsableButtons));
        };

        fetchData();
    }
    , []);

        

  return (
        <div className={styles.navBarContainer}>
            <ButtonGroup variant='text' aria-label='text button group'>
                {navBarData && navBarData.data.NavigationBar.buttons.map((button) => (
                    <>
                        {navBarData.data.NavigationBar.collapsableButtonsNames.includes(button.text)  ?
                            <CollapsableButton text={button.text} link={button.link} children={navBarData.data.NavigationBar.collapsableButtons[`${button.text}`]}/> 
                            // <></>
                            :
                            <Button variant='text' className={styles.navButton}  key={button.id} onClick={() => {
                                window.location.href = button.link;
                            }}>
                                {button.text} 
                            </Button>
                        }
                    </>

                ))}
            </ButtonGroup>

        </div>
  )

}

function CollapsableButton({text, link, children}) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button 
                variant='text' 
                className={styles.navButton} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={() => window.location.href = `${STRAPI_BASE_DOMAIN}${link}`} 
                onMouseEnter={handleMouseEnter}
            >
                {text}
            </Button>

            <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    sx: {
                        backgroundColor: 'var(--primary-bg-color)', 
                    }
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: 'var(--primary-bg-color)',
                    }
                }}
            > 
                {children && children.map((child) => (
                    <MenuItem 
                        key={child.text}
                        onClick={() => window.location.href = child.link}
                        sx={{
                            backgroundColor: 'var(--primary-bg-color)', 
                            color: '#fff'
                        }}
                    >
                        {child.text}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default NavigationHeader