import { useState } from "react"

import {
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

import {
  useLanguage
} from "../context/LanguageContext"

function Collection() {

  const { language } = useLanguage()

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentImage, setCurrentImage] = useState(0)

  const products = [
    {
      id: 1,

      name:
        language === "EN"
          ? "Pashmina Milk Tea"
          : "Pashmina Milk Tea",

      category:
        language === "EN"
          ? "Pashmina Voal"
          : "Pashmina Voal",

      price: "Rp89.000",

      images: [
        "/katalog11.png",
        "/detail1.png",
        "/detail2.png",
        "/detail3.png",
      ],

      description:
        language === "EN"
          ? "Premium voal pashmina with lightweight material, elegant texture, and comfortable feel for everyday styling."
          : "Pashmina voal premium dengan material ringan, tekstur elegan, dan nyaman digunakan untuk aktivitas sehari-hari.",

      material:
        language === "EN"
          ? "Premium Voal"
          : "Voal Premium",

      size: "180 x 75 cm",

      shopee: "https://shopee.co.id/",
      tiktok: "https://www.tiktok.com/",
    },

    {
      id: 2,

      name:
        language === "EN"
          ? "Pashmina Sage Green"
          : "Pashmina Sage Green",

      category:
        language === "EN"
          ? "Pashmina Kaos"
          : "Pashmina Kaos",

      price: "Rp89.000",

      images: [
        "/katalog 2.png",
        "/detail4.png",
        "/detail5.png",
        "/detail6.png",
      ],

      description:
        language === "EN"
          ? "Soft stretch pashmina with breathable fabric and elegant natural drape."
          : "Pashmina stretch lembut dengan bahan breathable dan jatuh kain yang elegan.",

      material:
        language === "EN"
          ? "Premium Kaos"
          : "Kaos Premium",

      size: "180 x 75 cm",

      shopee: "https://shopee.co.id/",
      tiktok: "https://www.tiktok.com/",
    },

    {
      id: 3,

      name:
        language === "EN"
          ? "Pashmina Mauve"
          : "Pashmina Mauve",

      category:
        language === "EN"
          ? "Pashmina Viscose"
          : "Pashmina Viscose",

      price: "Rp89.000",

      images: [
        "/katalog3.png",
        "/detail7.png",
        "/detail8.png",
        "/detail9.png",
      ],

      description:
        language === "EN"
          ? "Elegant viscose scarf with feminine colors and luxurious flow."
          : "Pashmina viscose elegan dengan warna feminin dan tampilan mewah.",

      material:
        language === "EN"
          ? "Premium Viscose"
          : "Viscose Premium",

      size: "180 x 75 cm",

      shopee: "https://shopee.co.id/",
      tiktok: "https://www.tiktok.com/",
    },

    {
      id: 4,

      name:
        language === "EN"
          ? "Pashmina Deep Taupe"
          : "Pashmina Deep Taupe",

      category:
        language === "EN"
          ? "Pashmina Print Kaos"
          : "Pashmina Print Kaos",

      price: "Rp89.000",

      images: [
        "/katalog44.png",
        "/detail10.png",
        "/detail11.png",
        "/detail12.png",
      ],

      description:
        language === "EN"
          ? "Printed pashmina with soft premium fabric and timeless neutral aesthetic."
          : "Pashmina print dengan bahan premium lembut dan tampilan netral yang elegan.",

      material:
        language === "EN"
          ? "Premium Print Kaos"
          : "Print Kaos Premium",

      size: "180 x 75 cm",

      shopee: "https://shopee.co.id/",
      tiktok: "https://www.tiktok.com/",
    },
  ]

  const categories = [
    "All",
    "Pashmina Voal",
    "Pashmina Kaos",
    "Pashmina Viscose",
    "Pashmina Print Kaos",
  ]

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        )

  const nextImage = () => {

    setCurrentImage((prev) =>

      prev === selectedProduct.images.length - 1
        ? 0
        : prev + 1

    )

  }

  const prevImage = () => {

    setCurrentImage((prev) =>

      prev === 0
        ? selectedProduct.images.length - 1
        : prev - 1

    )

  }

  return (

    <div className="bg-[#f8f3ef] min-h-screen overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-[80px] md:text-[170px] font-serif text-[#9f6f62]/[0.03] pointer-events-none select-none whitespace-nowrap">

        NOURAFA

      </div>

      {/* HERO */}
      <section className="relative px-6 md:px-20 py-14 md:py-20 z-10">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

            NOURAFA Collection

          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#9f6f62]">

            {
              language === "EN"
                ? "Timeless Elegance"
                : "Elegansi Abadi"
            }

          </h1>

          <p className="mt-8 text-[#7c6257] text-lg leading-8 max-w-2xl mx-auto">

            {
              language === "EN"
                ? "Discover timeless pieces crafted with softness, elegance, and comfort to accompany every moment beautifully."
                : "Temukan koleksi elegan dengan kelembutan dan kenyamanan untuk menemani setiap momen indahmu."
            }

          </p>

        </div>

      </section>

      {/* FILTER */}
      <section className="relative px-6 md:px-20 z-10">

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm transition duration-300 ${
                activeCategory === category
                  ? "bg-[#9f6f62] text-white shadow-lg"
                  : "bg-white text-[#9f6f62]"
              }`}
            >

              {category}

            </button>

          ))}

        </div>

      </section>

      {/* PRODUCT */}
      <section className="relative px-6 md:px-20 pb-24 mt-5 z-10">

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="min-w-[270px] md:min-w-0 snap-center group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 hover:-translate-y-1 border border-white"
            >

              {/* IMAGE */}
              <div className="bg-[#f3ebe6] p-3">

                <div className="overflow-hidden rounded-[24px] relative">

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="
                      w-full
                      h-[360px]
                      md:h-[460px]
                      object-cover
                      object-top
                      group-hover:scale-[1.03]
                      transition
                      duration-700
                    "
                  />

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <p className="text-xs uppercase tracking-[4px] text-[#b0897b]">

                  {product.category}

                </p>

                <h2 className="mt-3 text-2xl font-serif text-[#9f6f62] leading-tight">

                  {product.name}

                </h2>

                <div className="mt-5 flex items-center justify-between">

                  <p className="text-lg text-[#7c6257] font-medium">

                    {product.price}

                  </p>

                  <button
                    onClick={() => {
                      setSelectedProduct(product)
                      setCurrentImage(0)
                    }}
                    className="px-5 py-2 rounded-full bg-[#f3e6df] hover:bg-[#9f6f62] hover:text-white text-[#9f6f62] transition duration-300"
                  >

                    {
                      language === "EN"
                        ? "View"
                        : "Lihat"
                    }

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* POPUP */}
      {selectedProduct && (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-4">

          <div className="bg-white rounded-[28px] w-full max-w-[820px] overflow-hidden relative max-h-[92vh] overflow-y-auto shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full shadow-md"
            >

              <X size={18} />

            </button>

            <div className="grid md:grid-cols-2">

              {/* IMAGE */}
              <div className="relative bg-[#f3ebe6] p-4">

                <div className="overflow-hidden rounded-[22px] relative">

                  <img
                    src={selectedProduct.images[currentImage]}
                    alt={selectedProduct.name}
                    className="
                      w-full
                      h-[330px]
                      md:h-[440px]
                      object-cover
                      object-top
                      transition
                      duration-500
                    "
                  />

                </div>

                {/* ARROW */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md"
                >

                  <ChevronLeft size={18} />

                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md"
                >

                  <ChevronRight size={18} />

                </button>

                {/* THUMB */}
                <div className="flex gap-2 mt-4 justify-center flex-wrap">

                  {selectedProduct.images.map((img, index) => (

                    <img
                      key={index}
                      src={img}
                      alt=""
                      onClick={() => setCurrentImage(index)}
                      className={`
                        w-12 h-12 rounded-xl object-cover object-top
                        cursor-pointer transition duration-300
                        ${
                          currentImage === index
                            ? "ring-2 ring-[#9f6f62] scale-105"
                            : "opacity-70"
                        }
                      `}
                    />

                  ))}

                </div>

              </div>

              {/* DETAIL */}
              <div className="p-6 md:p-7 flex flex-col justify-center">

                <p className="uppercase tracking-[4px] text-[#b0897b] text-xs">

                  {selectedProduct.category}

                </p>

                <h2 className="mt-3 text-3xl md:text-[38px] font-serif text-[#9f6f62] leading-tight">

                  {selectedProduct.name}

                </h2>

                <p className="mt-3 text-2xl text-[#7c6257] font-medium">

                  {selectedProduct.price}

                </p>

                <p className="mt-5 text-[#7c6257] leading-7 text-[14px]">

                  {selectedProduct.description}

                </p>

                {/* DETAIL */}
                <div className="mt-7 space-y-4">

                  <div className="flex items-center justify-between border-b border-[#eee] pb-3">

                    <span className="text-[#b0897b]">

                      {
                        language === "EN"
                          ? "Material"
                          : "Bahan"
                      }

                    </span>

                    <span className="text-[#7c6257] font-medium">

                      {selectedProduct.material}

                    </span>

                  </div>

                  <div className="flex items-center justify-between border-b border-[#eee] pb-3">

                    <span className="text-[#b0897b]">

                      Size

                    </span>

                    <span className="text-[#7c6257] font-medium">

                      {selectedProduct.size}

                    </span>

                  </div>

                </div>

                {/* MARKETPLACE */}
                <div className="mt-7 grid grid-cols-2 gap-3">

                  {/* SHOPEE */}
                  <a
                    href={selectedProduct.shopee}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#ee4d2d] text-white font-medium hover:scale-[1.02] transition duration-300 shadow-lg"
                  >

                    <img
                      src="/shopee.png"
                      alt="Shopee"
                      className="w-5 h-5 object-contain"
                    />

                    Shopee

                  </a>

                  {/* TIKTOK */}
                  <a
                    href={selectedProduct.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white font-medium hover:scale-[1.02] transition duration-300 shadow-lg"
                  >

                    <img
                      src="/3.png"
                      alt="TikTok"
                      className="w-5 h-5 object-contain"
                    />

                    TikTok

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  )

}

export default Collection