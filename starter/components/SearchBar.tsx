"use client"
import Image from "next/image"
import {useRouter} from 'next/navigation'
import { SearchManufacturer } from "."
import React,{ useState } from "react"
import { useGlobalContext } from "@/utiles/context"

const SearchButtom = ({otherClasses}: {otherClasses:string}) =>(
  <button type="submit" className={`ml-3 z-10 ${otherClasses}`} >
    <Image
      src='/magnifying-glass.svg'
      alt="search icon"
      width={40}
      height={40}
      className="object-contain"/>

  </button> 

)

function SearchBar() {
    
    const [model, setModel] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const router = useRouter()
    
    const handleSearch =(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        if(manufacturer === " " && model === " "  ){
          return alert('Please Fill in the search bar')
            }
          updateSearchParams(
            model.toLowerCase(),
            manufacturer.toLocaleLowerCase())
          }
      const updateSearchParams=(model: string, manufacturer:string)=>{
        const searchParams= new URLSearchParams(window.location.search);
        if(model) {
          searchParams.set('model', model)
        }else{
          searchParams.delete('model')
        }
         if(manufacturer) {
          searchParams.set('manufacturer', manufacturer)
        }else{
          searchParams.delete('manufacturer')
        }
        const NewPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(NewPathname)
      }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}  />
         <SearchButtom otherClasses='sm:hidden'/>
      </div>
      <div className="searchbar__item">
        <Image
          src='/model-icon.png'
          alt='model-icon'
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        
        <SearchButtom otherClasses='sm:hidden' />
      </div>
       <SearchButtom otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar

