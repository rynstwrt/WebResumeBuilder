import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonStandingIcon, GraduationCapIcon, SheetIcon } from "lucide-react"


export default function InputForm() {
    return (
        <Tabs defaultValue="about" orientation={"vertical"} className="w-100">
            <TabsList>
                <TabsTrigger value="about"><PersonStandingIcon />About</TabsTrigger>
                <TabsTrigger value="education"><GraduationCapIcon />Education</TabsTrigger>
                <TabsTrigger value="experience"><SheetIcon />Experience</TabsTrigger>
                <TabsTrigger value="projects"><SheetIcon />Projects</TabsTrigger>
                <TabsTrigger value="certs"><SheetIcon />Certifications</TabsTrigger>
                <TabsTrigger value="skills"><SheetIcon />Skills</TabsTrigger>
                <TabsTrigger value="links"><SheetIcon />Links</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
                <p>info</p>
            </TabsContent>

            <TabsContent value="education">
                Education goes here
            </TabsContent>

            <TabsContent value="experience">
                Experience goes here
            </TabsContent>

            <TabsContent value="projects">
                Projects go here
            </TabsContent>

            <TabsContent value="certs">
                Certs go here
            </TabsContent>

            <TabsContent value="skills">
                Skills go here
            </TabsContent>

            <TabsContent value={"links"}>
                Links go here
            </TabsContent>

        </Tabs>
    );
}
