export default function ShippingAddressDetails({ shippingAddress }) {
  return (
    <div className="relative">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://media.istockphoto.com/id/1206704220/vector/free-delivery-sign-free-shipping-service-icon-stock-vector.jpg?s=612x612&w=0&k=20&c=vlRaEJ9dGPtBCejEN32lAINfa7fQjsRmMMpNMWZqJl8="
          alt="shipping"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl"
            style={{ fontSize: '25px' }}
          >
            Shipping Address Details
          </p>
          <p
            className="mt-3 text-lg text-gray-600"
            style={{ fontSize: '18px', textTransform: 'capitalize' }}
          >
            Full Name: {shippingAddress?.firstName} {shippingAddress?.lastName},
          </p>
          <p
            className="mt-3 text-lg text-gray-600"
            style={{ fontSize: '18px', textTransform: 'capitalize' }}
          >
            Address: {shippingAddress?.address}
          </p>
          <p
            className="mt-3 text-lg text-gray-600"
            style={{ fontSize: '18px', textTransform: 'capitalize' }}
          >
            City: {shippingAddress?.city},
          </p>
          <p
            className="mt-3 text-lg text-gray-600"
            style={{ fontSize: '18px', textTransform: 'capitalize' }}
          >
            Country: {shippingAddress?.country},
          </p>
          <p
            className="mt-3 text-lg text-gray-600"
            style={{ fontSize: '18px', textTransform: 'capitalize' }}
          >
            Phone: {shippingAddress?.phone},
          </p>
          <p
            className="mt-3 text-lg text-gray-600"
            style={{ fontSize: '18px', textTransform: 'capitalize' }}
          >
            Postal code: {shippingAddress?.postalCode},
          </p>
        </div>
      </div>
    </div>
  )
}
