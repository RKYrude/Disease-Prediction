import "./styles/DiagnosisView.scss"

export default function DiagnosisView(props) {


    return (
        <div className="diagnosisType-container">
            <section className="diagnosisTypeButton">
                <button>DISEASE</button>
                <button>DESCRIPTION</button>
                <button>PRECAUTION</button>
                <button>ADVICE</button>
                <button>MEDICATION</button>
                <button>DIET</button>
            </section>

            <aside className="diagnosisDisplay">
                <h3>
                    Try Searching for Some Symptoms
                </h3>
            </aside>
        </div>
    );
}
