export type TCardDetails = {
    cardDetails: {
    links: {
        mission_patch: string;
        wikipedia: string;
    };
    rocket: {
        rocket_name: string;
    }
    launch_site: {
        site_name: string;
    }
    launch_year: string;
    mission_name: string;
    flight_number: number;
    details: string;
    }   
}

export type TInfo = {
    info: { flight_number: number; links: { mission_patch: string; }; mission_name: string; details: string; };
    flight_number: number; links: { mission_patch: string; }; mission_name: string; details: string; 
    
}