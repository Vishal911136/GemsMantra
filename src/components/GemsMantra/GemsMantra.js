import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

import { Avatar, Card, Typography } from "@material-tailwind/react";
import GemsMantraResult from './GemsMantraResult';

const TABLE_HEAD = ["Gems", "Gems Name", "Finger to wear"];
 
const TABLE_ROWS = [
  {
    name: "Yellow Sapphire (पुखराज)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Pukhraj(Yellow%20sapphire).png",
    fingerName: "Index Finger (तर्जनी)",
  },
  {
    name: "Cat's Eye (लहसुनिया)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/CatEye.png",
    fingerName: "Middle Finger (मध्यमा)",
  },
  {
    name: "Blue Sapphire (नीलम)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Neelam.png",
    fingerName: "Middle Finger (मध्यमा)",
  },
  {
    name: "Diamond (हीरा)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/daimond.png",
    fingerName: "Ring Finger (अनामिका)",
  },
  {
    name: "Hessonite (गोमेध)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Hessonite.png",
    fingerName: "Middle Finger (मध्यमा)",
  },
  {
    name: "Ruby (माणिक्य)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Ruby.png",
    fingerName: "Ring Finger (अनामिका)",
  },
  {
    name: "Red Coral (मूंगा)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Moonga.png",
    fingerName: "Ring Finger (अनामिका)",
  },
  {
    name: "Emerald (पन्ना)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Panna.png",
    fingerName: "Little Finger कनिष्ट (सबसे छोटी ऊँगली)",
  },
  {
    name: "Pearl (मोती)",
    image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/gems/Pearl.png",
    fingerName: "Little Finger कनिष्ट (सबसे छोटी ऊँगली)",
  }
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function GemsMantra() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [gender,setGender] = useState();
  const [perpose,setPerpose] = useState();
  const [bodyWeight,setBodyWeight] = useState();
  const [date,setDate] = useState();
  const [time,setTime] = useState();
  const [place,setPlace] = useState();

  const[errorMsg, setErrorMsg] = useState();
  const[loading,setLoading] = useState(false);




  const [isOpen, setIsOpen] = useState(false);

  const findGems = (e) =>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(gender);
    console.log(perpose);
    console.log(bodyWeight);
    console.log(date);
    console.log(time);
    console.log(place);
    if(name !== null && name !== undefined &&
      email !== null && email !== undefined &&
      phone !== null && phone !== undefined &&
      gender !== null && gender !== undefined &&
      perpose !== null && perpose !== undefined &&
      bodyWeight !== null && bodyWeight !== undefined &&
      date !== null && date !== undefined &&
      time !== null && time !== undefined &&
      place !== null && place !== undefined
      ){
      setLoading(false);
    }
    else{
      setLoading(true);
      setErrorMsg("All fields are required");
    }

    setIsOpen(true)
  }


  return (
    <>
      <div className="isolate bg-white px-2 py-8 sm:py-16 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-bold tracking-tight text_color text-2xl md:text-4xl">Discover Your Rashi, Gemstones, Rudraksha and Bracelet
  Recommendation</h2>
          
        </div>

      <div className='grid md:grid-cols-3 mx-auto sm:max-w-5xl max-w-6xl '>

        <form method='post' className="rounded-md col-span-3 lg:col-span-2 mx-2 mt-6 w-auto sm:mt-6 bg-white p-6 px-8 sm:px-16 py-4 md:py-14 shadow-2xl">

          <h1 className='text_color md:text-3xl text-lg  py-6 sm:py-8 font-bold'>Please Fill Your Birth Details Here:</h1>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
                Enter your name
              </label>
              <div className="">
                <input
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setName(e.target.value)}
                  
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
                Enter your email
              </label>
              <div className="">
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="family-name"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>
            </div>

            <div>
              <label htmlFor="first-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
                Enter your phone number
              </label>
              <div className="">
                <input
                  placeholder="Enter your mobile"
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="given-name"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPhone(e.target.value)}
                  
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
                Enter your gender
              </label>
              <div className=''>
                  <select id="countries"
                    onChange={(e) => setGender(e.target.value)} 
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    
                    >
                      <option selected>Gender</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                  </select>
              </div>
            </div>
            

            <div>
              <label htmlFor="first-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
              Purpose to wear gemstone
              </label>
              <div className=''>
                  <select id="countries"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPerpose(e.target.value)}
                  
                  >
                      <option selected>General</option>
                      <option value="example 1">Example 1 </option>
                      <option value="example 2">Example 2</option>
                  </select>
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
              Body weight (in kg)
              </label>
              <div className="">
                <input
                  placeholder="Enter your weight"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setBodyWeight(e.target.value)}
                  
                />
              </div>
            </div>

            <div>
              <label htmlFor="first-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
              Enter your birth date
              </label>
              <div className="">
                <input
                  type="date"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setDate(e.target.value)}
                  
                />
              </div>
            </div>

            <div>
              <label htmlFor="first-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
              Enter your birth time
              </label>
              <div className="">
                <input
                  type="time"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setTime(e.target.value)}
                  
                />
              </div>
            </div>

            <div>
              <label htmlFor="first-name" className="block text-sm md:text-lg text_color2  leading-6 text-gray-900">
              Enter your birth place
              </label>
              <div className="">
                <input
                  placeholder="Enter birth place here"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPlace(e.target.value)}
                  
                />
              </div>

                <div className='text-red-700 '>
                  <span>{errorMsg}</span>
                </div>


                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md btn_color px-3.5 py-2.5 text-center text-sm  text-white shadow-sm "
                    onClick={(e) => findGems(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
        </form>


        <div className='mt-6 col-span-3 w-auto lg:col-span-1 sm:mt-6 mx-2 bg-white shadow-2xl text_color2 font-bold'>
          <h1 className='text-lg text_color2 font-bold text-center py-3' style={{background:'#fef8f3'}}>Suggested Finger to wear Gemstones</h1>
        <Card className=" w-full px-4">
        <table className="table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border border-blue-gray-100 p-4 "
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-left font-bold text_color2 leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {TABLE_ROWS.map(({ name,image, fingerName}, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = "p-4 border border-blue-gray-50";
  
              return (
                <tr key={name}>
                  <td className="px-4 border border-blue-gray-50 font">
                    <Avatar className='w-20 h-20' src={image} alt="image" size="sm" />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text_color"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text_color"
                    >
                      {fingerName}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
        </div>

        </div>
      </div>

      {isOpen? <GemsMantraResult loading={loading}/>: ''}
    </>
  )
}