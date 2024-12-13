export type Career = {
    title: string;
    heading: Heading;
    job: Job;
};

export type Heading = {
    positiontitle: string;
    locationtitle: string;
    noofopeningstitle: string;
    jobtypetitle: string;
    exptitle: string;
};

export type Job = {
    position: string;
    location: string;
    noofopenings: string;
    jobtype: string;
    exp: string;
}

export type CareerJoinInfo = {
    id: string;
    title: string;
    description: string;
};
