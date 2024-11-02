import React from 'react'



interface FilterProps {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
  setIsActive: React.Dispatch<React.SetStateAction<string>>

}
export const FormFilter: React.FC<FilterProps> = () => {
  
  return (
    <div className='flex flex-col mb-5'>
      <form className='flex flex-nowrap gap-5 items-center'>
       
      </form>
    </div>
  )
}
