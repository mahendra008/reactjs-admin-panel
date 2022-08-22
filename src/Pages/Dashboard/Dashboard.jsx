import "./Dashboard.scss"
import CounterWidget from "../../Components/CounterWidget/CounterWidget"
import DataTable from "../../Components/DataTable/DataTable"
import PageTitle from "../../Components/PageTitle/PageTitle"

const Dashboard = () => {

  return (
    <div className="dashboard">
      <PageTitle title="Dashboard" route="Home / Dashboard" />
      <div className="dashcard">
        <CounterWidget name='qa_submit' />
        <CounterWidget name='qa_approve' />
        <CounterWidget name='hoto_submit' />
        <CounterWidget name='hoto_approve' />
      </div>
      <DataTable grid='users' />
    </div>
  )
}
  
  export default Dashboard