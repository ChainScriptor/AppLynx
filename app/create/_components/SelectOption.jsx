import Image from "next/image"
import { useState } from "react";
function SelectOption() {
    const Options = [
        {
            name: 'china',
            icon: '/3.svg'
        },
        {
            name: 'italy',
            icon: '/4.svg'
        }, {
            name: 'greece',
            icon: '/5.svg'
        }
    ];
    const [selectedOption,setSelectedOption]= useState();
    return (
        <div>
            <h2 className="text-center mb-2 text-lg"> Select the country products you want to see!</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
                {Options.map((option, index) => (
                    <div key={index} className={`p-4 flex flex-col item-center border rounded-xl cursor-pointer hover:border-primary ${option?.name==selectedOption&&'border-primary'}`}
                    onClick={()=>setSelectedOption(option.name)}>
                        <Image src={option.icon} alt={option.name} width={80} height={50}/>
                        <h2 className="text-sm mt-2">{option.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SelectOption