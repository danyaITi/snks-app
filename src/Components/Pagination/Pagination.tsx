import React from "react"
import './Pagination.scss'

interface PaginationProps {
    snkPerPage: number,
    currentPage: number,
    changePage: (page:number) => void,
    totalSnk:number

}

const Pagination:React.FC<PaginationProps> = ({snkPerPage,currentPage,changePage,totalSnk}) => {
    const pageNumber:number[] = []

    for (let i = 1; i <= Math.ceil(totalSnk/snkPerPage); i++) {
        pageNumber.push(i)
    }
    
    return(
        <div className='pageNumbers'>
            {pageNumber.map((number,i)=>(
                <li key={i} onClick={()=>changePage(number)} className={currentPage === number ? 'pageNumbers-item__active'  : ''}><span>{number}</span></li>
            ))}
        </div>
    )
}
export default Pagination