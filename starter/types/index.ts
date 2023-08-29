import { MouseEventHandler } from "react";

export interface CustomButtonProp {
    title:string;
    btnType?: "button" | "submit" | "reset" | undefined ;
    containerStyles?:string
    textStyles?:string
    rightIcon?:string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    isDisable?:boolean

}



export interface SearchManufacturerProps {
    manufacturer : string;
    setManufacturer : (manifacturer:string) => void;

}


export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number

}

export interface FilterProps {
    manufacturer:string;
    year:number;
    fuel:string;
    limit:number;
    model:string
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionsProps {
    title:string;
    value:string;
}


export interface CustomFilterProps {
    title:string;
    options: OptionsProps[];
}