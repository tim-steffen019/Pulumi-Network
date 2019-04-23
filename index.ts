

import * as awsx from "@pulumi/awsx";

const vpc = new awsx.Network(`test-vpc`,  { usePrivateSubnets: true },);

export const vpcid = vpc.vpcId;
export const subnetid = vpc.subnetIds;



