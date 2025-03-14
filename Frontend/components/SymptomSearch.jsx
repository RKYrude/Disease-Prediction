import "./SymptomSearch.scss"
import { useState } from "react";

export default function SymptomSearch(props) {

    const [inputValue, setInputValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);
        setShowSuggestions(value.trim() !== ""); // Show only if input is not empty
    }

    function handleSelectSuggestion(suggestion) {
        props.setSelectedSymptoms([...props.selectedSymptoms, suggestion])
        setShowSuggestions(false); // Hide suggestions
    }

    return (
        <div className="symptomSearchbar">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => inputValue && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search..."
                className="searchbar"
            />

            {showSuggestions && (
                <div className="suggestions">
                    {props.symptoms
                        .filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((item, index) => (
                            <p key={index} onMouseDown={() => handleSelectSuggestion(item)}>
                                {item}
                            </p>
                        ))}
                </div>
            )}
        </div>
    );
}
