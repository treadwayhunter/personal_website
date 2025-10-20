import {ComponentType} from "react";

export type TabName =
    | "Home"
    | "Myself"
    | "Aspirations"
    | "Blog"
    | "Resume";

export type TabItem = { tabName: TabName; selected: boolean; screen: ComponentType }