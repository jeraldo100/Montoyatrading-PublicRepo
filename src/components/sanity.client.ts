import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
    projectId: process.env.PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-10-28",
    useCdn: false,
};

const client = createClient(config);

export default client;