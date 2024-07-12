  import './App.css'
  import hero from "./assets/hero-image-business-card.png"
  import hero2 from "./assets/avatar-image-business-card.png"
  import hero3 from "./assets/white-overlay.svg"

  function App() {


    return (
      <>
        <div className='bg-[#150F33] flex min-h-screen p-32'>
        <div className='w-1/2'>
        
      <div className=' h-full flex items-center justify-center'>  
          <div >
          <div className='  p-4 text-[#FAFAF9]'>
          <span className='border-4 border-[#19182F] rounded-full px-4 py-2 bg-[#171A2F]'>
            devChallenges.io
          </span>
        </div>
          <div className='text-xl text-[#D4D4E6]'>
          Responsive Web Developer Project
          </div>
          <div className='text-7xl text-[#F9FCF8]'>
          Business
          </div>
          <div className='text-7xl text-[#29203B]'>
          Blog Card
          </div>
          <div className='text-xl text-[#7E758F]'>
        HTML.CSS
          </div>
        </div>
      </div>

    </div>
    <div className='w-1/2 '>
      <div className='h-full flex items-center justify-center '>
        
      <div className='border-4 min-h-[680px] min-w-[600px] border-[#452A4A] relative'>
          <img src={hero} alt="Hero Image" className='absolute inset-0 w-full h-full object-cover' />
          <img src={hero3} alt="Hero Image" className='absolute inset-0 w-full h-full -cover' />
          <div className='bg-white absolute inset-0 w-full h-1/2 top-[336px] '>
          <div className=' h-2/3 p-10'>
          <div className='text-2xl font-bold mb-2'>
          Perfect Solution for small
          </div>
          <div className='text-2xl font-bold mb-2'>
          business
          </div>
          <div className='text-xl '>
          Small businesses need to generate leads to grow.
          </div>
          <div className='text-xl '>
          You can use tools like Ringy.
          </div>  
          </div>

          <div className='border-t-[1px] border-black '></div>

          <div className=' flex  items-center h-2/6 p-10'>
         <div className='w-16 h-16 rounded-full overflow-hidden border-4 border-gray-300 flex items-center justify-center'>
         <img src={hero2} alt="hero2" className="w-full h-full object-cover" />
         </div>
         <div className='ml-2'>
          <div className='text-lg font-bold'>
          Shaki Rumba
         </div>
         <div>
         Full Stack Web developer, Paychat inc.
         </div>
          
         </div>
          </div>
         
          </div>
          {/* <img src={hero} alt="Hero Image" className='absolute inset-0 w-full h-full object-cover' /> */}
        </div>

        
       
      </div>
    </div>
    </div>
    
        
      </>
    )
  }

  export default App
