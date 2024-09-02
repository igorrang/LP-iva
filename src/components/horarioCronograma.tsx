export interface HorarioCronogramaProps{
    text: string
    hora: string
}

export default function HorarioCronograma({text, hora}: HorarioCronogramaProps){
    return (
        <div className="w-[95%]  lg:max-w-[630px] flex flex-row  items-center bg-white p-1 rounded-[40px]">
            <div className=" w-full py-3 px-1 ">
                <p className="font-black text-[20px]">{hora}</p>
            </div>
            <div className="bg-black w-full h-[57px] py-3 px-5 rounded-[40px]">
                <p className="text-white  font-black text-[20px]">{text}</p>
            </div>
        </div>
    )
}