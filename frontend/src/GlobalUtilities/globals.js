import React from 'react';
import { strapi } from '@strapi/client';


export const STRAPI_PROD_URL = "";
export const STRAPI_BASE_DOMAIN = window.location.href.includes("localhost:3000") ? 'http://localhost:1337' : STRAPI_PROD_URL;
export const STRAPI_API_URL =  `${STRAPI_BASE_DOMAIN}/api`;
export const AUTH = 'FOOGAZY_TOKEN'; // Replace with your actual token

export async function getStrapiData(url) {
     const fetchResult = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `bearer ${AUTH}`,
        }
    });
    return await fetchResult.json();
}    



