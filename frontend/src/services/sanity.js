import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId: "r2b9v296",
    dataset: "production",
    apiVersion: "2022-02-16",
});