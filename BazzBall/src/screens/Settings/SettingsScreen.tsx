const nextSteps = [
    "Replace data",
    "Add SQL",
    "create fictional World"
]

export function SettingsScreen() {
    return (
        <section className="screen-stack">
            <div className="section-header">
                <p className="eyebrow">Developer Notes</p>
                <h3>Settings</h3>
            </div>


                <article className="panel">
                    <p className="eyebrow">Next steps</p>
                    <h3>Miltestone</h3>
                    <ul>
                        {nextSteps.map((step)=>(
                            <li key={step}>{step}</li>
                        ))}
                    </ul>
                </article>
        </section>
    )
}