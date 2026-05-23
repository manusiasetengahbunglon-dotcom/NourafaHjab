import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Leaf,
  Feather,
  Heart,
} from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

function Collection() {
  const { language } = useLanguage()

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentImage, setCurrentImage] = useState(0)

  const products = [
    {
      id: 1,
      name: "Pashmina Milk Tea",
      category: "Pashmina Voal",
      price: "Rp89.000",
      images: ["/katalog11.png", "/detail1.png", "/detail2.png", "/detail3.png"],
      description:
        language === "EN"
          ? "Premium voal pashmina with lightweight material, elegant texture, and comfortable feel for everyday styling."
          : "Pashmina voal premium dengan material ringan, tekstur elegan, dan nyaman digunakan untuk aktivitas sehari-hari.",
      material: language === "EN" ? "Premium Voal" : "Voal Premium",
      size: "180 x 75 cm",
      shopee: "https://shopee.co.id/",
      tiktok: "https://www.tiktok.com/",
    },
    {
      id: 2,
      name: "Pashmina Sage Green",
      category: "Pashmina Kaos",
      price: "Rp89.000",
      images: ["/katalog 2.png", "/detail4.png", "/detail5.png", "/detail6.png"],
      description:
        language === "EN"
          ? "Soft stretch pashmina with breathable fabric and elegant natural drape."
          : "Pashmina stretch lembut dengan bahan breathable dan jatuh kain yang elegan.",
      material: language === "EN" ? "Premium Kaos" : "Kaos Premium",
      size: "180 x 75 cm",
      shopee: "https://shopee.co.id/",
      tiktok: "https://www.tiktok.com/",
    },
    {
      id: 3,
      name: "Pashmina Mauve",
      category: "Pashmina Viscose",
      price: "Rp89.000",
      images: ["/katalog3.png", "/detail7.png", "/detail8.png", "/detail9.png"],
      description:
        language === "EN"
          ? "Elegant viscose scarf with feminine colors and luxurious flow."
          : "Pashmina viscose elegan dengan warna feminin dan tampilan mewah.",
      material: language === "EN" ? "Premium Viscose" : "Viscose Premium",
      size: "180 x 75 cm",
      shopee: "https://shopee.co.id/",
      tiktok: "https://www.tiktok.com/",
    },
    {
      id: 4,
      name: "Pashmina Deep Taupe",
      category: "Pashmina Print Kaos",
      price: "Rp89.000",
      images: ["/katalog44.png", "/detail10.png", "/detail11.png", "/detail12.png"],
      description:
        language === "EN"
          ? "Printed pashmina with soft premium fabric and timeless neutral aesthetic."
          : "Pashmina print dengan bahan premium lembut dan tampilan netral yang elegan.",
      material: language === "EN" ? "Premium Print Kaos" : "Print Kaos Premium",
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
      : products.filter((product) => product.category === activeCategory)

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f3ef]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf7] via-[#f7eee9] to-[#eadbd3]" />
      <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-[#dcc0b5] opacity-35 blur-[150px]" />
      <div className="absolute right-[-180px] top-[220px] h-[560px] w-[560px] rounded-full bg-[#caa99d] opacity-25 blur-[160px]" />

      {/* HERO */}
      <section className="relative z-10 px-6 pt-28 md:px-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            mx-auto grid max-w-7xl items-center overflow-hidden
            rounded-[44px] border border-white/70
            bg-[#f7eee9]
            shadow-[0_30px_90px_rgba(80,45,35,0.08)]
            md:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-20 p-8 text-center md:p-12 md:text-left">
            <p className="text-[11px] font-medium uppercase tracking-[7px] text-[#b0897b]">
              NOURAFA Collection
            </p>

            <h1 className="mt-7 font-serif text-[46px] leading-[0.95] tracking-[-2px] text-[#9f6f62] md:text-[74px]">
              Beauty
              <br />
              in Simplicity
            </h1>

            <div className="mx-auto mt-5 h-[1px] w-full max-w-[280px] bg-[#b0897b]/35 md:mx-0" />

            <p className="mx-auto mt-7 max-w-xl text-[16px] leading-8 text-[#7c6257] md:mx-0 md:text-lg">
              {language === "EN"
                ? "Soft elegance for modest daily wear. Timeless beauty for every moment."
                : "Elegansi lembut untuk tampilan modest sehari-hari. Keindahan timeless untuk setiap momen."}
            </p>

            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/85 px-6 py-3 text-sm text-[#9f6f62] shadow-sm">
                <Leaf size={16} />
                Premium Hijab
              </span>

              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/85 px-6 py-3 text-sm text-[#9f6f62] shadow-sm">
                <Feather size={16} />
                Soft & Light
              </span>

              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/85 px-6 py-3 text-sm text-[#9f6f62] shadow-sm">
                <Heart size={16} />
                Daily Elegant
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex h-[430px] items-center justify-center p-6 md:h-[530px] md:p-10">
            <div
              className="
                relative h-full w-full overflow-hidden
                rounded-[36px]
                border border-white/80
                bg-white/40
                p-3
                shadow-[0_25px_70px_rgba(80,45,35,0.12)]
              "
            >
              <img
                src="/ms.jpg"
                alt="NOURAFA Collection Campaign"
                className="
                  h-full
                  w-full
                  rounded-[28px]
                  object-cover
                  object-top
                "
              />

              <div
                className="
                  absolute left-7 top-7
                  rounded-full bg-white/85
                  px-5 py-3
                  backdrop-blur-xl
                  shadow-[0_12px_30px_rgba(80,45,35,0.08)]
                "
              >
            
             
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FILTER */}
      <section className="relative z-10 mt-8 px-6 md:px-20">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto rounded-[30px] border border-white/70 bg-white/45 p-3 shadow-[0_18px_45px_rgba(80,45,35,0.05)] backdrop-blur-xl scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-6 py-3 text-sm transition duration-300 ${
                activeCategory === category
                  ? "bg-[#9f6f62] text-white shadow-[0_12px_25px_rgba(159,111,98,0.25)]"
                  : "bg-white/80 text-[#9f6f62] hover:bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT */}
      <section className="relative z-10 mt-10 px-6 pb-24 md:px-20">
        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="
                group overflow-hidden rounded-[30px] border border-white/80
                bg-white/70 p-3
                shadow-[0_18px_45px_rgba(80,45,35,0.07)]
                backdrop-blur-xl transition duration-500
                hover:-translate-y-2
                hover:shadow-[0_28px_70px_rgba(80,45,35,0.13)]
              "
            >
              <div className="relative overflow-hidden rounded-[24px] bg-[#f3ebe6]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="
                    h-[330px] w-full object-cover object-top
                    transition duration-700
                    group-hover:scale-[1.05]
                    md:h-[400px]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />

                <button
                  onClick={() => {
                    setSelectedProduct(product)
                    setCurrentImage(0)
                  }}
                  className="
                    absolute bottom-4 right-4 flex items-center gap-2
                    rounded-full bg-white/90 px-5 py-3
                    text-sm text-[#9f6f62]
                    shadow-lg backdrop-blur-xl
                    transition hover:bg-[#9f6f62] hover:text-white
                  "
                >
                  <Eye size={16} />
                  {language === "EN" ? "View" : "Lihat"}
                </button>
              </div>

              <div className="px-2 pb-3 pt-5">
                <p className="text-[11px] uppercase tracking-[4px] text-[#b0897b]">
                  {product.category}
                </p>

                <h2 className="mt-3 font-serif text-[25px] leading-tight text-[#9f6f62]">
                  {product.name}
                </h2>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[17px] font-semibold text-[#7c6257]">
                    {product.price}
                  </p>

                  <p className="rounded-full bg-[#f3e6df] px-4 py-2 text-xs text-[#9f6f62]">
                    {product.size}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              className="relative max-h-[92vh] w-full max-w-[900px] overflow-y-auto rounded-[34px] bg-[#fffaf7] shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 z-30 rounded-full bg-white/90 p-3 text-[#8f675b] shadow-md"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative bg-[#f1e7e1] p-4">
                  <div className="overflow-hidden rounded-[26px]">
                    <img
                      src={selectedProduct.images[currentImage]}
                      alt={selectedProduct.name}
                      className="h-[350px] w-full object-cover object-top md:h-[500px]"
                    />
                  </div>

                  <button
                    onClick={prevImage}
                    className="absolute left-7 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#8f675b] shadow-md"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-7 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#8f675b] shadow-md"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {selectedProduct.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        onClick={() => setCurrentImage(index)}
                        className={`h-14 w-14 cursor-pointer rounded-2xl object-cover object-top transition ${
                          currentImage === index
                            ? "scale-105 ring-2 ring-[#9f6f62]"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 md:p-9">
                  <p className="text-xs uppercase tracking-[4px] text-[#b0897b]">
                    {selectedProduct.category}
                  </p>

                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#9f6f62]">
                    {selectedProduct.name}
                  </h2>

                  <p className="mt-4 text-2xl font-semibold text-[#7c6257]">
                    {selectedProduct.price}
                  </p>

                  <p className="mt-5 text-[15px] leading-8 text-[#7c6257]">
                    {selectedProduct.description}
                  </p>

                  <div className="mt-7 space-y-4 rounded-[24px] border border-[#eadbd3] bg-white/60 p-5">
                    <div className="flex items-center justify-between border-b border-[#eadbd3] pb-3">
                      <span className="text-[#b0897b]">
                        {language === "EN" ? "Material" : "Bahan"}
                      </span>

                      <span className="font-medium text-[#7c6257]">
                        {selectedProduct.material}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#b0897b]">Size</span>

                      <span className="font-medium text-[#7c6257]">
                        {selectedProduct.size}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <a
                      href={selectedProduct.shopee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-[#ee4d2d] py-3 font-medium text-white shadow-lg transition hover:scale-[1.02]"
                    >
                      <img
                        src="/shopee.png"
                        alt="Shopee"
                        className="h-5 w-5 object-contain"
                      />
                      Shopee
                    </a>

                    <a
                      href={selectedProduct.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-black py-3 font-medium text-white shadow-lg transition hover:scale-[1.02]"
                    >
                      <img
                        src="/3.png"
                        alt="TikTok"
                        className="h-5 w-5 object-contain"
                      />
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Collection