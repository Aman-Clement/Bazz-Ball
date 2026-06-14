const competitions = [
    {
        name: "Western Shield",
        format: "First-Class",
        status: "Draft competition model"
    },
    {
        name: "Metro Premier League",
        format: "T20",
        status: "Future franchise testbed"
    },
    {
        name: "Continental Trophy",
        format: "ODI",
        status: "International placeholder"
    },
];

export function CompetitionsScreen() {
    return (
        <section className="screen-stack">
            <div className="section-header">
                <p className="eyebrow">World Calender</p>
                <h3>Competitions</h3>
            </div>

            <div className="table-panel">
                <div className="data-row header">
                    <span>Competitions</span>
                    <span>Format</span>
                    <span>Status</span>
                </div>
                {competitions.map((competitions)=>(
                    <div className="data-row" key={competitions.name}>
                        <strong>{competitions.name}</strong>
                        <strong>{competitions.format}</strong>
                        <strong>{competitions.status}</strong>
                    </div>
                ))}
            </div>
        </section>
    )
}