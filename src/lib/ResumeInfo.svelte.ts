class ResumeData {
    name: string = $state("");
    phone: string = $state("");
    email: string = $state("");
    location: string = $state("");

    links: string[] = $state([]);

    workExperience: {
        employer: string,
        title: string,
        description?: string,
        bulletpoints?: string[],
        start: string,
        end?: string,
    }[] = $state([]);

    education: {
        school: string,
        diploma: string,
        start: string,
        end?: string,
    }[] = $state([]);

    projects: {
        title: string,
        description?: string,
        bulletpoints?: string[],
        links?: string[]
    }[] = $state([]);

    certifications: {
        title: string,
        description?: string,
        bulletpoints?: string[],
        start?: string,
        end?: string,
        dates?: string
    }[] = $state([]);

    // skills: string[] = $state([]);
    skills: string = $state("");


    constructor(useTestData: boolean = false) {
        if (useTestData)
            this.#fillTestData();
    }

    #fillTestData() {
        this.name = "Ryn Stewart";
        this.phone = "000-000-0000";
        this.email = "john.doe@gmail.com";
        this.location = "Seattle, WA";
        this.links = ["https://rynstew.art", "https://github.com/rynstwrt"];

        this.workExperience.push({
            employer: "Self-employed",
            title: "Frontend Developer",
            start: "June 2023",
            bulletpoints: [
                "Created responsive websites and progressive web applications that are designed to look good on any device or screen size.",
                "Utilized web frameworks like React and Vue to create modular, dynamic web components.",
                "Kept compliance with web accessibility standards.",
                "Implemented best image, cache, and SEO optimization practices.",
                "Focused on web application security best practices.",
                "Designed logos and other branding materials for clients."
            ]
        });
        this.workExperience.push({
            employer: "IBM",
            title: "Data Center Specialist",
            start: "Jan. 2023",
            end: "June 2023",
            bulletpoints: [
                "Worked in one of the most active data centers in the world, IBM’s DAL13.",
                "Racked, built, cabled, configured, and provisioned Intel servers, AMD servers, and Cisco Layer 2 networking equipment.",
                "Troubleshot and quality tested server hardware.",
                "Mastered client-employee communication skills."
            ]
        });


        this.education.push({
            school: "The University of Texas at Dallas",
            diploma: "B.A. Arts, Technology, and Emerging Communication",
            start: "Aug. 2019",
            end: "Dec. 2025"
        });

        this.projects.push({
            title: "Project 1",
            description: "Project 1 description",
            bulletpoints: ["Project 1 description"],
            links: ["https://github.com", "https://github.com/rynstwrt"]
        });

        this.certifications.push({
            title: "Certification 1",
            // description: "Certification 1 description",
            bulletpoints: ["Certification 1 description"],
            // start: "Aug. 2023",
            // end: "Aug. 2030",
            dates: "Aug. 2023 - Present"
        });

        this.certifications.push({
            title: "Certification 2",
            bulletpoints: ["Certification 2 description"],
            dates: "Aug. 2023 - Present"
        });

        // this.skills.push("Node.js", "Python", "NumPY", "SciPy", "TensorFlow", "Computer Vision", "Java", "C++", "AWS", "Vercel", "SQL", "Vue", "NextJS", "React", "Pug", "HTML5", "JavaScript", "CSS3", "SASS/SCSS", "Unix/Linux", "Frontend Development", "Full-stack Development", "Vite", "Webpack", "Progressive Web App (PWA) Development", "Audio Engineering", "Music Production", "Audio Mixing and Mastering", "Ableton", "Avid ProTools", "3D Modeling", "Autodesk Maya", "Autodesk Fusion", "Blender", "OpenSCAD", "Web Design", "Web Development", "UI/UXDesign", "Graphic Design", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Trello", "Jira", "JetBrains IDEs", "Server Building and Maintenance", "Docker", "Proxmox", "Kubernetes", "Electrical Engineering", "Microcontrollers", "ESP8266", "ESP32", "Arduino", "Single Board Computers", "Browser Extension Development", "Responsive Design", "Web Scraping", "Puppeteer", "Video Game Production", "Unity", "Cybersecurity", "Pentesting", "Security Auditing", "Print Media");
        this.skills = ["Node.js", "Python", "NumPY", "SciPy", "TensorFlow", "Computer Vision", "Java", "C++", "AWS", "Vercel", "SQL", "Vue", "NextJS", "React", "Pug", "HTML5", "JavaScript", "CSS3", "SASS/SCSS", "Unix/Linux", "Frontend Development", "Full-stack Development", "Vite", "Webpack", "Progressive Web App (PWA) Development", "Audio Engineering", "Music Production", "Audio Mixing and Mastering", "Ableton", "Avid ProTools", "3D Modeling", "Autodesk Maya", "Autodesk Fusion", "Blender", "OpenSCAD", "Web Design", "Web Development", "UI/UXDesign", "Graphic Design", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Trello", "Jira", "JetBrains IDEs", "Server Building and Maintenance", "Docker", "Proxmox", "Kubernetes", "Electrical Engineering", "Microcontrollers", "ESP8266", "ESP32", "Arduino", "Single Board Computers", "Browser Extension Development", "Responsive Design", "Web Scraping", "Puppeteer", "Video Game Production", "Unity", "Cybersecurity", "Pentesting", "Security Auditing", "Print Media"].join(", ")
    }


    toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            location: this.location
        };
    }


    downloadConfig() {
        const jsonConfig = JSON.stringify(this, null, 4);

        const downloadURL = `data:text/json;charset=utf8,${encodeURIComponent(jsonConfig)}`;

        const link = document.createElement("a");
        link.href = downloadURL;
        link.download = "ResumeConfig.json";

        document.body.append(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(downloadURL);
    }


    importConfig() {
        console.log(this);
    }
}

export default ResumeData;