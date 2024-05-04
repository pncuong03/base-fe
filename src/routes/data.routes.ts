import HomePage from "../components/pages/Home";

import routesName from "./enum.routes";

import { AccessTypeEnum, IRouterData } from "./type.routes";

export const routesData: IRouterData[] = [
  {
    header: true,
    name: "DASHBOARD",
    component: HomePage,
    key: routesName.Home,
    path: routesName.Home,
    requirePermission: false,
    accessType: [AccessTypeEnum.PUBLIC],
  },
];
