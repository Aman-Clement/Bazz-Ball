const messages = [
    {
        from : "Board",
        subject : "Welcome to the project foundation",
        tag : "Club",
    },
    {
        from: "Analyst",
        subject: "SQLite save arch",
        tag: "planning"
    },
    {
        from: "Scout",
        subject: "Scouting reports",
        tag: "Scouting"
    }
]

export function InboxScreen() {
    return (
        <section className="screen-stack">
            <div className="section-header">
                <p className="eyebrow">Unread Items</p>
                <h3>Inbox</h3>
            </div>

            <div className="table-panel">
                {messages.map((message)=>(
                    <article className="inbox-row" key={message.subject}>
                        <span>{message.tag}</span>
                        <div>
                            <strong>{message.subject}</strong>
                            <p>{message.from}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}