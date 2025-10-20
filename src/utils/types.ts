export type TabName =
    | "Home"
    | "Myself"
    | "Aspirations"
    | "Blog"
    | "Resume";

export type TabItem = { name: TabName; selected: boolean}