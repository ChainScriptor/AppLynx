"use client"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"

function WelcomeBanner() {
    const {user} = useUser();
  return (
    <div className="p-5 bg-blue-500 w-full text-white rounded-lg flex item-center gap-6">
        <Image src={'/2.png'} alt="chef" width={140} height={90}/>
        <div>
            <h2 className="font-bold text-3xl">Hello , {user?.fullName}</h2>
            <p>Welcome Back , Its time to make your new Order!!</p>
        </div>
    </div>
  )
}
export default WelcomeBanner