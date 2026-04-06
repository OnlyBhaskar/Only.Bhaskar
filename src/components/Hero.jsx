import image from '../assets/Bhaskar.png'
import {motion} from 'framer-motion'
function Hero() {
  return (
    <div id='home' className='px-16 flex main-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className=' flex flex-col items-center justify-center gap-10 text-white'>
        <motion.div 
        initial={{y:-50 , opacity: 0}}
        animate={{y:0 , opacity: 1}}
        transition={{duration: 0.8 , delay:0.2}}
        >
          <img src={image} alt="Bhaskar" className='w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]'/>
        </motion.div>
        <motion.div 
        initial={{y:50 , opacity: 0}}
        animate={{y:0 , opacity: 1}}
        transition={{duration: 0.8 , delay:0.2}}
        className=' flex max-w-[600px] flex-col items-center justify-center gap-3 text-center '>
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-bold     md:text-7xl '>BHASKAR</h1>
          <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl'>React Developer</h3>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur ad minima praesentium rerum repellendus dolorem eligendi maiores, sed reprehenderit asperiores voluptas eveniet unde. Molestias ducimus quidem rem corrupti ratione!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero