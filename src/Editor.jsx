import React from "react";

export default function Editor() {

    const [faultData, setfaultData] = React.useState(
        {
            faultheader: '',
            faultdecsription: ''
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setfaultData((prevfaultData) => {
            return {
                ...prevfaultData,
                [name] : value
            }
        })
    }

    

    function submitForm(event) {
        event.preventDefault() 
        console.log(faultData)
    }

    return (
        <section className="editor--container">
            <h2 className="editor-section-header">Add Fault</h2>
            <form onSubmit={submitForm} className="fault-edit-form">
            <input
                type="text"
                className="fault--header"
                name="faultheader"
                onChange={handleChange}
                value={faultData.faultheader}
            />
            <textarea
                type="text"
                className="fault--decsription"
                name="faultdecsription"
                onChange={handleChange}
                value={faultData.faultdecsription}
            />
            <button className="submit-btn">Submit</button>
        </form>
        </section>
    )
}