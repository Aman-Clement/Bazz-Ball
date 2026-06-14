const players = [
    { name: "Arun Dev", role: "Opening Batter", status: "Available"},
    { name: "Kabir Singh", role: "Fast Bowler", status: "Managed Workload"},
    { name: "Rohan Malik", role: "WicketKeeper", status: "Available"},
]

export function SquadScreen() {
   return (
        <section className="screen-stack">
            <div className="section-header">
                <p className="eyebrow">Fictional Data</p>
                <h3>Squad Snapshot</h3>
            </div>

            <div className="table-panel">
                <div className="data-row header">
                    <span>Name</span>
                    <span>Role</span>
                    <span>Status</span>
                </div>
                {players.map((player)=>(
                    <div className="data-row" key={player.name}>
                        <strong>{player.name}</strong>
                        <strong>{player.role}</strong>
                        <strong>{player.status}</strong>
                    </div>
                ))}
            </div>
        </section>
    )
}