export interface Technology{
    name:string;
    href:string;
    icon:React.ReactNode;
}

export interface Experience{
    company:string;
    startDate:string;
    endDate:string;
    isCurrent:boolean;
    position:string;
    website:string;
    location:string;
    technologies:Technology[];
    discription:string[];
}