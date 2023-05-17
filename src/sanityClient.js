import { createClient } from "@sanity/client"
const sanityClient =  createClient({
    projectId: "tqcgft5c",
    dataset: "production",
    apiVersion: '2023-05-03',
    useCdn: true
});

export default sanityClient;