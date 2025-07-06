import React from 'react';
import { strapi } from '@strapi/client';


export const STRAPI_PROD_URL = "";
export const STRAPI_BASE_DOMAIN = window.location.href.includes("localhost:3000") ? 'http://localhost:1337' : STRAPI_PROD_URL;
export const STRAPI_API_URL =  `${STRAPI_BASE_DOMAIN}/api`;
export const AUTH = 'a2e920266233c43b127a9dd0a2ef840b10b571526a99527984f1b3f18a674fa624a86664e26f5dc37fc5d16977b7bd50a5299c4cf98baf1eeeea2d93aa72d309af45d205e3545a2e66567ae7ac6dad1172eea8dc75cf3fe6c5fc4a00c9fbf3693a52f1b486703346e3047bca8b833a02e8642776193ccbb62cd9197f96165c73'; // Replace with your actual token

export async function getStrapiData(url) {
     const fetchResult = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `bearer ${AUTH}`,
        }
    });
    return await fetchResult.json();
}    



