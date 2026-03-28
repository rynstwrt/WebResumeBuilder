export const data: {
    name: string,
    phone: string,
    email: string,
    location: string,
    workExperience: {
        company: string | never,
        position: string | never,
        start: string | never,
        end: string | never
    }[],
    skills: string[]
} = $state({
    name: "John Doe",
    phone: "000-000-000",
    email: "john.doe@example.com",
    location: "Seattle, WA",
    workExperience: [],
    skills: []
    
    // workExperience: [
    //     {
    //         company: "Oracle",
    //         position: "Senior DevOps Engineer",
    //         start: "03/03/2020",
    //         end: "03/03/2026"
    //     }
    // ],
    // skills: ["asdfasdf", "asdffffffffff", "fffffffffffff",
    //     "asdfasadf", "asdfffffffafff",
    //     "ffffffafffffff", "asdfasdfaaa", "asdffffffffffaaa",
    //     "fffffffffffffaaaaa", "asdfasdf"]
});