import { Link } from 'react-router-dom'
import HomeCategories from './HomeCategories'
import HomeProductTrending from './HomeProductTrending'

const offers = [
  {
    name: 'Download the app',
    description: 'Get an exclusive ₹100 off code',
    href: '#',
  },
  {
    name: "Return when you're ready",
    description: '60 days of free returns',
    href: '#',
  },
  {
    name: 'Sign up for our newsletter',
    description: '15% off your first order',
    href: '#',
  },
]

const perks = [
  {
    name: 'Hassle-Free Returns',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Our commitment to customer satisfaction includes a hassle-free return policy. If you receive damaged products, we offer free returns, ensuring your peace of mind and a seamless shopping experience.',
  },
  {
    name: 'Instant Dispatch',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'Experience lightning-fast delivery with our one-day delivery service! Shop now and enjoy the convenience of receiving your products within hours of checkout. Get ready to enjoy your purchases without the wait!',
  },
  {
    name: 'Yearlong Savings',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description: `Discover endless savings with our exclusive code "ALLYEAR"! Unlock incredible deals at checkout and enjoy year-round discounts.  Grab the best offers today!`,
  },
  {
    name: 'Sustainable Impact',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description: `We are committed to preserve and restore the environment by pledging 1% of our sales. With every purchase, you contribute to our ongoing efforts in safeguarding our planet's precious ecosystems for future.`,
  },
]
export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      Assured Shopping
                      <p style={{ marginTop: '20px' }} className="text-4xl">
                        Buy with Confidence
                      </p>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      New products are added every week. Check back often to see
                    </p>
                    <div className="mt-6">
                      <a
                        href="/products-filters"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                        style={{ background: '#CD1818', alignItems: 'center' }}
                      >
                        All products
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-35 w-full sm:h-50 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Sale */}
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
                style={{
                  marginBottom: '40px',
                  fontFamily: 'courier',
                  fontSize: '55px',
                }}
              >
                Exclusive, Limited Stock: Act Now!
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl text-xl text-gray-600"
                style={{ fontFamily: 'sans-serif' }}
              >
                Discover exclusive limited editions. Once they're gone, they're
                gone. Don't miss out on your must-have items.
              </p>
              <a
                href="#"
                className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
                style={{ background: '#176B87', fontSize: '17px' }}
              >
                Get access to our one-time sale
              </a>
            </div>
          </section>
        </div>
      </main>
      <main>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
              style={{
                fontFamily: 'cursive',
                fontSize: '30px',
                marginBottom: '30px',
              }}
            >
              Shop by Category
            </h2>
            <Link
              to="/all-categories"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              style={{ fontSize: '20px' }}
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          {/* home categories */}
          <HomeCategories />
        </section>
        {/* Home trending trending */}
        <HomeProductTrending />

        {/* info */}
        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-36 w-auto"
                        src={perk.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3
                      className="text-base font-medium text-gray-900"
                      style={{ fontSize: '20px' }}
                    >
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
