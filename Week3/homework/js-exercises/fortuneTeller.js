'use strict'

const numChildren = ['1', '2', '3', '4', '5'];
const partnerNames = ['Sarah', 'Kyle', 'Will', 'Eric', 'Layla'];
const locations = ['Hungary', 'Slovenia', 'Spain', 'Canada', 'Botswana'];
const jobs = ['programmer', 'teacher', 'doctor', 'farmer', 'translater'];

const tellFortune = (kidsName, nameOfPartner, geographicLocation, jobTitle) => {
    const randomKidNum = kidsName[Math.floor(Math.random() * kidsName.length)];
    const randomPartner = nameOfPartner[Math.floor(Math.random() * nameOfPartner.length)];
    const randomLocation = geographicLocation[Math.floor(Math.random() * geographicLocation.length)];
    const randomJob = jobTitle[Math.floor(Math.random() * jobTitle.length)];
    // console.log('You will be a ' + randomJob + ' in ' + randomLocation + 
    // ', married to ' + randomPartner + ' with ' + randomKidNum + ' kids.');
    console.log(`You will be a ${randomJob} in ${randomLocation}, ` + 
    `married to ${randomPartner} with ${randomKidNum} kids.`);
}

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);