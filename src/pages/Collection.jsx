import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  SlidersHorizontal,
} from "lucide-react"
import { FaTiktok } from "react-icons/fa6"
import { SiShopee } from "react-icons/si"
import { useLanguage } from "../context/LanguageContext"

function Collection() {
  const { language } = useLanguage()
  const isEN = language === "EN"

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeSeries, setActiveSeries] = useState("All")
  const [currentImage, setCurrentImage] = useState(0)

  const shopeeLink = "https://shopee.co.id/"
  const tiktokLink = "https://www.tiktok.com/"

  const products = [
  {
    id: 1,
    series: "Ruwa Viscose",
    name: "Ruwa Viscose - Black",
    color: "Black",
    material: "Viscose",
    size: "175 x 70 cm",
    price: "Rp56.000",
    image: "/vblack.png",
    hoverImage: "/kain.jpeg",
    images: ["/viscose.jpeg", "/kain.jpeg", "/viscose.jpeg"],
    description: isEN
      ? "Premium viscose pashmina with a soft texture, breathable feel, and elegant drape for everyday comfort."
      : "Pashmina viscose premium dengan tekstur lembut, nyaman digunakan, dan jatuh elegan untuk aktivitas sehari-hari.",
  },
  {
    id: 2,
    series: "Ruwa Viscose",
    name: "Ruwa Viscose - Rose Beige",
    color: "Rose Beige",
    material: "Viscose",
    size: "175 x 70 cm",
    price: "Rp56.000",
    image: "/rosebg.png",
    hoverImage: "/kain.jpeg",
    images: ["/bg1.jpeg", "/kain.jpeg", "/viscose.jpeg"],
    description: isEN
      ? "A warm earthy tone that blends effortlessly with both casual and formal looks."
      : "Warna cokelat hangat yang mudah dipadukan untuk tampilan santai maupun formal.",
  },
  {
    id: 3,
    series: "Ruwa Viscose",
    name: "Ruwa Viscose - Cocoa",
    color: "Cocoa",
    material: "Viscose",
    size: "175 cm",
    price: "Rp59.000",
    badge: "",
    image: "/viscose.jpeg",
    hoverImage: "/viscose.jpeg",
    images: ["/viscose.jpeg", "/viscose.jpeg", "/viscose.jpeg"],
    description: isEN
      ? "A rich cocoa shade designed for a timeless and sophisticated appearance."
      : "Nuansa cokelat cocoa yang memberikan kesan timeless dan elegan dalam setiap penampilan.",
  },
  {
    id: 4,
    series: "Mahra Voal",
    name: "Mahra Voal - Pearl Grey",
    color: "Pearl Grey",
    material: "Voal Arabian",
    size: "175 x 70 cm",
    price: "Rp56.000",
    image: "/model1voal.png",
    hoverImage: "/bahanvoal.png",
    images: ["/model1voal.png", "/dbvvoal.png", "/model voal.png"],
    description: isEN
      ? "A timeless pearl grey tone inspired by soft elegance, perfect for both everyday wear and special occasions."
      : "Nuansa pearl grey yang timeless dengan sentuhan elegan, cocok digunakan untuk aktivitas sehari-hari maupun momen spesial."
  },
  {
    id: 5,
    series: "Mahra Voal",
    name: "Mahra Voal - Bata",
    color: "Bata",
    material: "Voal Arabian",
    size: "175 x 70 cm",
    price: "Rp56.000",
    badge: "",
    image: "/qs.png",
    hoverImage: "/bata32.png",
    images: ["/bata1.png", "/bata2.png", "/bata.png"],
    description: isEN
      ? "A warm brick-inspired shade that adds character while remaining soft and elegant."
      : "Warna bata yang hangat dengan karakter kuat namun tetap memberikan kesan lembut dan elegan.",
  },
  {
    id: 6,
    series: "Mahra Voal",
    name: "Mahra Voal - Taupe",
    color: "Taupe",
    material: "Voal Arabian",
    size: "175 cm",
    price: "Rp79.000",
    badge: "Limited",
    image: "/voal.jpeg",
    hoverImage: "/voal.jpeg",
    images: ["/voal.jpeg", "/voal.jpeg", "/voal.jpeg"],
    description: isEN
      ? "A timeless taupe tone perfect for creating clean and versatile everyday looks."
      : "Warna taupe yang timeless dan mudah dipadukan untuk tampilan yang bersih dan versatile.",
  },
  {
    id: 7,
    series: "Nazira Segi Empat",
    name: "Nazira Segi Empat - Dusty Pink",
    color: "Dusty Pink",
    material: "Paris Japan",
    size: "115 × 115 cm",
    price: "Rp62.000",
    image: "/dp.png",
    hoverImage: "/dustypink1.png",
    images: ["/dustypink.png", "/dustypink2.png"],
    description: isEN
      ? "Soft Paris Japan square scarf with a feminine dusty pink tone for everyday elegance."
      : "Hijab segi empat Paris Japan dengan warna dusty pink yang lembut dan memberikan kesan feminin.",
  },
  {
    id: 8,
    series: "Nazira Segi Empat",
    name: "Nazira Segi Empat - Blue Denim",
    color: "Blue Denim",
    material: "Paris Japan",
    size: "115 × 115 cm",
    price: "Rp62.000",
    badge: "",
    image: "/bluedenimr.png",
    hoverImage: "/bluedenim2.png",
    images: ["/bluedenim.png", "/bluedenim3.png"],
    description: isEN
      ? "A modern denim blue shade that brings a fresh and effortless look."
      : "Warna biru denim yang modern untuk tampilan yang segar dan effortless.",
  },
  {
    id: 9,
    series: "Nazira Segi Empat",
    name: "Nazira Segi Empat - Dusty Maroon",
    color: "Dusty Maroon",
    material: "Paris Japan",
    size: "115 × 115 cm",
    price: "Rp62.000",
    image: "/as.png",
    hoverImage: "/maron2.png",
    images: ["/maron.png", "/maron3.png"],
    description: isEN
      ? "A deep dusty maroon shade that creates a graceful and confident appearance."
      : "Warna dusty maroon yang anggun dan berkarakter untuk menunjang rasa percaya diri.",
  },
  {
    id: 10,
    series: "Nazira Segi Empat",
    name: "Nazira Segi Empat - Vanila Cream",
    color: "Vanila Cream",
    material: "Paris Japan",
    size: "115 × 115 cm",
    price: "Rp62.000",
    image: "/vcc.png",
    hoverImage: "/Ceruty.jpeg",
    images: ["/Ceruty.jpeg", "/Ceruty.jpeg", "/Ceruty.jpeg"],
    description: isEN
      ? "Flowy ceruty pashmina with a soft mocca tone, designed for elegant everyday wear."
      : "Pashmina ceruty dengan warna mocca yang lembut dan jatuh cantik untuk tampilan elegan.",
  },
  {
    id: 11,
    series: "Nazira Segi Empat",
    name: "Nazira Segi Empat - Black",
    color: "Black",
    material: "Paris Japan",
    size: "115 × 115 cm",
    price: "Rp62.000",
    image: "/blak.png",
    hoverImage: "/Ceruty.jpeg",
    images: ["/Ceruty.jpeg", "/Ceruty.jpeg", "/Ceruty.jpeg"],
    description: isEN
      ? "A soft nude shade with a light and feminine impression for any occasion."
      : "Warna nude yang lembut dengan kesan feminin dan mudah dipadukan dalam berbagai kesempatan.",
  },
  {
    id: 12,
    series: "Wareefa Ceruty",
    name: "Wareefa Ceruty - Ash Grey",
    color: "Ash Grey",
    material: "Ceruty",
    size: "175 cm",
    price: "Rp89.000",
    badge: "Limited",
    image: "/Ceruty.jpeg",
    hoverImage: "/Ceruty.jpeg",
    images: ["/Ceruty.jpeg", "/Ceruty.jpeg", "/Ceruty.jpeg"],
    description: isEN
      ? "A sophisticated ash grey tone that complements modern modest fashion."
      : "Warna ash grey yang elegan dan cocok untuk tampilan modest modern.",
  },
  {
    id: 13,
    series: "Dania Bergo",
    name: "Dania Bergo - Daily Nude",
    color: "Daily Nude",
    material: "Bergo",
    size: "Coming Soon",
    price: "Coming Soon",
    badge: "Coming Soon",
    image: "/bergo.jpeg",
    hoverImage: "/bergo.jpeg",
    images: ["/bergo.jpeg", "/bergo.jpeg"],
    description: isEN
      ? "Our upcoming instant hijab collection, designed for comfort and practicality."
      : "Koleksi hijab instan yang akan segera hadir dengan fokus pada kenyamanan dan kepraktisan.",
    status: "soon",
  },
  {
    id: 14,
    series: "Raqiq Kaos",
    name: "Raqiq Kaos - Black",
    color: "Black",
    material: "Kaos",
    size: "Coming Soon",
    price: "Coming Soon",
    badge: "Coming Soon",
    image: "/kaos.jpeg",
    hoverImage: "/kaos.jpeg",
    images: ["/kaos.jpeg", "/kaos.jpeg"],
    description: isEN
      ? "An upcoming soft jersey collection made for effortless daily wear."
      : "Koleksi hijab kaos yang akan segera hadir dengan kenyamanan untuk aktivitas sehari-hari.",
    status: "soon",
  },
  {
    id: 15,
    series: "Raqiq Kaos",
    name: "Raqiq Kaos - Milo",
    color: "Milo",
    material: "Kaos",
    size: "Coming Soon",
    price: "Coming Soon",
    badge: "Coming Soon",
    image: "/kaos.jpeg",
    hoverImage: "/kaos.jpeg",
    images: ["/kaos.jpeg", "/kaos.jpeg"],
    description: isEN
      ? "A practical everyday jersey series designed with softness and simplicity in mind."
      : "Series hijab kaos yang praktis, lembut, dan nyaman untuk digunakan setiap hari.",
    status: "soon",
  },
]

  const seriesList = [
    "All",
    "Ruwa Viscose",
    "Mahra Voal",
    "Nazira Segi Empat",
    "Wareefa Ceruty",
    "Dania Bergo",
    "Raqiq Kaos",
  ]

  const filteredProducts =
    activeSeries === "All"
      ? products
      : products.filter((product) => product.series === activeSeries)

  const nextImage = () => {
    if (!selectedProduct) return
    setCurrentImage((prev) =>
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    if (!selectedProduct) return
    setCurrentImage((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    )
  }

  return (
    <main className="min-h-screen bg-[#f7f1ec] text-[#2f2521]">
      <section className="px-6 pb-12 pt-28 text-center md:px-14 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[4px] text-[#8b6f62]"
        >
          NOURAFA COLLECTION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-5 max-w-3xl font-serif text-[46px] leading-[0.95] tracking-[-2px] md:text-[72px]"
        >
          {isEN ? "Find your everyday scarf." : "Temukan hijab untuk harimu."}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6f5a50] md:text-[15px]"
        >
          {isEN
            ? "Explore every Nourafa series by color, material, and comfort."
            : "Jelajahi setiap series Nourafa berdasarkan warna, bahan, dan kenyamanan."}
        </motion.p>
      </section>

      <section className="sticky top-0 z-30 border-y border-[#ded0c7] bg-[#f7f1ec]/90 px-4 py-4 backdrop-blur-xl md:px-14 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto">
          <div className="flex shrink-0 items-center gap-2 pr-2 text-xs uppercase tracking-[2px] text-[#8b6f62]">
            <SlidersHorizontal size={15} />
            Series
          </div>

          {seriesList.map((series) => (
            <button
              key={series}
              onClick={() => setActiveSeries(series)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs uppercase tracking-[1.5px] transition ${
                activeSeries === series
                  ? "bg-[#2f2521] text-white"
                  : "bg-white text-[#6f5a50] hover:bg-[#eaded6]"
              }`}
            >
              {series}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 md:px-14 lg:px-20">
        <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-[#8b6f62]">
              {activeSeries === "All" ? "All Series" : activeSeries}
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">
              {filteredProducts.length} {isEN ? "Products" : "Produk"}
            </h2>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-11 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedProduct(product)
                setCurrentImage(0)
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ddd5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0 ${
                    product.status === "soon" ? "grayscale opacity-60" : ""
                  }`}
                />

                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className={`h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100 ${
                    product.status === "soon" ? "grayscale" : ""
                  }`}
                />

                {product.badge && (
                  <div className="absolute left-3 top-3 bg-white px-3 py-2 text-[9px] font-medium uppercase tracking-[1.7px] text-[#2f2521]">
                    {product.badge}
                  </div>
                )}

                <button className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-5 items-center gap-2 bg-white px-5 py-3 text-[10px] uppercase tracking-[2px] text-[#2f2521] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Eye size={14} />
                  {isEN ? "Quick View" : "Lihat Detail"}
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-[10px] uppercase tracking-[2px] text-[#8b6f62]">
                  {product.series}
                </p>

                <h3 className="mt-2 min-h-[38px] text-[13px] uppercase leading-5 tracking-[1.4px]">
                  {product.color}
                </h3>

                <p className="mt-1 text-xs text-[#9a7d70]">
                  {product.material} · {product.size}
                </p>

                <p className="mt-2 text-sm text-[#6f5a50]">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.96 }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-[#fffaf7] shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 z-30 bg-white p-3 text-[#2f2521] shadow-md"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative bg-[#efe5de] p-4">
                  <div className="overflow-hidden bg-[#e8ddd5]">
                    <img
                      src={selectedProduct.images[currentImage]}
                      alt={selectedProduct.name}
                      className="h-[380px] w-full object-cover md:h-[620px]"
                    />
                  </div>

                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-7 top-1/2 -translate-y-1/2 bg-white p-3 text-[#2f2521] shadow-md"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-7 top-1/2 -translate-y-1/2 bg-white p-3 text-[#2f2521] shadow-md"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {selectedProduct.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        onClick={() => setCurrentImage(index)}
                        className={`h-14 w-14 cursor-pointer object-cover transition ${
                          currentImage === index
                            ? "ring-2 ring-[#2f2521]"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 md:p-10">
                  <p className="text-xs uppercase tracking-[4px] text-[#8b6f62]">
                    {selectedProduct.series}
                  </p>

                  <h2 className="mt-4 font-serif text-[36px] leading-tight md:text-[48px]">
                    {selectedProduct.color}
                  </h2>

                  <p className="mt-3 text-xl text-[#6f5a50]">
                    {selectedProduct.price}
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#6f5a50]">
                    {selectedProduct.description}
                  </p>

                  <div className="mt-8 border-y border-[#e3d4ca] py-5">
                    <div className="flex justify-between gap-6 py-3 text-sm">
                      <span className="text-[#8b6f62]">
                        {isEN ? "Product" : "Produk"}
                      </span>
                      <span>{selectedProduct.name}</span>
                    </div>

                    <div className="flex justify-between gap-6 py-3 text-sm">
                      <span className="text-[#8b6f62]">
                        {isEN ? "Material" : "Bahan"}
                      </span>
                      <span>{selectedProduct.material}</span>
                    </div>

                    <div className="flex justify-between gap-6 py-3 text-sm">
                      <span className="text-[#8b6f62]">
                        {isEN ? "Size" : "Ukuran"}
                      </span>
                      <span>{selectedProduct.size}</span>
                    </div>

                    <div className="flex justify-between gap-6 py-3 text-sm">
                      <span className="text-[#8b6f62]">Status</span>
                      <span>
                        {selectedProduct.status === "soon"
                          ? "Coming Soon"
                          : isEN
                          ? "Available"
                          : "Tersedia"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <a
                      href={shopeeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#ee4d2d] px-5 py-4 text-xs font-medium uppercase tracking-[1.5px] text-white transition hover:opacity-90"
                    >
                      <SiShopee size={20} />
                      Shopee
                    </a>

                    <a
                      href={tiktokLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-black px-5 py-4 text-xs font-medium uppercase tracking-[1.5px] text-white transition hover:opacity-90"
                    >
                      <FaTiktok size={18} />
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Collection