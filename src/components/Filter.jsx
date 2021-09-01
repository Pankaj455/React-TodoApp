import { useState } from "react"

export default function Filter() {
    const [option, setOption] = useState("All")
    return (
        <div className="filter">
            <input className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="All"
                id="inlineRadio1"
                checked={option === "All"}
                onChange={e => setOption(e.target.value)}
            />
            <label className="form-check-label font-wt" htmlFor="inlineRadio1">All</label>
            <input className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="Pending"
                id="inlineRadio2"
                checked={option === "Pending"}
                onChange={e => setOption(e.target.value)}
            />
            <label className="form-check-label font-wt" htmlFor="inlineRadio2">Pending</label>
            <input className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="Completed"
                id="inlineRadio3"
                checked={option === "Completed"}
                onChange={e => setOption(e.target.value)}
            />
            <label className="form-check-label font-wt" htmlFor="inlineRadio3">Completed</label>
        </div>
    )
}