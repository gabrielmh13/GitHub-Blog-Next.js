import Image from 'next/future/image'
import logoImg from '../../assets/logo.png'

export function Header() {
    return (
        <header className="bg-cover w-screen h-[20rem] flex justify-center items-start">
            <Image
                className='object-contain mt-16'
                src={logoImg}
                alt=""
                width={148}
                height={9}
            />
        </header>
    )
}