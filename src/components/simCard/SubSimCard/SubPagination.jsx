import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'



const SubPagination = ({itemPerPage,list_item}) => {

    const [currentItems,setCurrentItems] = useState()
    const [pageCount,setPageCount] = useState(0)
    const [itemOffset,setItemOffset] = useState(0)
    console.log('subpagni')

    useEffect(() =>{
        const endOffset = itemOffset + itemPerPage

        setCurrentItems(list_item.slice(itemOffset,endOffset))
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setPageCount(Math.ceil(list_item.length / itemPerPage))

    },[itemOffset,itemPerPage])

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemPerPage) % list_item.length
        console.log(
            `User requested page number ${e.selected}, which is offset ${newOffset}`
          );
        setItemOffset(newOffset)
    }

    return (
    <div className='sub-pagination'>

        {/* <ListPhoneNumberSim list_number_sim={currentItems} />    */}

        <div className="pagination">

        <ReactPaginate 
            breakLabel='...'
            nextLabel='>>'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='<<'
            renderOnZeroPageCount={null}
            // initialPage={1}
            
            />
        </div>
    </div>
  )
}

export default SubPagination
