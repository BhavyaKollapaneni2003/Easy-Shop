import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
        {products?.map((product) => (
          <>
            {/* new */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <div className="relative bg-gray-50">
                <Link
                  className="block"
                  to={{
                    pathname: `/products/${product?.id}`,
                    // state: {
                    //   product: product,
                    // },
                  }}
                >
                  <img
                    className="w-full h-64 object-cover"
                    src={product?.images[0]}
                    alt
                    style={{maxHeight:'60%',maxWidth:'60%',marginLeft:'20%'}}
                  />
                </Link>
                <div className="px-6 pb-6 mt-8">
                  <a
                    className="block px-6 mb-2"
                    href={`/products/${product?.id}`}
                  >
                    <h3
                      className="mb-2 text-xl font-bold font-heading"
                      style={{
                        textAlign: 'center',
                        textTransform: 'capitalize',
                      }}
                    >
                      {product?.name}
                    </h3>
                    <p
                      className="text-lg font-bold font-heading text-blue-500"
                      style={{ textAlign: 'center' }}
                    >
                      <span>₹{product?.price}</span>
                    </p>
                    <p>{product?.description?.substring(0, 130) + '   ....'}</p>
                    {/* <p 
                      style={{
                        textAlign: 'right',
                        color: '#116D6E',
                        marginTop: '12px',
                      }}
                    >
                      Click here for more info
                    </p> */}
                    <div style={{ textAlign: 'right', marginTop: '15px' }}>
                      <button
                        style={{
                          background: '#CD1818',
                          color: 'white',
                          padding: '4px 7px',
                          borderRadius: '5px',
                        }}
                      >
                        More Details
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Products
