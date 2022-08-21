import DataTable from "../../Components/DataTable/DataTable"
import PageTitle from "../../Components/PageTitle/PageTitle"

const Users = () => {
  return (
    <>
    <PageTitle title="Users List" route="Home / Users" />
    <div className="users">
        <DataTable grid="users" />
    </div>
    </>
  )
}

export default Users