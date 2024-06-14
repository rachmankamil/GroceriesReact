import React, { useEffect, useState } from "react"
import "../assets/groceries.css"

function GroceriesPage() {

    const [items, setItems] = useState([])
    const [countItem, setCountItem] = useState(0)
    const [inputText, setInputText] = useState("")
    const [errorInput, setErrorInput] = useState("")

    let handleInputChange = function(e) {
        setInputText(e.target.value)
        setErrorInput("")
    }
    let handleButtonClick = () => {
        if (inputText != "") {
            let new_array = items.slice()
            new_array.push(inputText)
            setCountItem(new_array.length-(items.length-countItem))
            setItems(new_array)
            setInputText("")
        } else {
            setErrorInput("Tolong di isi terlebih dahulu")
        }
    }
    let handleInputCheck = (e) => {
        if (e.target.checked) {
            setCountItem(countItem - 1)
        } else {
            setCountItem(countItem + 1)
        }
    }

    useEffect(()=>{
        document.title = `Groceries ${countItem} items`
    }, [items])

    return (
        <div>
            <h1>Groceries List : {countItem} items</h1>
                {items.map((item, index) => (
                    <div key={index}>
                    <input className="strikethough" type="checkbox" id={`check${index}`} onClick={handleInputCheck} value={index}/>
                    <label htmlFor={`check${index}`}>{item}</label>
                    </div>
                ))}
            <form>
                <input type="text" value={inputText} onChange={handleInputChange}/>
                <label id="validate">{errorInput}</label>
                <input type="button" value="Add Item" onClick={handleButtonClick}/>
            </form>
        </div>
    )
}

export default GroceriesPage