import React from 'react';
import { strapi } from '@strapi/client';


export const STRAPI_PROD_URL = "";
export const STRAPI_BASE_DOMAIN = window.location.href.includes("localhost:3000") ? 'http://localhost:1337' : STRAPI_PROD_URL;
export const STRAPI_API_URL =  `${STRAPI_BASE_DOMAIN}/api`;
export const AUTH = '4d09894ccd5be51e93ef64d08e49ef2358cc630ab2c307ca1d42ed7442fda7beee1c66e377b726db0ec9ef670cf26f2f863c5ce131b3114ce1925873e65b86e40abce2edf0b53f1d2491c8d122b97d51f27f7636920eca4185c2437d1584495ec1c240f33e4a29984f8a79de3d58bb95079c32060c62f30005488c20b8807654'

export async function getStrapiData(url) {
     const fetchResult = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `bearer ${AUTH}`,
        }
    });
    return await fetchResult.json();
}    



