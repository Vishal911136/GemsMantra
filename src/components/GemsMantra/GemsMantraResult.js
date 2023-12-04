import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
 
  
  const productData = [
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      },
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      },
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      },
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      }
  ]
  
export default function GemsMantraResult() {


  return (
    <>
        <div className=" relative px-3 my-8 ">
            
            <div className='background_image absolute top-0 w-[95%] sm:w-[98%]'>
                <div className='mx-auto py-16 max-w-6xl '>

                    <div className='grid sm:w-[75%] grid-cols-1 sm:grid-cols-3 px-4 text-sm'>
                        <div className='border_right px-4 text_color '>
                            <span className=''><span className='bold'>Email -</span> vishal@gmail.com</span><br/>
                            <span><span className='bold'>Phone Number -</span> 9111363002</span>
                        </div>
                        <div className='border_right px-4 text_color '>
                            <span className=''><span className='bold'>Date of Birth -</span> 19-05-1998</span><br/>
                            <span><span className='bold'>Gender -</span> male</span>
                        </div>
                        <div className='px-4 text_color '>
                            <span className=''><span className='bold'>Body Weight -</span> 60kg</span><br/>
                            <span><span className='bold'>Birth Place -</span> Chand Chaurai Chhindwara Madhya Pradesh India</span>
                        </div>
                    </div>

                    <div className='text-center md:text-left md:w-[70%] flex-none md:flex items-center md:justify-items-start justify-items-center pt-8 px-8 mt-16'>
                        <div>
                            <img className='w-32 h-28 mx-auto sm:-mx-0' src = "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/img/rashi/Cancer.png"/>
                        </div>
                        <div className='sm:w-[500px] ps-2'>
                            <h3 className='text_color2 text-2xl sm:text-4xl font-bold'>Hello, Vishal!</h3>
                            <h3 className='pt-1 text_color2 text-2xl sm:text-4xl font-bold'> Your Moon Sign Is Cancer (कर्क)</h3>
                        </div>
                    </div>


                    <div className='sm:w-[70%] w-[100%] px-8 mt-2'>
                        <h3 className='text_color2 font-semibold'>This suggestion is according to your moon sign :</h3>

                        <div className='bg-white w-[100%] sm:w-[70%]'>
                            <div className='flex border-2 border-gray-400'>
                                <h3 className='overflow-hidden text_color font-semibold p-2 w-[35%]  border-r-2 border-gray-400'>Gems</h3>
                                <h3 className='w-[75%] p-2 '>Ruby (5 - 7 Ratti) is best for you</h3>
                            </div>
                            <div className='flex border-x-2 border-gray-400'>
                                <h3 className='overflow-hidden text_color font-semibold p-2 w-[35%]  border-r-2 border-gray-400'>Bracelet</h3>
                                <h3 className='w-[75%] p-2 '>Cat eye, Amethyst are best for you</h3>
                            </div>
                            <div className='flex border-2 border-gray-400'>
                                <h3 className='overflow-hidden text_color font-semibold p-2 w-[35%]  border-r-2 border-gray-400'>Rudraksha</h3>
                                <h3 className='w-[75%] p-2 '>Two-Mukhi Rudraksha is best for you</h3>
                            </div>
                        </div>


                    </div>
                        <div className="mt-16 px-12 flex flex-wrap">
                        {
                            productData.map((data) =>{
                                {console.log(data)}
                                return(
                                //     <Card className="w-64 rounded-3xl shadow-none m-4">
                                //         <img className='rounded-3xl' src={data.image} alt="profile-picture" />
                                //     {/* </CardHeader> */}
                                //     <CardBody className="text-center pt-1">
                                //         <span>{data.name}</span>
                                //         <Button className='btn_color'>Buy Now</Button>
                                //     </CardBody>
                                // </Card>

                                <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 rounded-2xl ">
                                    <article className="overflow-hidden">

                                            <img alt="Placeholder" className="w-full block h-auto rounded-ss-3xl rounded-se-3xl" src={data.image}/>
                                        
                                        <header className="flex items-center justify-between leading-tight p-2 bg-white rounded-ee-3xl rounded-es-3xl">
                                        <CardBody className="text-center pt-1 rounded-3xl">
                                         <span>{data.name}</span>
                                         <Button className='btn_color'>Buy Now</Button>
                                        </CardBody>
                                        </header>

                                    </article>
                                    
                                </div>

                                
                                    )
                            })
                        }

                        </div>
                </div>

            </div>
        </div>
    </>
  )
}
