// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.scss"
import { useState } from 'react'
import SymptomSearch from '../components/SymptomSearch';
import DiagnosisView from "../components/DiagnosisView";
import DiseaseTag from "../components/DiseaseTag";

function App() {

    const symptoms = [
        "itching",
        "skin rash",
        "shivering",
        "chills",
        "joint pain",
        "stomach pain",
        "acidity",
        "ulcers on tongue",
        "muscle wasting",
        "vomiting",
        "burning micturition",
        "spotting urination",
        "fatigue",
        "weight gain",
        "anxiety",
        "cold hands and feets",
        "mood swings",
        "weight loss",
        "restlessness",
        "lethargy",
        "patches in throat",
        "irregular sugar level",
        "cough",
        "high fever",
        "sunken eyes",
        "breathlessness",
        "sweating",
        "dehydration",
        "indigestion",
        "headache",
        "yellowish skin",
        "dark urine",
        "nausea",
        "loss of appetite",
        "pain behind the eyes",
        "back pain",
        "constipation",
        "abdominal pain",
        "diarrhoea",
        "mild fever",
        "yellow urine",
        "yellowing of eyes",
        "acute liver failure",
        "fluid overload",
        "swelling of stomach",
        "swelled lymph nodes",
        "malaise",
        "blurred and distorted vision",
        "phlegm",
        "throat irritation",
        "redness of eyes",
        "sinus pressure",
        "runny nose",
        "congestion",
        "chest pain",
        "weakness in limbs",
        "fast heart rate",
        "pain during bowel movements",
        "pain in anal region",
        "bloody stool",
        "irritation in anus",
        "neck pain",
        "dizziness",
        "cramps",
        "bruising",
        "obesity",
        "swollen legs",
        "swollen blood vessels",
        "puffy face and eyes",
        "enlarged thyroid",
        "brittle nails",
        "swollen extremeties",
        "excessive hunger",
        "extra marital contacts",
        "drying and tingling lips",
        "slurred speech",
        "knee pain",
        "hip joint pain",
        "muscle weakness",
        "stiff neck",
        "swelling joints",
        "movement stiffness",
        "spinning movements",
        "loss of balance",
        "unsteadiness",
        "weakness of one body side",
        "loss of smell",
        "bladder discomfort",
        "foul smell of urine",
        "continuous feel of urine",
        "passage of gases",
        "internal itching",
        "toxic look",
        "depression",
        "irritability",
        "muscle pain",
        "altered sensorium",
        "red spots over body",
        "belly pain",
        "abnormal menstruation",
        "dischromic patches",
        "watering from eyes",
        "increased appetite",
        "polyuria",
        "family history",
        "mucoid sputum",
        "rusty sputum",
        "lack of concentration",
        "visual disturbances",
        "receiving blood transfusion",
        "receiving unsterile injections",
        "coma",
        "stomach bleeding",
        "distention of abdomen",
        "history of alcohol consumption",
        "blood in sputum",
        "prominent veins on calf",
        "palpitations",
        "painful walking",
        "pus filled pimples",
        "blackheads",
        "scurring",
        "skin peeling",
        "silver like dusting",
        "small dents in nails",
        "inflammatory nails",
        "blister",
        "red sore around nose",
        "yellow crust ooze"
    ];

    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    function deleteSelectedDisease(id){
        setSelectedSymptoms(selectedSymptoms.filter((item, index) => index != id))
        console.log(id);
        
    }


    return (
        <>
            <form className="Symptoms-section">
                <h1>Symptoms</h1>

                < SymptomSearch
                    symptoms={symptoms}
                    selectedSymptoms={selectedSymptoms}
                    setSelectedSymptoms={setSelectedSymptoms}
                />

                <div className="selectedSymptoms-container">

                    <h2>Selected Symptoms</h2>
                    <div className="selectedSymptoms">

                        {selectedSymptoms.length > 0 ?
                            selectedSymptoms.map((element, index) => {
                                return (
                                    <DiseaseTag
                                        key={index}
                                        id={index}
                                        diseaseName={element}
                                        deleteSelectedDisease={deleteSelectedDisease}
                                    />
                                )

                            })
                            :
                            <h3>
                                No Symptoms Selected
                            </h3>
                        }
                    </div>

                </div>

                <button className="predict-butt" type="button">
                    PREDICT
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                    </svg>
                </button>
            </form>

            <section className="diagnosis-section">
                <h1>Diagnosis</h1>

                <DiagnosisView />
            </section>
        </>
    )
}

export default App
