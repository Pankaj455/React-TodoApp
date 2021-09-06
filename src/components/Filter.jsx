import { useState, useContext } from "react"
import { FilterContext } from '../context/FilterProvider'

export default function Filter() {
    const [option, setOption] = useState("All")
    const setSelected = useContext(FilterContext)[1]

    function handleChange(e){
        setOption(e.target.value)
        setSelected(e.target.value)
    }
    return (
        <div className="filter">
            <input className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="All"
                id="inlineRadio1"
                checked={option === "All"}
                onChange={handleChange}
            />
            <label className="form-check-label font-wt" htmlFor="inlineRadio1">All</label>
            <input className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="Pending"
                id="inlineRadio2"
                checked={option === "Pending"}
                onChange={handleChange}
            />
            <label className="form-check-label font-wt" htmlFor="inlineRadio2">Pending</label>
            <input className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="Completed"
                id="inlineRadio3"
                checked={option === "Completed"}
                onChange={handleChange}
            />
            <label className="form-check-label font-wt" htmlFor="inlineRadio3">Completed</label>
        </div>
    )
}