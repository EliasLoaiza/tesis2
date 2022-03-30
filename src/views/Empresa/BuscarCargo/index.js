import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormTextarea,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CTableDataCell,
  CTableFoot,
  CTableRow,
  CTableCaption,
} from '@coreui/react'
/**
 * @author
 * @function BuscarCargo
 **/
const BuscarCargo = (props) => {
  const [listUpdate, setlistUpdate] = useState(false)
  const [cargos, setcargos] = useState([])
  useEffect(() => {
    const getcargos = () => {
      fetch('http://localhost:9000/Cargo')
        .then((res) => res.json())
        .then((res) => setcargos(res))
    }
    getcargos()
  }, [listUpdate])
  const handleDelete = (id_cargo) => {
    const requestInit = {
      method: 'DELETE',
    }
    fetch('http://localhost:9000/Cargo/' + id_cargo, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res))
    setlistUpdate(true)
  }
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre del Cargo" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de la Empresa" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Codigo del Cargo" autoComplete="username" />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Descripcion</CFormLabel> {/*eslint-disable-line */}
                <CInputGroup className="mb-3">
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </CInputGroup>
              </CInputGroup>
            </CCol>
            <div className="d-grid">
              <CButton color="success">Buscar Cargo</CButton>
            </div>
          </CRow>
        </CForm>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Codigo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre de la Empresa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Descripcion</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {cargos.map( (cargo) => ( /* eslint-disable-line*/
              <CTableRow key={cargo.id_cargo}>
                <CTableHeaderCell scope="row">{cargo.id_cargo}</CTableHeaderCell>
                <CTableDataCell>{cargo.codigo_cargo}</CTableDataCell>
                <CTableDataCell>{cargo.nombre_cargo}</CTableDataCell>
                <CTableDataCell>{cargo.nombre_empresa}</CTableDataCell>
                <CTableDataCell>{cargo.descripcion_cargo}</CTableDataCell>
                <CButton onClick={() => handleDelete(cargo.id_cargo)} color="red">X</CButton>{ /* eslint-disable-line*/}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarCargo
