import { useState } from "react";
import "./styles/DiagnosisView.scss"

export default function DiagnosisView(props) {

    const [bgClr, setBgColr] = useState('white');
    const [previousClickedButton, setPreviousClickedButton] = useState(null);
    const [diagnosisTexts, setDiagnosisTexts] = useState('Try Searching for Some Symptoms')

    function handleClick(event) {
        if (event.target.tagName == 'BUTTON' && props.diseaseData.predicted_disease != '') {

            const clickedButton = event.target;
            let clickedButtonText = clickedButton.innerText;


            if (previousClickedButton != null) {
                previousClickedButton.style.transform = 'translateX(0px)';
                previousClickedButton.style.justifyContent = 'left'
            }

            switch (clickedButtonText) {
                case 'DISEASE':
                    setDiagnosisTexts(props.diseaseData.predicted_disease);
                    break;

                case 'DESCRIPTION':
                    setDiagnosisTexts(props.diseaseData.description);
                    break;

                case 'PRECAUTION':
                    // setDiagnosisTexts(<h1>props.diseaseData.precaution</h1>);
                    setDiagnosisTexts(
                        <ul>
                            {props.diseaseData.precaution.map((item, index) => (
                                <li key={index}>
                                    {item}.
                                </li>
                            ))}
                        </ul>
                    );
                    break;

                case 'ADVICE':
                    setDiagnosisTexts(props.diseaseData.advice);
                    break;

                case 'MEDICATION':
                    setDiagnosisTexts(props.diseaseData.medication);
                    break;

                case 'DIET':
                    setDiagnosisTexts(props.diseaseData.diet);
                    break;

            }

            setPreviousClickedButton(clickedButton);

            const buttonColor = window.getComputedStyle(clickedButton).backgroundColor;
            clickedButton.style.transform = 'translateX(14px)';
            clickedButton.style.justifyContent = 'right'

            setBgColr(buttonColor)

            console.log(diagnosisTexts);


        }
    }


    return (
        <div className="diagnosisType-container">
            <section className="diagnosisTypeButton" onClick={handleClick}>
                <button ref={props.buttonRef}>DISEASE</button>
                <button>DESCRIPTION</button>
                <button>PRECAUTION</button>
                <button>ADVICE</button>
                <button>MEDICATION</button>
                <button>DIET</button>
            </section>

            <aside
                className="diagnosisDisplay"
                style={{ backgroundColor: bgClr }}
            >
                <h3>
                    {diagnosisTexts}
                </h3>

            </aside>
        </div>
    );
}


