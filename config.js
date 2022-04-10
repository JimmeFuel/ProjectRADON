'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken: 'pk.eyJ1IjoiamltbWVmdWVsIiwiYSI6ImNreTZvb3hyaDBoNTcydm40Y3oydThrcmQifQ.PzZIS0Z8R8Q467Erb7QozQ',
  CSV: './Sample_Data.csv',
  center: [-120.234, 47.398],
  zoom: 6,
  title: 'Pilot Domicile Map',
  description:'Find your ideal aviation job here! Pick where you want to work based on location or type of flying.',
  //  'You can search to sort the list below by distance. You can also filter the list by flying category, which carriers are at each airport, or simply select the options you want to see.',
  //sideBarInfo: ['Location_Name', 'Address', 'Phone'], //Original
  sideBarInfo: ['Location_Name', 'Type', 'Address', 'Operator'],
  popupInfo: ['Type'],
  filters: [
    {
      type: 'dropdown',
      title: 'Flying Categories: ',
      columnHeader: 'Languages',
      listItems: [
        'Legacy',
        'Major',
        'Regional',
        'Cargo',
        'EMS',
        'Military',
        'Pilot Training',
      ],
    }, 
      
//Section of filters box that searched for LEGACY AIRLINES
    {
      type: 'checkbox',
      title: 'Legacy Airlines: ',
      columnHeader: 'Operator', // Case sensitive - must match spreadsheet entry
      listItems: ['Alaska', 'American', 'Delta', 'Hawaiian', 'United'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },

//Section of filters box that searched for MAJOR AIRLINES
    {
      type: 'checkbox',
      title: 'Major Airlines: ',
      columnHeader: 'Operator', // Case sensitive - must match spreadsheet entry
      listItems: ['Allegiant', 'Avelo', 'Breeze', 'Frontier', 'JetBlue', 'Southwest', 'Spirit', 'Sun Country'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
      
      
//Section of filters box that searched for REGIONAL AIRLINES
    {
      type: 'checkbox',
      title: 'Regional Airlines: ',
      columnHeader: 'Operator', // Case sensitive - must match spreadsheet entry
      listItems: ['Air Wisconsin', 'CommutAir', 'Endeavor', 'Envoy', 'GoJet', 'Horizon', 'Mesa', 'Piedmont', 'PSA', 'Republic', 'Silver', 'SkyWest'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
      
      
//Section of filters box that searched for CARGO CARRIERS
    {
      type: 'checkbox',
      title: 'Cargo Carriers: ',
      columnHeader: 'Operator', // Case sensitive - must match spreadsheet entry
      listItems: ['ABX', 'Aloha', 'Ameriflight', 'Atlas', 'Empire', 'Everts', 'FedEx', 'National', 'Northern', 'UPS'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
      
      
//Section of filters box that searched for EMS
    {
      type: 'checkbox',
      title: 'EMS Operators: ',
      columnHeader: 'Operator', // Case sensitive - must match spreadsheet entry
      listItems: ['Air Evac Lifeteam', 'Air Methods', 'Med-Trans', 'Metro Aviation', 'PHI Air Medical', 'SevenBar'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
      
//Section of filters box that searched for MILITARY
    {
      type: 'checkbox',
      title: 'Military: ',
      columnHeader: 'Operator', // Case sensitive - must match spreadsheet entry
      listItems: ['US Air Force Reserve', 'US Air National Guard', 'US Army Reserve', 'US Army National Guard'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },   
      
      
      
      
//Section of filters box that selects INDIVIDUAL STATES
    {
      type: 'checkbox',
      title: 'Filter by States: ',
      columnHeader: 'State_province', // Case sensitive - must match spreadsheet entry
      listItems: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Fixed Wing / Rotor: ',
      columnHeader: 'Devices_available',
      listItems: [
        'Fixed-Wing',
        'Rotor',
      ],
    },
  ],
};





    