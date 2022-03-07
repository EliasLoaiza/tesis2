import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Inicio',
    to: '/dashboard',
  },
  {
    component: CNavItem,
    name: 'Inciar Secion',
    to: '/login',
  },
  {
    component: CNavGroup,
    name: 'Usuario',
    to: '/Usuario',
    items: [
      {
        component: CNavItem,
        name: 'Ingresar Usuario',
        to: '/Usuario/IngresarUsuario',
      },
      {
        component: CNavItem,
        name: 'Buscar Usuario',
        to: '/Usuario/BuscarUsuario',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Empresa',
    to: '/Empresa',
    items: [
      {
        component: CNavItem,
        name: 'Ingresar Empresa',
        to: '/Empresa/IngresarEmpresa',
      },
      {
        component: CNavItem,
        name: 'Buscar Empresa',
        to: '/Empresa/BuscarEmpresa',
      },
      {
        component: CNavItem,
        name: 'Ingresar Cargo',
        to: '/Empresa/IngresarCargo',
      },
      {
        component: CNavItem,
        name: 'Buscar Cargo',
        to: '/Empresa/BuscarCargo',
      },
      {
        component: CNavItem,
        name: 'Ingresar Proceso',
        to: '/Empresa/IngresarProceso',
      },
      {
        component: CNavItem,
        name: 'Buscar Proceso',
        to: '/Empresa/BuscarProceso',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Medicamentos',
    to: '/Medicamentos',
    items: [
      {
        component: CNavItem,
        name: 'Ingresar Medicamentos',
        to: '/Medicamentos/IngresarMedicamentos',
      },
      {
        component: CNavItem,
        name: 'Buscar Medicamentos',
        to: '/Medicamentos/BuscarMedicamentos',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Lotes',
    to: '/Lotes',
    items: [
      {
        component: CNavItem,
        name: 'Ingresar Lotes',
        to: '/Lotes/IngresarLotes',
      },
      {
        component: CNavItem,
        name: 'Buscar Lotes',
        to: '/Lotes/BuscarLotes',
      },
    ],
  },
]

export default _nav
