interface IProfileData {
    name: string,
    location: string,
    phone: string,
    email: string,
    links: string[]
}

let profileData: IProfileData = $state({
    name: "",
    location: "",
    phone: "",
    email: "",
    links: []
});

export {
    profileData
};