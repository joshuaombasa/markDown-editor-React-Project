export default function Fault(props) {
    console.log(props.notesData[0].faultdecsription)
    return (
        <section className="fault--container">
            <h3 className="fault--head">{props.notesData[0].faultheader}</h3>
            <p className="fault--desctiption">{props.notesData[0].faultdecsription}</p>
        </section>
    )
}

