export type ScreenId = | "dashboard" | "inbox" | "squad" | "competitions" | "settings";

export type NavItem = { id: ScreenId; label:string; eyebrow:string; title:string; summary: string};

export const navItems: NavItem[] = [
    { id: "dashboard", label: "Home", eyebrow: "Club Office", title: "Dashboard", summary: "Your future"},
    { id: "inbox", label: "Inbox", eyebrow: "Newsroom", title: "Inbox", summary: "Board updates etc"},
    { id: "squad", label: "Squad", eyebrow: "Team", title: "Squad", summary: "Your player roles"},
    { id: "competitions", label: "Competitions", eyebrow: "Calender", title: "Competitions", summary: "Domestic, Intenation cricket"},
    { id: "settings", label: "Settings", eyebrow: "Development", title: "Settings", summary: "Save Settings"},
]