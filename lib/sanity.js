import sanityClient from "@sanity/client";

const SANITY_PROJECT_ID = "425c1z7l";
const SANITY_TOKEN =
  "skHw6eDOJJMjCgyW5DtbTGM18lduOPGeDITh3hU4I1Dqq57RrkrKRKULW7dgb2vgy1BRSDuTreQwGdykEqNvu3VyvvFib1xBbIOEIgpIpcxaeQbqWDOM4PO2tWgdtGEPTZeOeP6jwrp3pYS4UCwQ6bjIVr7MoetQhedFPnjDNklYSlneGqUT";
export const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  token: SANITY_TOKEN,
  useCdn: false,
});
