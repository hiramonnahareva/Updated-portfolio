
import gradient from "./Gradient.svg";
import Image from 'next/image';
import logo from './logo.svg';

export default function Footer() {
  return (
    <div className='flex justify-center relative'>
        <Image src={gradient} alt={gradient} />
        <div className='absolute top-[28px]'>
            <Image className="w-14" src={logo} alt="Logo"/>
            <div className=""></div>
        </div>
    </div>   
  )
}
