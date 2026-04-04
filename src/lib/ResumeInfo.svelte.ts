type WorkExperience = {
    employer: string,
    title: string,
    description?: string,
    start: string,
    end?: string,
}

type Education = {
    school: string,
    diploma: string,
    start: string,
    end?: string,
}


class ResumeData {
    name = $state("");
    phone = $state("");
    email = $state("");
    location = $state("");

    workExperience: WorkExperience[] = $state([]);

    education: Education[] = $state([]);

    projects: {
        title: string,
        description?: string,
        links?: string[]
    }[] = $state([]);

    certifications: {
        title: string,
        description?: string,
        start?: string,
        end?: string
    }[] = $state([]);

    skills: string[] = $state([]);


    constructor(useTestData: boolean = false) {
        if (useTestData)
            this.#fillTestData();
    }

    #fillTestData() {
        this.name = "John Doe";
        this.phone = "000-000-0000";
        this.email = "john.doe@gmail.com";
        this.location = "Seattle, WA";

        this.workExperience.push({
            employer: "IBM",
            title: "Data Center Specialist",
            start: "January 2023",
            end: "June 2023"
        });
        this.workExperience.push({
            employer: "Self-employed",
            title: "Frontend Developer",
            start: "June 2023"
        });

        this.education.push({
            school: "The University of Texas at Dallas",
            diploma: "B.A. Arts, Technology, and Emerging Communication",
            start: "August 2019",
            end: "December 2025"
        });

        this.projects.push({
            title: "Project 1",
            description: "Project 1 description",
            links: ["https://github.com", "https://github.com/rynstwrt"]
        });

        this.certifications.push({
            title: "Certification 1",
            description: "Certification 1 description",
            start: "Aug. 2023",
            end: "Aug. 2030"
        });

        this.skills.push("skill 1", "skill 2");
    }
}

export default ResumeData;