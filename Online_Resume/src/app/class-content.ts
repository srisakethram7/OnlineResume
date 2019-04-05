
export class Content{
    heading: HeadingType;
    subHeading: string = "";
    location: string = "";
    workTitle: string = "";
    duration: string = "";
    description: string = "";
}

export enum HeadingType { 
    SUMMARY = 'Summary',
    WORKEXPERIENCE = 'Work Experience',
    EDUCATION = 'Education'
}

export class AboutContent{
    description: String = "";
}