import { createContext, useState } from "react";

export const FilterContext = createContext()

export default function FilterProvider(props){
    const [selected, setSelected] = useState("All")
    return (
        <FilterContext.Provider value={[selected, setSelected]}>
            {props.children}
        </FilterContext.Provider>
    )
}