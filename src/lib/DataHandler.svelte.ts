export let projects: {
    name: string,
    links: string[],
    bulletpoints: string[]
}[] = $state([
    {
        name: "Project 01",
        links: ["https://example.com", "https://example.com"],
        bulletpoints: ["Bulletpoint 1", "Bulletpoint 2", "Bulletpoint 3"]
    }
]);