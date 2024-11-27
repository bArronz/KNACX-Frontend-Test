import Admit from './component/Exam_room/admit'
import Vip from './component/Exam_room/Vip'
import Payment from './component/Payment/Payment';
import Doctor from './component/Table/Doctor';

function App() {


  return (
    <div className='p-4'>
      <Doctor/>
      <div className="flex flex-row flex-wrap justify-center gap-4 my-10">
        <Admit />
        <Vip />
        <Payment/>
      </div>
    </div>
  );
}

export default App