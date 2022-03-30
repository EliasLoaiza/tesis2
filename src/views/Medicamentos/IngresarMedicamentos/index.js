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
    nombre_medicamento: '', /* eslint-disable-line*/
    tipo_administracion_medicamento: '', /* eslint-disable-line*/
    uso_medicamento: '', /* eslint-disable-line*/
    condiciones_almacenamiento: '', /* eslint-disable-line*/
    fecha_vencimiento_medicamento: '', /* eslint-disable-line*/
    fecha_expedicion_medicamento: '', /* eslint-disable-line*/
    Id_usuario: 0, /* eslint-disable-line*/
    Id_empresa: 0, /* eslint-disable-line*/
    Id_lote: 0, /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setmedicamento({
      ...medicamento,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    medicamento.Id_empresa = parseInt(medicamento.Id_empresa, 10)
    medicamento.Id_usuario = parseInt(medicamento.Id_usuario, 10)
    medicamento.Id_lote = parseInt(medicamento.Id_lote, 10)
    if (medicamento.nombre_medicamento === '' || medicamento.tipo_administracion_medicamento === '' || medicamento.Id_usuario <= 0 || medicamento.Id_empresa <= 0){ /* eslint-disable-line*/
      alert('Los campos de Nombre, Tipo de Administracion, Codigo de Usuario y Codigo de la Empresa son Obligatorios') /* eslint-disable-line*/
      return
    }
    if(medicamento.Id_lote <= 0){ /* eslint-disable-line*/
      medicamento.Id_lote = 4 /* eslint-disable-line*/
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
      nombre_medicamento: '', /* eslint-disable-line*/
      tipo_administracion_medicamento: '', /* eslint-disable-line*/
      uso_medicamento: '', /* eslint-disable-line*/
      condiciones_almacenamiento: '', /* eslint-disable-line*/
      fecha_vencimiento_medicamento: '', /* eslint-disable-line*/
      fecha_expedicion_medicamento: '', /* eslint-disable-line*/
      Id_usuario: 0, /* eslint-disable-line*/
      Id_empresa: 0, /* eslint-disable-line*/
      Id_lote: 0, /* eslint-disable-line*/
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
                    <CFormInput id="nombre_medicamento" name="nombre_medicamento" placeholder="Nombre del Medicamento" value={medicamento.nombre_medicamento} onChange={handleChange} type="text" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="tipo_administracion_medicamento" name="tipo_administracion_medicamento"  value={medicamento.tipo_administracion_medicamento} onChange={handleChange} type="text" aria-label="Default select example"> {/*eslint-disable-line */}
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
                    <CFormInput id="Id_usuario" name="Id_usuario" placeholder="Codigo del Usuario" value={medicamento.Id_usuario} onChange={handleChange} type="number" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Id_empresa" name="Id_empresa" placeholder="Codigo de la Empresa" value={medicamento.Id_empresa} onChange={handleChange} type="numer" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="uso_medicamento" name="uso_medicamento"  value={medicamento.uso_medicamento} onChange={handleChange} type="text" aria-label="Default select example"> {/*eslint-disable-line */}
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
                    <CFormInput id="fecha_expedicion_medicamento" name="fecha_expedicion_medicamento" value={medicamento.fecha_expedicion_medicamento} onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Vencimiento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="fecha_vencimiento_medicamento" name="fecha_vencimiento_medicamento" value={medicamento.fecha_vencimiento_medicamento} onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
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
