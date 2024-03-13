import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductsAction } from '../../redux/slices/products/productSlices'
import baseURL from '../../utils/baseURL'

const HomeProductTrending = () => {
  //build up url
  let productUrl = `${baseURL}/products`
  //dispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      fetchProductsAction({
        url: productUrl,
      })
    )
  }, [dispatch])
  //get data from store
  const {
    products: { products },
    error,
    loading,
  } = useSelector((state) => state?.products)
  console.log(products)
  const trendingProducts = []
  return (
    <>
      <section aria-labelledby="trending-heading">
        <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
          <div className="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
              style={{ fontFamily: 'cursive', fontSize: '35px' }}
            >
              Trending Products
            </h2>
            <a
              href="/products-filters"
              className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
              style={{ fontSize: '20px' }}
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10  sm:grid-cols-3">
            {products?.slice(0, 6).map((product) => (
              <Link
                to={`/products/${product._id}`}
                key={product.id}
                className="group relative"
                style={{ margin: '20px' }}
              >
                <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.images[0]}
                    alt={product.images[0]}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3
                  className="mt-4 text-sm text-gray-700"
                  style={{
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    fontSize: '20px',
                  }}
                >
                  <span className="absolute inset-0" />
                  {product.name}
                </h3>
                <p
                  className="mt-1 text-sm font-medium text-gray-900"
                  style={{ textAlign: 'right', fontSize: '15px' }}
                >
                  ₹{product.price}.00
                </p>
                <p
                  className="mt-1 text-sm text-gray-500"
                  style={{ fontSize: '15px' }}
                >
                  {product.description.substring(0, 200) + '  ... '}
                  <span style={{ color: 'green' }}>
                    Click here for more info
                  </span>
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeProductTrending
