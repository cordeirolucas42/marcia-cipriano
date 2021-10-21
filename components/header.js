import Image from 'next/image'

export default function Header({image}) {
    return (
        <header>
            <div>
                <Image src={image}></Image>
            </div>
        </header>
    )
}