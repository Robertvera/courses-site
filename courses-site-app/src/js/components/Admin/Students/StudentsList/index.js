import React from "react";

const StudentsList = (props) => {
    const students = props.students
    
    return (
              <div className="table-responsive">
              <h4>Apuntados en este curso</h4>
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Teléfono</th>
                      <th>E-mail</th>
                    </tr>
                  </thead>
                  {students ?
                    <tbody>
                      {students.map(student => {
                        return <tr key={student.documentId}>
                          <td>{student.name} {student.surname}</td>
                          <td>{student.phoneNumber}</td>
                          <td>{student.email}</td>
                        </tr>
                      })}
                    </tbody>
                    : undefined}
                </table>
              </div>
    );
  }

export default StudentsList;