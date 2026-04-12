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
    link?: string,
    bulletpoints?: []
}

interface ICertification {
    name: string,
    from?: string,
    date?: string
}

interface ISkill {
    name: string
}


let profileData: IProfileData = $state({
    name: "",
    location: "",
    phone: "",
    email: "",
    links: []
});
let educationData: IEducationData[] = $state([]);
let workData: IWorkData[] = $state([]);
let projectsData: IProjectData[] = $state([]);
let certificationsData: ICertification[] = $state([]);
let skillsData: ISkill[] = $state([]);


export {
    profileData,
    educationData,
    workData,
    projectsData,
    certificationsData,
    skillsData
};