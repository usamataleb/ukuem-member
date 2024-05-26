// src/services/interfaces.ts

export interface Card {
    statSubtitle: string;
    statTitle: number;
    statArrow: string;
    statIconName: string;
    statIconColor: string;
    statDescription: string;
    statPercent: number;
    statPercentColor: string;
}
export interface user {
    member_id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    user_name: string;
    password: string;
    email: string;
    phone_number: string;
    place: string;
    position: string;
    date_of_joining: string;
    position_in_ukuem: string;
    occupation: string;
    department_id: string;
    employer: string;
    qualification: string;
    specialization: string;
    image_field: string | null;
    national_id: string;
    national_id_type: string;
    institution: string;
    member_status: string;
    monthlyCharge: number | null;
}
export interface response {
    success: boolean;
    message: string;
    user: string;
    errors: string;
    status: number;
}
export interface donation {
    donation_id : number;
    year_id : number;
    month_id : number;
    amount : number;
    userID : number;
}


export interface year {
    year_id: string,
    year_name: string
}

interface DatasetConfig {
    label: string;
    data: number[];
    fill?: boolean;
    backgroundColor: string;
    borderColor: string;
    barThickness: number;
}

// Define a type that represents the structure of your interfaces
export type InterfaceTypes = {
    Card: Card;
    User: user;
    response: response;
    donation: donation;
    year: year;
    datasets: DatasetConfig;
};