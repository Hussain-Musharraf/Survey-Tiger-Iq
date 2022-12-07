import './QuestionType.css';

const QuestionType = ({questionType,selectedQuestionType, getSelectionType}) => {
  return (
    <div className='row'>
        <div className='col-4'></div>
        <div className='col-4 text-center'>
           <form>
                <div className="form-group">
                    <label>Select Question Type</label>
                    <select className="form-control" id="questionType" value={getSelectionType} onChange={(event)=>selectedQuestionType(event.target.value)} >
                        {questionType.map((data,index)=>{
                            return <option key={index} value={data === "Select Question Type" ? "" : data}>{data}</option>
                        })}
                    </select>
                </div>
            </form>
        </div>
        <div className='col-4'></div>
    </div>
  )
}

export default QuestionType
