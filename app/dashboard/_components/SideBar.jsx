"use client"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LayoutDashboard, Shield, UserCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

function SideBar() {
  const MenuList=[
    {
      name:'Dashboard',
      icon:LayoutDashboard,
      path:'/dashboard'
    },
    {
      name:'upgrade',
      icon:Shield,
      path:'/dashboard/upgrade'
    },
    {
      name:'profile',
      icon:UserCircle,
      path:'/dashboard/profile'
    }
  ]
  const path = usePathname();
  return (
    <div className="h-screen shadow-md p-6 ">
        <div className="ml-8">
            <Image src={'/comfort.svg'} alt="logo" width={150} height={100} />
        </div>
        <div className="mt-5">
            <Button className="w-full">+ Create New Order</Button>
            <div>
              {MenuList.map((menu,index)=>(
                <div key={index}className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3
                  ${path==menu.path&&'bg-slate-200'}`}>
                  <menu.icon />
                  <h2>{menu.name}</h2>
                </div>
              ))}
            </div>
        </div>
        <div className="border p-5 bg-slate-100 rounded-lg">
          <h2 className="text-lg mb-2">Available credits:5</h2>
          <Progress value={30} />
          <h2 className="text-sm">1 Out of 5 Credits Used</h2>
          <Link href={'/dashboard/upgrade'} className="text-primary text-xs mt-3">Upgrade to create more</Link>
        </div>
    </div>
  )
}
export default SideBar