import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OrdersStatsAction } from '../../../redux/slices/orders/ordersSlices'

export default function OrdersStats() {
  //dispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(OrdersStatsAction())
  }, [])

  // get data from store
  const { stats, loading, error } = useSelector((state) => state?.orders)
  const obj = stats?.orders
  const statistics = obj && obj.length > 0 ? Object.values(obj[0]) : []

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Today's sales */}
        <div className="relative overflow-hidden rounded-lg px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6" style={{background:'#4A55A2'}}>
          <dt>
            <div className="absolute rounded-md p-3" style={{background:'#7895CB'}}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <p className="ml-16 truncate text-gray-200" style={{fontSize:'22px',marginTop:'10px'}}>
              Today's Sales
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7" style={{marginTop:'15px'}}>
            <p className="font-semibold text-gray-200" style={{fontSize:'35px'}}>
              {stats?.saleToday?.length <= 0 ? '0' : stats?.saleToday?.length}
            </p>

            <div className="absolute inset-x-0 bottom-0  px-4 py-4 sm:px-6" style={{background:'#7895CB'}}>
              <div className="text-sm"></div>
            </div>
          </dd>
        </div>
        {/* stat 1 */}
        <div className="relative overflow-hidden rounded-lg px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6" style={{background:'#FF6666'}}>
          <dt>
            <div className="absolute rounded-md p-3" style={{background:'#FCAEAE'}}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-100" style={{fontSize:'22px',marginTop:'12px'}}>
              Minimum Order
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7" style={{marginTop:'30px'}}>
            <p className="text-2xl font-semibold text-gray-200" style={{fontSize:'35px'}}>
              ₹{statistics[1]}
            </p>

            <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-6" style={{background:'#FCAEAE'}}>
              <div className="text-sm"></div>
            </div>
          </dd>
        </div>
        {/* stat 2 */}
        <div className="relative overflow-hidden rounded-lg px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6" style={{background:'#0A6EBD'}}>
          <dt>
            <div className="absolute rounded-md p-3" style={{background:'#A1C2F1'}}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-200" style={{fontSize:'22px',marginTop:'12px'}}>
              Maximum Oder
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7" style={{marginTop:'30px'}}>
            <p className="text-2xl font-semibold text-gray-200" style={{fontSize:'35px'}}>
              ₹{statistics[3]}
            </p>

            <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-6" style={{background:'#A1C2F1'}}>
              <div className="text-sm"></div>
            </div>
          </dd>
        </div>
        {/* stat 3 */}
        <div className="relative overflow-hidden rounded-lg  px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6" style={{background:'#643843'}}>
          <dt>
            <div className="absolute rounded-md  p-3" style={{background:'#C88EA7'}}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-200" style={{fontSize:'22px',marginTop:'12px'}}>
              Total Sales
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7" style={{marginTop:'30px'}}>
            <p className="text-2xl font-semibold text-gray-100" style={{fontSize:'35px'}}>
              {' '}
              ₹{statistics[2]}
            </p>

            <div className="absolute inset-x-0 bottom-0  px-4 py-4 sm:px-6" style={{background:'#C88EA7'}}>
              <div className="text-sm"></div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  )
}
