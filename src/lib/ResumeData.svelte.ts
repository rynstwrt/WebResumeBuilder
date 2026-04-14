interface IProfileData {
    name: string,
    location?: string,
    phone?: string,
    email?: string,
    links?: string[]
}

interface IEducationData {
    school: string,
    degree: string,
    city?: string,
    date?: string
}

interface IWorkData {
    company: string,
    position: string,
    city?: string,
    dates: string,
    bulletpoints?: string[]
}

interface IProjectData {
    name: string,
    // link?: string,
    // links?: string[],
    // bulletpoints?: string[]
    links?: string,
    bulletpoints?: string
}

interface ICertification {
    name: string,
    from?: string,
    date?: string
}

interface ISkill {
    skills: string[]
}


let profileData: IProfileData = $state({
    name: "John Doe",
    location: "Seattle, WA",
    phone: "+1 000000000",
    email: "john.doe@example.com",
    links: ["https://johndoe.com", "https://johnswebsite.net"]
});

let educationData: IEducationData[] = $state([
    {
        school: "The University of Fictionville",
        degree: "B.S. Computer Science",
        city: "Fictionville, WA",
        date: "Dec 2025"
    }
]);

let workData: IWorkData[] = $state([
    {
        company: "Fiction Co.",
        position: "Frontend Developer",
        city: "Seattle, WA",
        dates: "Dec 2024 - April 2026",
        bulletpoints: [
            "Bulletpoint 1",
            "Bulletpoint 2",
            "Bulletpoint 3",
            "Bulletpoint 4"
        ]
    }
]);

let projectsData: IProjectData[] = $state([
    // {
    //     name: "Project 1",
    //     link: "https://github.com/johndoe/project1",
    //     bulletpoints: [
    //         "Bulletpoint 1",
    //         "Bulletpoint 2",
    //         "Bulletpoint 3",
    //         "Bulletpoint 4"
    //     ]
    // },
    // {
    //     name: "Project 2",
    //     link: "https://github.com/johndoe/project2",
    //     bulletpoints: [
    //         "Bulletpoint 1",
    //         "Bulletpoint 2",
    //         "Bulletpoint 3",
    //         "Bulletpoint 4"
    //     ]
    // }
    {
        name: "Project 1",
        links: "https://github.com/johndoe/link1\nhttps://github.com/johndoe/link2",
        bulletpoints: "Bulletpoint 1\nBulletpoint 2"
    },
    // {
    //     name: "Project 2",
    //     links: ["https://github.com/johndoe/link1", "https://github.com/johndoe/link2"],
    //     bulletpoints: [
    //         "Bulletpoint 1",
    //         "Bulletpoint 2",
    //         "Bulletpoint 3",
    //         "Bulletpoint 4"
    //     ]
    // }
]);

let certificationsData: ICertification[] = $state([
    {
        name: "Cisco Certified Network Associate (CCNA)",
        date: "Aug 2021",
        from: "Cisco"
    }
]);

let skillsData: ISkill = $state({
    skills: ["skill 1", "skill 2", "skill 3"]
});


export {
    profileData,
    educationData,
    workData,
    projectsData,
    certificationsData,
    skillsData
};