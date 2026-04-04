type WorkExperience = {
    company: string,
    position: string,
    startDate: string,
    endDate: string
}

type EducationEntry = {
    institution: string,
    degree: string,
    startDate: string,
    endDate: string
}

export const data: {
    name: string,
    phone: string,
    email: string,
    location: string,
    workExperience: WorkExperience[],
    skills: string[],
    educationModalOpen: boolean,
    education: object[]
} = $state({
    name: "John Doe",
    phone: "000-000-000",
    email: "john.doe@example.com",
    location: "Seattle, WA",
    // workExperience: [],
    skills: [],
    educationModalOpen: true,
    education: [],
    workExperience: [
        {
            company: "Oracle",
            position: "Senior DevOps Engineer",
            startDate: "03/03/2020",
            endDate: "03/03/2026"
        }
    ],
    // skills: ["asdfasdf", "asdffffffffff", "fffffffffffff",
    //     "asdfasadf", "asdfffffffafff",
    //     "ffffffafffffff", "asdfasdfaaa", "asdffffffffffaaa",
    //     "fffffffffffffaaaaa", "asdfasdf"]
});



export let formModal = $state(false);