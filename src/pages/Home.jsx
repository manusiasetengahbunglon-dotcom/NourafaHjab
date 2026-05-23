import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

function Home() {
  const { language } = useLanguage()

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f8f4f1]
        px-6
        md:px-16
        lg:px-24
        pt-28
        lg:pt-36
        pb-20
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#fffaf7]
          via-[#f8f4f1]
          to-[#efe4df]
        "
      />

      {/* SOFT GLOW */}
      <div
        className="
          absolute
          top-[-220px]
          left-[-160px]
          w-[580px]
          h-[580px]
          rounded-full
          bg-[#dfc3b7]
          blur-[160px]
          opacity-30
        "
      />

      <div
        className="
          absolute
          bottom-[-260px]
          right-[-180px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#c9a99c]
          blur-[170px]
          opacity-20
        "
      />

      {/* SOFT WATERMARK */}
      <div
        className="
          hidden lg:block
          absolute
          bottom-[30px]
          left-[70px]
          pointer-events-none
          select-none
          z-0
        "
      >
        <h1
          className="
            text-[110px]
            font-serif
            leading-none
            tracking-[-5px]
            text-[rgba(204,176,165,0.10)]
            whitespace-nowrap
          "
        >
          NOURAFA
        </h1>
      </div>

      {/* MAIN */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-14
          items-center
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              bg-white/70
              backdrop-blur-xl
              border
              border-white/80
              shadow-[0_12px_35px_rgba(80,45,35,0.04)]
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#b28778]" />

            <p
              className="
                uppercase
                tracking-[3px]
                text-[#b28778]
                text-[10px]
                font-medium
              "
            >
              {language === "EN"
                ? "Premium Hijab Collection"
                : "Koleksi Hijab Premium"}
            </p>
          </div>

          {/* LABEL */}
          <p
            className="
              mt-8
              uppercase
              tracking-[8px]
              text-[#c3a496]
              text-xs
              font-medium
            "
          >
            {language === "EN"
              ? "Elegant Muslim Fashion"
              : "Fashion Muslim Elegan"}
          </p>

          {/* TITLE */}
          <h1
            className="
              mt-7
              text-[54px]
              sm:text-[72px]
              lg:text-[92px]
              leading-[0.88]
              tracking-[-4px]
              font-serif
              text-[#ab7f71]
            "
          >
            {language === "EN" ? (
              <>
                Beauty
                <br />
                in Simplicity
              </>
            ) : (
              <>
                Keindahan
                <br />
                Dalam Kesederhanaan
              </>
            )}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-10
              text-[#8f7569]
              text-[17px]
              leading-9
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            {language === "EN" ? (
              <>
                Crafted with softness, elegance, and timeless comfort,
                NOURAFA accompanies every woman with graceful confidence
                and timeless modest beauty.
              </>
            ) : (
              <>
                Dirancang dengan kelembutan, elegansi, dan kenyamanan
                abadi, NOURAFA hadir menemani setiap wanita dengan
                kepercayaan diri dan kecantikan yang timeless.
              </>
            )}
          </p>

          {/* BUTTON */}
          <div
            className="
              mt-14
              flex
              justify-center
              lg:justify-start
            "
          >
            <Link to="/collection">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="
                  relative
                  overflow-hidden
                  group
                  px-10
                  py-5
                  rounded-full
                  bg-[#b28778]
                  text-white
                  tracking-wide
                  shadow-[0_18px_40px_rgba(178,135,120,0.35)]
                  transition-all
                  duration-500
                "
              >
                {/* SHINE */}
                <div
                  className="
                    absolute
                    inset-0
                    -translate-x-[120%]
                    group-hover:translate-x-[120%]
                    transition
                    duration-1000
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                  "
                />

                <span className="relative z-10">
                  {language === "EN"
                    ? "Explore Collection"
                    : "Lihat Koleksi"}
                </span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="
            relative
            flex
            justify-center
            lg:justify-end
          "
        >
          {/* FRAME */}
          <div
            className="
              absolute
              -inset-4
              rounded-[70px]
              border
              border-white/60
              bg-white/20
              backdrop-blur-sm
              shadow-[0_30px_80px_rgba(90,55,45,0.08)]
            "
          />

          {/* VIDEO */}
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                w-[330px]
                sm:w-[420px]
                lg:w-[470px]
                h-[455px]
                sm:h-[590px]
                lg:h-[660px]
                object-cover
                rounded-[58px]
                hover:scale-[1.03]
                transition-transform
                duration-[5000ms]
                shadow-[0_35px_90px_rgba(90,55,45,0.16)]
              "
            >
              <source src="/ee.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                rounded-[58px]
                bg-gradient-to-t
                from-black/20
                via-transparent
                to-white/10
                pointer-events-none
              "
            />
          </motion.div>

          {/* TOP CARD */}
          <motion.div
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
              absolute
              z-30
              top-7
              right-0
              md:right-[-12px]
              bg-white/80
              backdrop-blur-2xl
              border
              border-white/70
              px-6
              py-5
              rounded-[30px]
              shadow-[0_18px_40px_rgba(80,45,35,0.08)]
            "
          >
            <p
              className="
                text-[#c4a293]
                text-[10px]
                tracking-[6px]
                uppercase
                whitespace-nowrap
              "
            >
              {language === "EN"
                ? "New Arrival"
                : "Produk Baru"}
            </p>

            <h3
              className="
                mt-3
                text-[#a87b6e]
                text-[24px]
                font-serif
                leading-none
                whitespace-nowrap
              "
            >
              {language === "EN"
                ? "Timeless Elegance"
                : "Elegansi Abadi"}
            </h3>
          </motion.div>

          {/* BOTTOM CARD */}
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
              absolute
              z-30
              bottom-7
              left-0
              md:left-[-12px]
              bg-white/80
              backdrop-blur-2xl
              border
              border-white/70
              px-6
              py-5
              rounded-[30px]
              shadow-[0_18px_40px_rgba(80,45,35,0.08)]
            "
          >
            <p
              className="
                text-[#c4a293]
                text-[10px]
                tracking-[6px]
                uppercase
                whitespace-nowrap
              "
            >
              {language === "EN"
                ? "Crafted With Love"
                : "Dibuat Dengan Cinta"}
            </p>

            <h3
              className="
                mt-3
                text-[#a87b6e]
                text-[24px]
                font-serif
                leading-none
                whitespace-nowrap
              "
            >
              {language === "EN"
                ? "Premium Comfort"
                : "Kenyamanan Premium"}
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home