

export default function Home() {
  return (
    <div >
      <h1 className="text-3xl font-bold underline">
        crypto app
      </h1>
      

      <main className="columns-2xs">
        {/* left side bar - trending  */}
        <div className="w-[20rem] border-x-4 border-red-500">
          left sidebar
        </div>

        {/* right - cards */}
        <div className="w-[40rem] border-x-4 border-purple-400 ml-20">
          right
        </div>
        
      </main>

      
    </div>
  )
}
