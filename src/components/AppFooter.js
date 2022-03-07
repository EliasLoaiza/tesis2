import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://urbe.edu" target="_blank" rel="noopener noreferrer">
          URBE
        </a>
        <span className="ms-1">&copy; 2022 Copyright.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Realizado por</span>
        <a href="https://github.com/EliasLoaiza?tab=repositories" target="_blank" rel="noopener noreferrer"> {/* eslint-disable-line */}
          Elias Loaiza
        </a>
        <span className="me-1"> y</span>
        <a href="https://github.com/Samuel-Figueroa?tab=repositories" target="_blank" rel="noopener noreferrer"> {/* eslint-disable-line */}
          Samuel Figueroa
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
