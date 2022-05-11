import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../components/CustomComponents/Pagination'
import TopBanner from '../../components/CustomComponents/TopBanner'
import withBaseLayout from '../../components/Layout/BaseLayout'
import ProductList from '../../components/Shop/ProductList'
import { addCategoryData } from '../../redux/actions/categoryActions'
import { callApi } from '../../utils/callApi'

const Shop = (props) => {
  const dispatch = useDispatch()
  const { categoryData, categorySlug } = props

  const allCategories = useSelector((state) => state.categoryState.categories)

  const allProducts = useSelector((state) => state.productListState.allProducts)
  const allCategoriesData = useSelector(
    (state) => state.categoryState.categoriesData,
  )

  useEffect(() => {
    if (categorySlug !== 'all') dispatch(addCategoryData(categoryData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySlug])
  console.log('allCategories', allCategories)

  return (
    <div>
      <TopBanner title="Collection" subtitle="Product" />
      <section className="ftco-section-4 bg-light">
        <div className="container-fluid">
          <div className="mb-5">
            <Link href={`/shop/all`} passHref>
              <h5
                className={`d-inline-block mr-4 ${
                  categorySlug === 'all' ? 'text-dark' : 'text-secondary'
                }`}
              >
                All
              </h5>
            </Link>

            {allCategories
              .filter((_category) => _category.products.length >= 1)
              .map((_category) => (
                <Link
                  key={_category.name}
                  href={`/shop/${_category.slug}`}
                  passHref
                >
                  <h5
                    className={`d-inline-block mr-4 ${
                      categorySlug === _category.slug
                        ? 'text-dark'
                        : 'text-secondary'
                    }`}
                  >
                    {_category.name}
                  </h5>
                </Link>
              ))}
          </div>
          <ProductList
            products={
              categorySlug === 'all'
                ? allProducts
                : allCategoriesData[categorySlug]?.products || []
            }
          />
          {/* <Pagination /> */}
        </div>
      </section>
    </div>
  )
}
export async function getStaticPaths() {
  const categoryResponse = await callApi({
    url: `/category/all`,
  })
  const paths = categoryResponse?.data?.data.map((cate) => `/shop/${cate.name}`)
  paths.unshift(`/shop/all`)
  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const categorySlug = context.params.category

  if (categorySlug !== 'all') {
    const response = await callApi({
      url: `/category/slug?slug=${categorySlug}`,
    })

    console.log('log call', categorySlug, response?.data?.data?.products.length)

    return {
      props: {
        categoryData: response?.data?.success ? response?.data?.data : [],
        categorySlug: categorySlug,
      },
    }
  }

  return {
    props: {
      categoryData: [],
      categorySlug: 'all',
    },
  }
}

export default withBaseLayout(Shop)
