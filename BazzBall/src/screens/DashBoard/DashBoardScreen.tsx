const dashboardCards = [
    {
        title: "Next Match",
        value: "No fixture scheduled",
        note: "Fixture generation starts in a later milestone"
    },
    {
        title: "Inbox",
        value: "3 unread",
        note: "Mocked alerts for the navigation-shell checkpoint"
    },
    {
        title: "Board Confidence",
        value: "Stable",
        note: "Board systems arrive after finances and expectations exist."
    },
    {
        title: "Squad Status",
        value: "Pre-season",
        note: "Training, Fatigue and injuries are intentionally not wired yet."
    },
];


export function DashBoardScreen() {
   return (
        <section className="screen-stack">
            <div className="section-header">
                <p className="eyebrow">Milestone</p>
                <h3>Management Overview</h3>
            </div>

            <div className="metric-grid">
                {dashboardCards.map((card)=>(
                    <article className="metric-card" key={card.title}>
                        <p>{card.title}</p>
                        <strong>{card.value}</strong>
                        <strong>{card.note}</strong>
                    </article>
                ))}
            </div>

            <article className="panel">
                <p className="eyebrow">Current Build Rule</p>
                <h3>Foundation Before Features</h3>
                <p>
                    This screen is intentionally mocked.
                </p>
            </article>
        </section>
    )
}