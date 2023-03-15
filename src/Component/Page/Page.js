import React from 'react'
import PageContent from './PageContent/PageContent'
import PageTitle from './PageTitle/PageTitle'

const Page = ({products,categories = []}) => {
  return (
    <React.Fragment>
        <PageTitle length = {products?.length} />
        <PageContent key={products} products={products} categories={categories}/>
    </React.Fragment>
  )
}

export default Page