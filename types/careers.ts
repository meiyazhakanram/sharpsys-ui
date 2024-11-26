export type Career = {
    id: number;
    title: string;
    description: string;
    heading: Heading;
    job: Job;
};

export type Heading = {
    positiontitle: string;
    locationtitle: string;
    noofopeningstitle: string;
    jobtypetitle: string;

};

export type Job = {
    position: string;
    location: string;
    noofopenings: string;
    jobtype: string;
}
