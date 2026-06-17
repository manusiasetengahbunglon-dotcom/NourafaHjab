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
      name: "Ruwa Viscose - Milk Tea",
      color: "Milk Tea",
      material: "Viscose",
      size: "175 cm",
      price: "Rp59.000",
      badge: "Best Seller",
      image: "/viscose.jpeg",
      hoverImage: "/kain.jpeg",
      images: ["/viscose.jpeg", "/kain.jpeg", "/viscose.jpeg"],
      description: isEN
        ? "Soft viscose pashmina with a natural fall for a neat everyday look."
        : "Pashmina viscose lembut dengan karakter jatuh alami untuk tampilan harian yang rapi.",
    },
    {
      id: 2,
      series: "Ruwa Viscose",
      name: "Ruwa Viscose - Soft Brown",
      color: "Soft Brown",
      material: "Viscose",
      size: "175 cm",
      price: "Rp59.000",
      badge: "New",
      image: "/viscose.jpeg",
      hoverImage: "/kain.jpeg",
      images: ["/bg1.jpeg", "/kain.jpeg", "/viscose.jpeg"],
      description: isEN
        ? "A warm neutral shade that is easy to pair with daily outfits."
        : "Warna netral hangat yang mudah dipadukan dengan outfit harian.",
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
        ? "A calm brown tone made for simple and graceful styling."
        : "Warna cokelat lembut untuk tampilan sederhana dan anggun.",
    },
    {
      id: 4,
      series: "Mahra Voal",
      name: "Mahra Voal - Sand Beige",
      color: "Sand Beige",
      material: "Voal",
      size: "175 cm",
      price: "Rp79.000",
      badge: "New",
      image: "/voal.jpeg",
      hoverImage: "/voal.jpeg",
      images: ["/voal.jpeg", "/voal.jpeg", "/voal.jpeg"],
      description: isEN
        ? "Lightweight voal with a clean finish and easy styling."
        : "Voal ringan dengan tampilan bersih dan mudah dibentuk.",
    },
    {
      id: 5,
      series: "Mahra Voal",
      name: "Mahra Voal - Ivory",
      color: "Ivory",
      material: "Voal",
      size: "175 cm",
      price: "Rp79.000",
      badge: "",
      image: "/voal.jpeg",
      hoverImage: "/voal.jpeg",
      images: ["/voal.jpeg", "/voal.jpeg", "/voal.jpeg"],
      description: isEN
        ? "A soft light shade for a clean and graceful look."
        : "Warna terang yang lembut untuk tampilan bersih dan anggun.",
    },
    {
      id: 6,
      series: "Mahra Voal",
      name: "Mahra Voal - Taupe",
      color: "Taupe",
      material: "Voal",
      size: "175 cm",
      price: "Rp79.000",
      badge: "Limited",
      image: "/voal.jpeg",
      hoverImage: "/voal.jpeg",
      images: ["/voal.jpeg", "/voal.jpeg", "/voal.jpeg"],
      description: isEN
        ? "A timeless neutral shade with a soft elegant impression."
        : "Warna netral timeless dengan kesan lembut dan elegan.",
    },
    {
      id: 7,
      series: "Nazira Segi Empat",
      name: "Nazira Segi Empat - Cream",
      color: "Cream",
      material: "Paris Japan",
      size: "115 × 115 cm",
      price: "Rp69.000",
      badge: "Best Seller",
      image: "/segi.jpeg",
      hoverImage: "/segi.jpeg",
      images: ["/segi.jpeg", "/segi.jpeg", "/segi.jpeg"],
      description: isEN
        ? "A square scarf with a light texture for a neat everyday style."
        : "Hijab segi empat bertekstur ringan untuk tampilan harian yang rapi.",
    },
    {
      id: 8,
      series: "Nazira Segi Empat",
      name: "Nazira Segi Empat - Dusty Pink",
      color: "Dusty Pink",
      material: "Paris Japan",
      size: "115 × 115 cm",
      price: "Rp69.000",
      badge: "",
      image: "/segi.jpeg",
      hoverImage: "/segi.jpeg",
      images: ["/segi.jpeg", "/segi.jpeg", "/segi.jpeg"],
      description: isEN
        ? "A soft feminine color with a simple and clean finish."
        : "Warna feminin yang lembut dengan tampilan sederhana dan bersih.",
    },
    {
      id: 9,
      series: "Nazira Segi Empat",
      name: "Nazira Segi Empat - Sage",
      color: "Sage",
      material: "Paris Japan",
      size: "115 × 115 cm",
      price: "Rp69.000",
      badge: "New",
      image: "/segi.jpeg",
      hoverImage: "/segi.jpeg",
      images: ["/segi.jpeg", "/segi.jpeg", "/segi.jpeg"],
      description: isEN
        ? "A calm green shade made for soft everyday looks."
        : "Warna hijau lembut untuk tampilan harian yang tenang.",
    },
    {
      id: 10,
      series: "Wareefa Ceruty",
      name: "Wareefa Ceruty - Mocca",
      color: "Mocca",
      material: "Ceruty",
      size: "175 cm",
      price: "Rp89.000",
      badge: "Best Seller",
      image: "/Ceruty.jpeg",
      hoverImage: "/Ceruty.jpeg",
      images: ["/Ceruty.jpeg", "/Ceruty.jpeg", "/Ceruty.jpeg"],
      description: isEN
        ? "A flowy ceruty pashmina with a soft feminine look."
        : "Pashmina ceruty yang flowy dengan kesan feminin dan lembut.",
    },
    {
      id: 11,
      series: "Wareefa Ceruty",
      name: "Wareefa Ceruty - Nude",
      color: "Nude",
      material: "Ceruty",
      size: "175 cm",
      price: "Rp89.000",
      badge: "",
      image: "/Ceruty.jpeg",
      hoverImage: "/Ceruty.jpeg",
      images: ["/Ceruty.jpeg", "/Ceruty.jpeg", "/Ceruty.jpeg"],
      description: isEN
        ? "A soft nude shade for an effortless graceful style."
        : "Warna nude lembut untuk gaya anggun yang effortless.",
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
        ? "A soft grey tone that brings a modern modest look."
        : "Warna abu lembut untuk tampilan modest yang modern.",
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
        ? "Instant hijab series will be available soon."
        : "Series hijab instan akan segera hadir.",
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
        ? "Soft daily hijab series will be available soon."
        : "Series hijab kaos lembut akan segera hadir.",
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
        ? "A practical daily series designed for easy wear."
        : "Series harian yang praktis dan mudah digunakan.",
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