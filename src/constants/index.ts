export const initialValues = {
    step: 1,
    lastStep: 4,

    // Step 1
    firstName: "",
    surname: "",

    // Step 2
    gender: "",
    age: "",

    // Step 3
    job: "",
    socialLink: "",
    email: "",

    // Step 4
    location: "",
    file: null
};

export const stepMetaData = [
    {
        step: 1,
        stepDescription: "Personal Information",
    },
    {
        step: 2,
        stepDescription: "Demographic Information",
    },
    {
        step: 3,
        stepDescription: "Professional Information",
    },
    {
        step: 4,
        stepDescription: "Location and File",
    },
]