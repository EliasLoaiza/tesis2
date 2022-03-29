import React, { useState } from 'react'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
/**
 * @author
 * @function IngresarMedicamentos
 **/
const IngresarMedicamentos = (props) => {
  const [medicamento, setmedicamento] = useState({
    nombre: '', /* eslint-disable-line*/
    tipo_administracion: '', /* eslint-disable-line*/
    uso: '', /* eslint-disable-line*/
    condiciones_almacenamiento: '', /* eslint-disable-line*/
    fecha_vencimiento: '', /* eslint-disable-line*/
    fecha_expedicion: '', /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setmedicamento({
      ...medicamento,
      [e.target.name]: e.target.value,
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const handleSubmit = () => {
    if (medicamento.nombre === '' || medicamento.tipo_administracion === ''){ /* eslint-disable-line*/
      alert('Los campos de Nombre y Tipo de Administracion son Obligatorios')
      return
    }
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(medicamento),
    }
    fetch('http://localhost:9000/Medicamento', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res))
    setmedicamento({
      nombre: '', /* eslint-disable-line*/
      tipo_administracion: '', /* eslint-disable-line*/
      uso: '', /* eslint-disable-line*/
      condiciones_almacenamiento: '', /* eslint-disable-line*/
      fecha_vencimiento: '', /* eslint-disable-line*/
      fecha_expedicion: '', /* eslint-disable-line*/
    })
  }
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <CInputGroup className="mb-3">
                    <CFormInput id="nombre" name="nombre" placeholder="Nombre del Medicamento" value={medicamento.nombre} onChange={handleChange} type="text" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="tipo_administracion" name="tipo_administracion"  value={medicamento.tipo_administracion} onChange={handleChange} type="text" aria-label="Default select example"> {/*eslint-disable-line */}
                      <option>Selecciona el Tipo de Administracion</option>
                      <option value="Oral">Oral</option>
                      <option value="Sublingual">Sublingual</option>
                      <option value="Intravenosa">Intravenosa</option>
                      <option value="Intraarterial">Intraarterial</option>
                      <option value="Intramuscular">Intramuscular</option>
                      <option value="Subcutanea">Subcutanea</option>
                      <option value="Inhalada">Inhalada</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="uso" name="uso"  value={medicamento.uso} onChange={handleChange} type="text" aria-label="Default select example"> {/*eslint-disable-line */}
                      <option>Selecciona el Uso</option>
                      <option value="Analgésicos y antiinflamatorios">Analgésicos y antiinflamatorios</option> {/*eslint-disable-line */}
                      <option value="Antiinfecciosos">Antiinfecciosos</option>
                      <option value="Mucolíticos y antitusivos">Mucolíticos y antitusivos</option>
                      <option value="Antiulcerosos y antiácidos">Antiulcerosos y antiácidos</option>
                      <option value="Antidiarreicos y laxantes">Antidiarreicos y laxantes</option>
                      <option value="Antipiréticos">Antipiréticos</option>
                      <option value="Antialérgicos">Antialérgicos</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Condciones de Almacenamiento</CFormLabel> {/*eslint-disable-line */}
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="condiciones_almacenamiento" name="condiciones_almacenamiento"  value={medicamento.condiciones_almacenamiento} onChange={handleChange} type="text" rows="3"></CFormTextarea> {/*eslint-disable-line */}
                    </CInputGroup>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Expedicion</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="fecha_expedicion" name="fecha_expedicion" value={medicamento.fecha_expedicion} onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Vencimiento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="fecha_vencimiento" name="fecha_vencimiento" value={medicamento.fecha_vencimiento} onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">Ingresar Medicamentos</CButton> {/* eslint-disable-line*/}
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default IngresarMedicamentos
