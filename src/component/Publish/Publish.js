import './Publish.css';
const Publish = ({ questionCreation, onConfirm }) => {
    console.log(questionCreation);
    return (<div>
        <div className='container'>
            {questionCreation.map((object, index) => {
                return (<div className="row" key={index}>
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                        <h1>{object.question}</h1>
                        {object.options.map((input, i) => {
                            return (<div key={i} className="form-check form-check-inline">
                                <input className="form-check-input" type={object.type} name={`option-${index}`} id="inlineRadio1" />
                                <label className="form-check-label" for="inlineRadio1">{input}</label>
                            </div>)
                        })}
                    </div>
                    <div className="col-3">
                    </div>
                </div>)
            })}
        </div>
        <div className="row">
            <div className="col-3">
            </div>
            <div className="col-6 text-right">
                <button type='button' className='btn btn-success' onClick={onConfirm}>Confirm</button>
            </div>
            <div className="col-3">
            </div>
        </div>
    </div>)
}
export default Publish;
