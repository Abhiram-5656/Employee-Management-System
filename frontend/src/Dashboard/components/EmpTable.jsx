// import React from "react";

// const EmpTable = (props) => {
//   return (
//     <div className="py-3 table-responsive">
//       <table className="table">
//         <thead>
//           <tr className="table-head">
//             <th scope="col">Name</th>
//             <th scope="col">Position</th>
//             <th scope="col">Email ID</th>
//             <th scope="col">Action</th> {/* NEW */}
//           </tr>
//         </thead>

//         <tbody>
//           {props.employee.map((emp) => {
//             return (
//               <tr key={emp.email}>
//                 <td className="fw-bold">{emp.name}</td>
//                 <td>{emp.position}</td>
//                 <td>{emp.email}</td>

//                 {/* NEW DELETE BUTTON */}
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => props.deleteEmployee(emp._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>

//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmpTable;
import React, { useContext } from "react";
import userContext from "../../context/userContext";

const EmpTable = (props) => {

  const authUser = useContext(userContext);

  return (
    <div className="py-3 table-responsive">
      <table className="table">
        <thead>
          <tr className="table-head">
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Email ID</th>

            {authUser.isSuperUser && (
              <th scope="col">Action</th>
            )}

          </tr>
        </thead>

        <tbody>
          {props.employee &&
            props.employee.map((emp) => {
              return (
                <tr key={emp._id || emp.email}>
                  <td className="fw-bold">{emp.name}</td>
                  <td>{emp.position}</td>
                  <td>{emp.email}</td>

                  {authUser.isSuperUser && (
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => props.deleteEmployee(emp._id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}

                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;