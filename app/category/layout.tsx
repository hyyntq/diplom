

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import React from 'react'

const LayoutCategory = ({ children }: { readonly children: React.ReactNode }) => {
  return (
    <div className='flex flex-col container mx-auto '>
      <div className=''>
        <Breadcrumbs/>
      </div>
      <div className='py-20'>{children}</div>
    </div>
  )
}

export default LayoutCategory