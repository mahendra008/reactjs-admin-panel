import "./Dashboard.scss"
import CounterWidget from "../../Components/CounterWidget/CounterWidget"

const Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="title">
          <h1>Dashboard</h1>
          <span>
            Home / Dashboard
          </span>
        </div>
        
        <div className="dashcard">
          <CounterWidget name='qa_submit' />
          <CounterWidget name='qa_approve' />
          <CounterWidget name='hoto_submit' />
          <CounterWidget name='hoto_approve' />
        </div>
      </div>
    )
  }
  
  export default Dashboard