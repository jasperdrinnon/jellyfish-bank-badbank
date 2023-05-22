import Table from 'react-bootstrap/Table';

function AllData(){
  const ctx = React.useContext(UserContext);
  const len = ctx.users.length;

  return (
    <table className="table table-info table-striped">
      <thead>
        <tr><th scope="col">BANK USERS</th></tr>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {ctx.users.map((user, i) => (
            <TableRow key={i} 
                      name={ctx.users[i].name} 
                      email={ctx.users[i].email} 
                      password={ctx.users[i].password} 
                      balance={ctx.users[i].balance}/>
          ))}
      </tbody>
    </table>
  );
}
