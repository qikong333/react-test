import React, { useState } from 'react'
import { Animate } from 'react-simple-animate'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import responsive styles
import '../styles/responsive.scss'

interface SlideData {
  imageUrl: string
  amount: string
  currency: string
  description?: string
  time?: string
  isKiddo?: boolean
  requestAmount?: string
}

const slides: SlideData[] = [
  {
    imageUrl:
      'https://assets.revolut.com/published-assets-v3/aec7863b-7660-4c6d-bd0b-021b41cceee5/27f2d874-8592-4dbe-85ec-14389754bfbc.webp',
    amount: '$6,252',
    currency: 'Main',
    description: 'Trainers cashback',
    time: 'Well deserved'
  },
  {
    imageUrl:
      'https://assets.revolut.com/published-assets-v3/ed84e44f-09bf-426b-a6e6-fa12db3807a4/22de535d-9edd-45a1-97f5-51c4a48ed576.webp',
    amount: '$2,500',
    currency: 'United States · USD',
    description: 'New York Pizza',
    time: '11:30'
  },
  {
    imageUrl:
      'https://assets.revolut.com/published-assets-v3/98884e6b-1786-44f4-baaf-8ad8a79c1b46/43091c24-6fec-4549-a716-53903e09b93f.webp',
    amount: '$500',
    currency: 'Kiddo account',
    requestAmount: 'S$20 Request'
  },
  {
    imageUrl:
      'https://assets.revolut.com/published-assets-v3/aec7863b-7660-4c6d-bd0b-021b41cceee5/27f2d874-8592-4dbe-85ec-14389754bfbc.webp',
    amount: '$6,252',
    currency: 'Main',
    description: 'Trainers cashback',
    time: 'Well deserved'
  },
  {
    imageUrl:
      'https://assets.revolut.com/published-assets-v3/ed84e44f-09bf-426b-a6e6-fa12db3807a4/22de535d-9edd-45a1-97f5-51c4a48ed576.webp',
    amount: '$2,500',
    currency: 'United States · USD',
    description: 'New York Pizza',
    time: '11:30'
  },
  {
    imageUrl:
      'https://assets.revolut.com/published-assets-v3/98884e6b-1786-44f4-baaf-8ad8a79c1b46/43091c24-6fec-4549-a716-53903e09b93f.webp',
    amount: '$500',
    currency: 'Kiddo account',
    requestAmount: '$20 Request'
  }
]

const FinanceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="finance-section w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="text-left sm:text-center mb-4 sm:mb-6 md:mb-8">
        <Animate
          play
          start={{ opacity: 0, transform: 'translateY(20px)' }}
          end={{ opacity: 1, transform: 'translateY(0)' }}
        >
          <h1 className="font-bold mb-2 sm:mb-3 md:mb-4 text-black">MAKE YOUR SPEND, WELL-SPENT</h1>
          <p className="text-gray-600 mb-6 sm:mb-6 md:mb-8 max-w-3xl mx-auto sm:px-6">
            Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big life goals? Reach them faster.
            However you spend — Revolut is all you need.
          </p>
          <button className="get-started-button bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95">
            Get started
          </button>
        </Animate>
      </div>

      <div className="swiper-container relative w-full overflow-hidden max-w-7xl mx-auto px-0 sm:px-4 md:px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          slidesPerView={1.1}
          spaceBetween={8}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }}
          className="w-full h-full"
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 8,
              centeredSlides: false
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 12,
              centeredSlides: false
            },
            640: {
              slidesPerView: 1.8,
              spaceBetween: 16,
              centeredSlides: true
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
              centeredSlides: true
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 24,
              centeredSlides: true
            }
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full flex items-center justify-center p-2 group">
              <div
                className={`slide-content w-full transition-all duration-500 relative ${
                  index === activeIndex ? 'active' : ''
                } hover:scale-[1.02] hover:shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden group-hover:brightness-110 group-hover:contrast-110`}
              >
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl transition-all duration-500"
                />
                <div className="absolute top-3 sm:top-6 md:top-8 left-3 sm:left-6 md:left-8 right-3 sm:right-6 md:right-8 flex flex-col gap-1.5 sm:gap-3 md:gap-4 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:opacity-90">
                  <div className="flex justify-between items-start">
                    <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white">{slide.amount}</span>
                    <button className="bg-white/20 backdrop-blur-md px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-white">
                      {slide.currency}
                    </button>
                  </div>
                  {slide.isKiddo ? (
                    <div className="mt-auto absolute bottom-3 sm:bottom-6 md:bottom-8 left-0 right-0 flex items-center justify-between bg-white/10 backdrop-blur-md rounded-full px-2 sm:px-4 py-1.5 sm:py-2">
                      <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gray-300"></div>
                      <span className="text-white flex-grow ml-2 sm:ml-3 text-xs sm:text-base">
                        {slide.requestAmount}
                      </span>
                      <button className="bg-blue-600 text-white px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                        Send
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="bg-white/20 backdrop-blur-md p-1 sm:p-2 rounded-full">
                        <svg
                          className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium text-xs sm:text-base">{slide.description}</span>
                        <span className="text-white/70 text-xs sm:text-sm">{slide.time}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default FinanceSection
