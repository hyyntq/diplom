

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import React from 'react'

const LayoutCategory = ({ children }: { readonly children: React.ReactNode }) => {
  return (
    <div className='flex flex-col container mx-auto gap-40'>
      <div>
        <Breadcrumbs/>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default LayoutCategory