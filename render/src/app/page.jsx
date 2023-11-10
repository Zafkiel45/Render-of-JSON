'use client'
import { useRef, useState } from "react"

export default function Home() {

  const [json, setJson] = useState('')
  const RefJson = useRef(null)
  const FetchJson = (event) => {
    const File = event.target.files[0]
    if(File) {
      let render = new FileReader();
      render.readAsText(File);
      render.onload = function (e) {
        const content = e.target.result
        const convert = JSON.parse(content);
        setJson(convert)
      }
    }
  }

  return (
      <div className='bg-slate-300 rounded-lg shadow-md flex flex-col gap-5 items-center w-[80vw] border border-slate-400 h-fit p-3'> 
        <div className='w-4/5 h-auto flex flex-col gap-4  justify-center items-center'>
          <label htmlFor="inputFile" className="bg-green-300 w-fit h-fit px-3 py-1 font-bold rounded-md shadow-sm">Escolha o arquivo</label>
          <input onChange={FetchJson} ref={RefJson} type="file" name="" id="inputFile" accept='.json' className="border p-3 rounded-md border-blue-400 bg-blue-300" />
        </div>
        <div className="bg-slate-500 border border-slate-600 w-full min-h-[200px] rounded-lg shadow-md text-white font-bold">
          <pre>{JSON.stringify(json, null, 2)}</pre>
        </div>
      </div>
  )
}
