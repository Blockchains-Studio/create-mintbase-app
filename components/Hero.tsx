import Navbar from '../components/Navbar'

import { useWallet } from '../services/providers/MintbaseWalletContext'

import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const { wallet, isConnected, details } = useWallet()
  return (
    <>
      <div
        className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/blockchains-studio/image/upload/v1630950003/BCSID_LOGO_BLUE_peqpq7.png')",
        }}
      >
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-xl leading-tight md:text-3xl text-center text-red-100 mb-3">
            Build everything you imagine
          </h1>
          <h3 className="text-md md:text-lg text-center text-white ">
            Cheap, scalable and flexible infrastructure for your NFT project in Mintbase
          </h3>

          <h2>
            Powered By Blockchain Studio ID<p>
            Made With Love Near Protocol ID</p>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Hero
