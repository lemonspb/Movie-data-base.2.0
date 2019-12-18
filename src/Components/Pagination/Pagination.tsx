import React, { useState } from 'react'
import { Pagination } from 'semantic-ui-react'
import {  Link } from 'react-router-dom'
import './Pagination.scss'
interface PaginationInterface {
  changePage: Function,
  linkName: string,
  numberPage: number
}


const PaginationComponent = (props: PaginationInterface) => {
  const [active, setActive] = useState(1);

  const pageEvent = (event: any, data: any) => {
    setActive(data.activePage)


  }

  console.log(active)

  return (
    <>
      <Link to={`${props.linkName}?&page=${active}`} className='pagination' >
        <Pagination totalPages={500} activePage={active} onPageChange={pageEvent} onClick={() => props.changePage(active)} />
      </Link>
    </>
  )
}

export default PaginationComponent