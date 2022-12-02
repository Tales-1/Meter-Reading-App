import data from "./data"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

interface Data {
    date:string
    gas:number
    electricDay:number
    electricNight:number
    dailyUsed:{gasD:number, dayD:number, nightD:number}
}

type Row = {
    arr:(string | {name:string, value:number, i?:number})[]
    edit:boolean
    saveData: React.Dispatch<React.SetStateAction<Data[]>>
}

const Month:React.FC = () => {
    const navigate = useNavigate()
    const [edit,setEdit] = useState(false)
    const [recordInfo,setRecordInfo] = useState(data)

    const displayRows = recordInfo.map((item,i) => {
    const { date,gas,electricDay,electricNight,dailyUsed:{gasD,dayD,nightD} } = item

    const arr= [date,
            {name:"gas",value:gas,i},
            {name:"electricDay", value:electricDay,i},
            {name:"electricNight", value:electricNight,i},
            {name:"gasD",value:gasD,},
            {name:"dayD",value:dayD},
            {name:"nightD",value:nightD}]
    return (
        <TableRow key={i} 
                arr = {arr}
                edit={edit}
                saveData = {setRecordInfo}
                />
        )   
    })

    return ( 
        <div className="fixed h-screen w-screen shadow-card text-sm bg-white flex">
            <div className="flex flex-col h-full justify-center gap-6 w-[12%]">
                <h1 className="w-3/4 mx-auto text-lg text-center">
                    DECEMBER 2022
                </h1>
                <button className="w-3/4 mx-auto block text-lg border-2 border-slate-200 p-2 disabled:opacity-30" 
                        onClick={(e)=>{
                            
                            setEdit(prev => !prev)

                        }}
                        disabled={edit}>
                  Edit
                </button>
                <button className="w-3/4 mx-auto block text-lg border-2 border-slate-200 p-2 disabled:opacity-30" 
                        disabled={!edit} 
                        onClick={(e)=>{
                            
                            setEdit(prev => !prev)}
                            }>
                        Save Changes
                </button>
                <button className="w-3/4 mx-auto block text-lg border-2 border-slate-200 p-2" onClick={(e)=>{
                    
                    navigate(-1)
                    }}>
                        Go Back
                </button>
            </div>

            <div className="grid grid-cols-7 grid-rows-31 place-items-center gap-[6px] m-auto relative w-10/12 h-11/12 text-[0.8rem]">
                <h2 className="border-b-2 border-black w-4/5 text-center">Date</h2>
                <h2 className="border-b-2 border-black w-4/5 text-center">Gas</h2>
                <h2 className="border-b-2 border-black w-4/5 text-center">Electric - Day</h2>
                <h2 className="border-b-2 border-black w-4/5 text-center">Electric - Night</h2>
                <h2 className="border-b-2 border-black w-4/5 text-center col-start-5 col-span-3">Daily Usage</h2>
                {displayRows}
            </div>
        </div>
    )
}

function TableRow({arr,edit,saveData}:Row) { 
    
    const displayValues = arr.map((value,index) => {
        if(typeof value === "string"){
            return(
                <span key={index}>{value}</span>
            )
        } else if (edit && index > 0 && index < 4){
                return ( <input type="number" key={index} onChange={(e) => {
                            saveData((prev) => {
                                let copy = [...prev]
                                if(value.i === undefined) return copy
                                copy[value.i] = {...copy[value.i], [value.name]:e.target.value}
                                console.log(index)
                                return copy
                        }) }}/>)

            } else return (
                <span key={index}>{value.value}</span>
            )
        }
    )
    return (
        <div
            className="col-start-1 col-span-full w-full grid grid-cols-7 place-items-center border-b-[1px] border-black pb-[1px]">
            {displayValues}
            {/* <span id="date" className="text-xs">{date}</span>
            <span id="gas" >{gas}</span>
            <span id="day">{electricDay}</span>
            <span id="night">{electricNight}</span>
            <span id="daily-gas"><span className="text-xs">Gas: </span> {gasD}</span>
            <span id="daily-electric-d"><span className="text-xs">Electric Day: </span>{dayD}</span>
            <span id="daily-electric-n"><span className="text-xs">Electric Night: </span>{nightD}</span> */}
        </div>
    )
}
export default Month