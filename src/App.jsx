import Header from "./component/Header"
import Entry from "./component/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                date={entry.date}
                description={entry.description
                }
            />
        )
    })
    
    return (
        <>
            <Header />
            {entryElements}
            {/* <main className="container">
            </main> */}
        </>
    )
}