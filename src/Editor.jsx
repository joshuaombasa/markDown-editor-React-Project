import React from "react";

export default function Editor() {

    const [faultData, setfaultData] = React.useState(
        {
            faultheader: '',
            faultdecsription: ''
        }
    )

    return (
        <section className="editor--container">
            <h2 className="editor-section-header">Add Fault</h2>
            <form action="" className="fault-edit-form">
            <input
                type="text"
                className="fault--header"
                name="faultheader"
            />
            <input
                type="text"
                className="fault--decsription"
                name="faultdecsription"
            />
        </form>
        </section>
    )
}