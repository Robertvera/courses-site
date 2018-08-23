import React, { Component } from "react";
import ReactDOM from "react-dom";

class Students extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <div className="btn-toolbar mb-2 mb-md-0">
      <div className="btn-group mr-2">
        <button className="btn btn-sm btn-outline-secondary">Share</button>
        <button className="btn btn-sm btn-outline-secondary">Export</button>
      </div>
      <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar" />
        This week
      </button>
    </div>
  </div>
  <h2>Students</h2>
  <div className="table-responsive">
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>E-mail</th>
          <th>DNI</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1,001</td>
          <td>Lorem</td>
          <td>ipsum</td>
          <td>dolor</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,002</td>
          <td>amet</td>
          <td>consectetur</td>
          <td>adipiscing</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>Integer</td>
          <td>nec</td>
          <td>odio</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>libero</td>
          <td>Sed</td>
          <td>cursus</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,004</td>
          <td>dapibus</td>
          <td>diam</td>
          <td>Sed</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,005</td>
          <td>Nulla</td>
          <td>quis</td>
          <td>sem</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,006</td>
          <td>nibh</td>
          <td>elementum</td>
          <td>imperdiet</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,007</td>
          <td>sagittis</td>
          <td>ipsum</td>
          <td>Praesent</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,008</td>
          <td>Fusce</td>
          <td>nec</td>
          <td>tellus</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,009</td>
          <td>augue</td>
          <td>semper</td>
          <td>porta</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,010</td>
          <td>massa</td>
          <td>Vestibulum</td>
          <td>lacinia</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,011</td>
          <td>eget</td>
          <td>nulla</td>
          <td>Class</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,012</td>
          <td>taciti</td>
          <td>sociosqu</td>
          <td>ad</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,013</td>
          <td>torquent</td>
          <td>per</td>
          <td>conubia</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,014</td>
          <td>per</td>
          <td>inceptos</td>
          <td>himenaeos</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
        <tr>
          <td>1,015</td>
          <td>sodales</td>
          <td>ligula</td>
          <td>in</td>
          <td>
          <button type="button" class="btn-sm btn-outline-danger">Borrar</button>
          <button type="button" class="btn-sm btn-outline-warning">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>



    );
  }
}
export default Students;