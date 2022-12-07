import './SingleSelect.css';
import { useState, useEffect } from 'react';
import { QuestionTypeLabel } from '../../../helper/constant';
const SingleSelect = ({ QuestionCreation, onPublish, questionType,setSelectionType }) => {
    const [question, setquestion] = useState("");
    const [options, setOptions] = useState([""]);

    useEffect(() => {
        if (QuestionTypeLabel.single_type === questionType) {
            setOptions(prevState => {
                return [...prevState, ""];
            })
        }else{
            setOptions([""])
        }
    }, [questionType])
    const onChangeHandler = (event) => {
        setquestion(event.target.value)
    }
    const onQuestionSubmit = () => {
        if (question && (QuestionTypeLabel.single_type === questionType ? (options.length === 2 && options[0] && options[1]) :
            !options.find(ele => !ele))
        ) {
            let object = {
                question: question,
                options: options,
                type: QuestionTypeLabel.single_type === questionType ? 'radio' : 'checkbox'
            };
            QuestionCreation(object);
            setSelectionType("")
            setquestion("");
            setOptions([""]);
        }
    }

    const onChangeOption = (e, i) => {
        setOptions(prevState => {
            prevState[i] = e.target.value;
            return [...prevState];
        })
    }

    const addOption = () => {
        if (options.length >= 4 || QuestionTypeLabel.single_type === questionType) return;
        setOptions(prevState => [...prevState, ""])
    }

    const removeOption = (i) => {
        if (options.length <= 1 || QuestionTypeLabel.single_type === questionType) return;
        setOptions(prevState => prevState.filter((_, idx) => idx !== i))
    }

    return (<div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 center">
                <div className="col-auto">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">?</div>
                        </div>
                        <input type="text" value={question} onChange={onChangeHandler} className="form-control" name="question" />
                    </div>
                </div>
                { options.map((item, i) => (
                    <div className="col-auto">
                        <div className="input-group mb-2">
                            <input type="text" value={item} onChange={(e) => onChangeOption(e,i)} className="form-control" />
                            <div role='button' className="input-group-prepend" onClick={() => { addOption() }}>
                                <div className="input-group-text">+</div>
                            </div>
                            <div className="input-group-prepend">
                                <div className="input-group-text" onClick={() => { removeOption(i) }}>-</div>
                            </div>
                        </div>
                    </div>
                ))}
                {(QuestionTypeLabel.single_type === questionType || options.length >= 4) && <div className="col-auto">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-3">
                            <button type='button' className='btn btn-success' onClick={onQuestionSubmit}>Add Question</button>
                        </div>
                        <div className="col-3">
                            <button type='button' className='btn btn-success' onClick={onPublish}>Publish</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>}
            </div>
            <div className="col-3"></div>
        </div>
    </div>)
}
export default SingleSelect;