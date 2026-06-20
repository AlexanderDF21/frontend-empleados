import { useEffect, useState } from 'react'

function App() {

  const [empleados, setEmpleados] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/empleados')
      .then(response => response.json())
      .then(data => setEmpleados(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div style={{padding:'20px'}}>
      <h1>Empleados TEMPUS SAC</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Área</th>
          </tr>
        </thead>

        <tbody>
          {empleados.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nombres}</td>
              <td>{emp.apellidos}</td>
              <td>{emp.correo}</td>
              <td>{emp.area}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App