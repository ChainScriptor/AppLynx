"use client"

import { useState } from "react"
import SelectOption from "./_components/SelectOption"
import { Button } from "@/components/ui/button";

function Create() {
    const [step,setStep]=useState(0);
  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
        <h2 className="font-bold text-4xl text-primary">Start Building Your Personal Order</h2>
        <p className="text-gray-400 text-lg">Fill All details in order to generate Order material</p>

        <div className="mt-10">
          {step==0?  <SelectOption />
          :null}
        </div>
        <div className="flex justify-between w-full mt-32">
          {step!=0?  <Button variant="outline">Previous</Button>:'-'}
          <Button>Next</Button>
        </div>
    </div>

  )
}
export default Create