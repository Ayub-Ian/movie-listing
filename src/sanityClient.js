import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: "tqcgft5c",
    dataset: "production",
    useCdn: true
});