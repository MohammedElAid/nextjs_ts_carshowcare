import React from 'react'
import { Apiproblem, CarCatalogue, Hero } from '@/components'
import { fetchCars } from '@/utiles';
import { AppProvider } from '@/utiles/context'
import { HomeProps } from '@/types';

export default async function page({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <AppProvider>
      <main className='overflow-hidden'>
        <Hero />
        <Apiproblem />
        <CarCatalogue allCars={allCars} isDataEmpty={isDataEmpty}/>
      </main>
    </AppProvider>
    
  )
}
 