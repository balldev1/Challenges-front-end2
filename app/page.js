import Image from 'next/image'
import desktopImage from '../public/desktopImage.jpg';
import mobile from '../public/mobile.jpg';
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Home() {
  return (

    <div className='flex justify-center items-center sm:h-screen '>
      <div className='sm:flex sm:flex-row bg-white  w-full sm:w-[600px] sm:h-[500px] h-[860px] mx-5 mt-7 rounded-xl'>
        <div className='sm:w-[350px] sm:h-[500px] h-[350px] sm:rounded-l-xl sm:rounded-r-none rounded-t-xl '>
          <Image src={desktopImage} className='w-[100%] h-[100%] sm:rounded-l-xl sm:rounded-r-none rounded-t-xl sm:block hidden' />
          <Image src={mobile} className='w-[100%] h-[100%] sm:rounded-l-xl sm:rounded-r-none rounded-t-xl sm:hidden' />
        </div>
        <div className='sm:w-[350px] sm:h-[460px] h-[350px]  mt-7 '>
          <div className='mx-5'>
            <div >
              <span className='uppercase  text-slate-500 text-[15px]'> p e r f u m e  </span>
              <h1 className='capitalize  mt-5  text-black-500 text-4xl font-bold sm:block hidden'> gabrielle <br /> essence eau<br />  de parfum </h1>
              <h1 className='capitalize  mt-5  text-black-500 text-[40px] font-bold sm:hidden '> gabrielle essence <br />eau  de parfum </h1>
              <div className='mt-5'>
                <span className=' text-slate-500 sm:block hidden'>A floral, solar and voluptuous interpretation composed by <br /> Olivier Polge, Perfumer-Creator <br />for the House of CHANEL  </span>
                <span className=' text-slate-500  sm:hidden  '>A floral, solar and voluptuous <br /> interpretation composed by  Olivier <br /> Polge, Perfumer-Creatorfor the House  of <br /> CHANEL.  </span>
              </div>
            </div>
            <div className='mt-5 flex items-center gap-3'>
              <h1 className='text-[40px] text-emerald-600 font-bold'>
                $149.99
              </h1>
              <span className='line-through text-slate-500'>
                $169.99
              </span>
            </div>
            <h1 className='bg-emerald-700 text-white text-center justify-center items-center flex h-[60px] rounded-xl mt-5 gap-2'>
              <AiOutlineShoppingCart size={20} />  Add to Cart
            </h1>
          </div>
        </div>
      </div>

    </div>
  )
}
