import React ,{useEffect, useState} from 'react';
export const Users =() =>
{
 const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
    setUsers(json)
   })

   },[users])

    
    return (
      <>
              <div className='container'>
                      <table class="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Username</th>
                              <th scope="col">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                          
                          {
                        users.map(obj =>
                            <tr>
                              <td>{obj.id}</td>
                              <td>{obj.name}</td>
                              <td>{obj.username}</td>
                              <td>{obj.email}</td>
                            </tr>
                          )
        }
                    </tbody>
                          
                        </table> 
              </div>
    </>
    );
}


