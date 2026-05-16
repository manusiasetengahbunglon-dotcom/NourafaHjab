function Collection() {

  const products = [
  {
    id: 1,
    name: "Pashmina Milk Tea",
    category: "Pashmina",
    price: "Rp89.000",
    image: "/katalog11.png",
  },

  {
    id: 2,
    name: "Pashmina Sage Green",
    category: "Pashmina",
    price: "Rp89.000",
    image: "/katalog 2.png",
  },

  {
    id: 3,
    name: "Pashmina Mauve",
    category: "Pashmina",
    price: "Rp89.000",
    image: "/katalog3.png",
  },

  {
    id: 4,
    name: "Pashmina Deep Taupe",
    category: "Pashmina",
    price: "Rp89.000",
    image: "/katalog44.png",
  },

  {
    id: 5,
    name: "Pashmina Ivory Cream",
    category: "Pashmina",
    price: "Rp89.000",
    image: "/katalog 2.png",
  },

  {
    id: 6,
    name: "Pashmina Dusty Rose",
    category: "Pashmina",
    price: "Rp89.000",
    image: "/katalog3.png",
  },
]

  return (
    <div className="bg-[#f8f3ef] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-20 py-16 md:py-24">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

            NOURAFA Collection

          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#9f6f62]">

            Timeless Elegance

          </h1>

          <p className="mt-8 text-[#7c6257] text-lg leading-8 max-w-2xl mx-auto">

            Discover timeless pieces crafted with softness,
            elegance, and comfort to accompany every moment beautifully.

          </p>

        </div>

      </section>

      {/* PRODUCT GRID */}
      <section className="px-6 md:px-20 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-white rounded-[35px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}
              <div className="overflow-hidden bg-[#f3ebe6]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[520px] object-cover group-hover:scale-[1.03] transition duration-700"
                />

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <p className="text-sm uppercase tracking-[4px] text-[#b0897b]">

                  {product.category}

                </p>

                <h2 className="mt-3 text-3xl font-serif text-[#9f6f62]">

                  {product.name}

                </h2>

                <div className="mt-6 flex items-center justify-between">

                  <p className="text-lg text-[#7c6257] font-medium">

                    {product.price}

                  </p>

                  <button className="px-5 py-2 rounded-full bg-[#f3e6df] hover:bg-[#a97868] hover:text-white text-[#9f6f62] transition duration-300">

                    View

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}

export default Collection