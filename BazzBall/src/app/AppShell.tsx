import { ReactNode, useMemo, useState } from "react";
import { navItems, type ScreenId } from "./navigation";
import { DashBoardScreen } from "../screens/DashBoard/DashBoardScreen";
import { InboxScreen } from "../screens/Inbox/InboxScreen";
import { SquadScreen } from "../screens/Squad/SquadScreen";
import { CompetitionsScreen } from "../screens/Competitions/CompetitionsScreen";
import { SettingsScreen } from "../screens/Settings/SettingsScreen";

const screenContent: Record<ScreenId, ReactNode> = {
    dashboard : <DashBoardScreen />,
    inbox : <InboxScreen />,
    squad : <SquadScreen />,
    competitions : <CompetitionsScreen />,
    settings : <SettingsScreen />,
}


export function AppShell(){
    const [activeScreen, setActiveScreen] = useState<ScreenId>("dashboard");

    const currentScreen = useMemo(
        ()=> navItems.find((item) => item.id === activeScreen) ?? navItems[0], [activeScreen]
    )

    return(
        <main className="app-shell">
            <aside className="sidebar" aria-label="Primary navigation">
                <div className="brand">
                    <span className="brand-mark" aria-hidden="true">BM</span>
                    <div>
                        <p className="brand-kicker">Cricket Manager</p>
                        <h1>BatMoney</h1>
                    </div>
                </div>

                <nav className="nav-list">
                    {navItems.map((item)=>(
                        <button key={item.id} type="button" 
                         className={item.id===activeScreen? "nav-item active":"nav-item"} 
                         aria-content={item.id === activeScreen ? "page" : undefined}
                         onClick={()=> setActiveScreen(item.id)}> 
                            {item.label}
                        </button>
                    ))}
                </nav>
            </aside>

            <section className="workspace">
                <header className="topbar">
                    <div className="screen-heading">
                        <p>{currentScreen.eyebrow}</p>
                        <h2>{currentScreen.title}</h2>
                        <p>{currentScreen.summary}</p>
                    </div>

                    <div className="topbar-actions" aria-label="Current save status">
                        <div className="date-card">
                            <span>Game Date</span>
                            <strong>1 Jan 2027</strong>
                        </div>
                    <button type="button" className="continue-button">
                        Continue
                    </button>
                    </div>
                </header>

                {screenContent[activeScreen]}
            </section>
        </main>

    )
}