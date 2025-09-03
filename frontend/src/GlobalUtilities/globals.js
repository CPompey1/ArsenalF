import React from 'react';
import { strapi } from '@strapi/client';


export const STRAPI_PROD_URL = "";
export const STRAPI_BASE_DOMAIN = window.location.href.includes("localhost:3000") ? 'http://localhost:1337' : STRAPI_PROD_URL;
export const STRAPI_API_URL =  `${STRAPI_BASE_DOMAIN}/api`;
export const AUTH = 'a4ac7086b19daf2704a42d67791eb2b692c2c44c4b6b4e29f2a4b6ecd381e094dc72b056215665323285dfd69a4ed284de2e272c093da1cb31901f7b37fde95f59d4162c8da9f55255620d9bd8b9e2814dea77f155144becbda7bd321ff8c9c09b7dc43877e47fc391e8e925cc949427b9cb96eebc26de36116aad71db4c5b55'; // Replace with your actual token

export async function getStrapiData(url) {
     const fetchResult = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization' : `bearer ${AUTH}`,
        }
    });
    return await fetchResult.json();
}    

export function sortExperienceByEndDate(experiences){
    return experiences.sort((a, b) => {
        const dateA = a.endDate ? new Date(a.endDate) : new Date();
        console.log(dateA);
        const dateB = b.endDate ? new Date(b.endDate) : new Date();
        return dateB - dateA; // Sort in ascending order (earliest first)
    });
}


export function skillsCsvToBulletPoints(skillsListCsv) {
    if (!skillsListCsv) return null;
    const skillsArray = skillsListCsv.split(',').map(skill => skill.trim());
    // Group skills into chunks of 5
    const chunkedSkills = [];
    for (let i = 0; i < skillsArray.length; i += 5) {
        chunkedSkills.push(skillsArray.slice(i, i + 5));
    }

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            {chunkedSkills.map((chunk, chunkIdx) => (
                <ul key={chunkIdx}>
                    {chunk.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                    ))}
                </ul>
            ))}
        </div>
    );
}


