import Header from "./component/Header"
import Entry from "./component/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
            key={entry.id}
            {...entry}

        
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