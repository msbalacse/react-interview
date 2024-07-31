import { useAppSelector } from "../hooks";

const Users = () => {

    const users = useAppSelector(state => state.users.users);

  return (
    <div>
        <h1>Users</h1>
        <p>Total : {users.length}</p>
        <section>
            {
                users.map(user => {
                    return(
                        <div key={user.id}>
                            <h1>{user.name}</h1>
                            <p>{user.age}</p>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Users;