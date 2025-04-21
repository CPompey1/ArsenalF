import React from 'react';
import { strapi } from '@strapi/client';

export const strapiClient = strapi({
     baseURL: 'http://localhost:1337/api',
     auth: 'ad36d88268916f75ccd11115d544896766ba91179ff8b8d0638bf2ac3a4baf8bfd8049fda7e6f74be45dc4e8d2a6ace886df03289595926ed74a0bb53cd8d7c191428ac62b84a3796ee2f05123a1a9ad0d070e57cd7200a76555825304959f7e688f4da436d8596b161e26319316ea2e84e64c23fd92bb386db4d1a5cd600236'
});

export const STRAPI_BASE_URL = 'http://localhost:1337';
export const STRAPI_API_URL = 'http://localhost:1337/api';
export const AUTH = 'ad36d88268916f75ccd11115d544896766ba91179ff8b8d0638bf2ac3a4baf8bfd8049fda7e6f74be45dc4e8d2a6ace886df03289595926ed74a0bb53cd8d7c191428ac62b84a3796ee2f05123a1a9ad0d070e57cd7200a76555825304959f7e688f4da436d8596b161e26319316ea2e84e64c23fd92bb386db4d1a5cd600236'

export async function getStrapiData(url) {
     const fetchResult = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `bearer ${AUTH}`,
        }
    });
    return await fetchResult.json();
}    



