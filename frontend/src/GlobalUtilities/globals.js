import React from 'react';
import { strapi } from '@strapi/client';


export const STRAPI_PROD_URL = "";
export const STRAPI_BASE_DOMAIN = window.location.href.includes("localhost:3000") ? 'http://localhost:1337' : STRAPI_PROD_URL;
export const STRAPI_API_URL =  `${STRAPI_BASE_DOMAIN}/api`;
export const AUTH = 'a5480c90ba4ae67e17d8da4303ada72831e2c8219748d00ccc1fc1f43de673f6bbf5aa70410b742294fceef2f3d5478035f6f552340694af8f200d4802fe2e577065fbb5a5d66634b368871ec0f53868fff0ee513b08bfe307b07b2d2147d934b4bc48c127f12def1e5c36b3f43746afca42216f244d385e4a83ba5ad438ed2c'

export async function getStrapiData(url) {
     const fetchResult = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `bearer ${AUTH}`,
        }
    });
    return await fetchResult.json();
}    



