import { useState, useEffect } from 'react';
import './App.css';
import QuestionType from './component/QuestionType/QuestionType';
import { singleQuestionType, multiQuestionType } from './helper/FormObject';
import SingleSelect from './component/custom/SingleSelect/SingleSelect';
import MultiSelect from './component/custom/MultiSelect/MultiSelect';
import { QuestionTypeLabel } from './helper/constant';
import Publish from './component/Publish/Publish';

function App() {
  const [getQuestionType, setQuestionType] = useState([]);
  const [status, setStatus] = useState("");
  const [questionCreation, setQuestionCreation] = useState([]);
  const [getSelectionType, setSelectionType] = useState('');

  useEffect(() => {
    console.log(questionCreation);
  }, [questionCreation]);

  const createSurvey = () => {
    setStatus("survey");
    setQuestionType(['Select Question Type', 'multi-select', 'single-select']);
  }

  const selectedQuestionType = (inputType) => {
    console.log(inputType);
    if (inputType === 'single-select') {
      setSelectionType('single-select');
    }
    if (inputType === 'multi-select') {
      setSelectionType('multi-select');
    }
  }
  const QuestionCreation = (object) => {
    console.log("app.js line 35", object);
    setQuestionCreation([...questionCreation, object]);
  }

  const onPublish = () => {
    setStatus("published");
  }

  const onConfirm = () => {
    setStatus("");
    setQuestionCreation([])
    setSelectionType("")
    setQuestionType([])
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center'>Survey Tiger</h2>
        </div>
      </div>

      {!status && <div className='row'>
        <div className='col-4'></div>
        <div className='col-4 position-center'>
          <div className='button-box'>
            <button type="button" onClick={createSurvey} className="btn btn-danger">Create Survey</button>
          </div>
          <div className='button-box'>
            <button type="button" className="btn btn-danger">Take Survey</button>
          </div>
        </div>
        <div className='col-4'></div>
      </div>}

      {status === "survey" && <div className='row'>
        <div className='col-12 position-center'>
          <QuestionType questionType={getQuestionType} selectedQuestionType={selectedQuestionType} getSelectionType={getSelectionType} />
        </div>
      </div>}
      {status === "survey" && (getSelectionType === 'multi-select' || getSelectionType === 'single-select') && <SingleSelect questionType={getSelectionType} QuestionCreation={QuestionCreation} onPublish={onPublish} setSelectionType={setSelectionType} />}
      {status === "published" && <Publish questionCreation={questionCreation} onConfirm={onConfirm} />}
    </div>
  );
}

export default App;
