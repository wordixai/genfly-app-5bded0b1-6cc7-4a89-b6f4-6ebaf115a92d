export default function FastSection() {
  return (
    <section id="fast" className="relative -z-10 mt-20 h-[320px] overflow-hidden sm:h-[400px] md:mt-32 xl:h-[500px]">
      <div className="absolute left-1/2 top-24 -z-10 w-full -translate-x-1/2 h-[200px] md:h-[400px] rounded-[100%] bg-red-600 opacity-10 blur-[60px] md:blur-[90px] pointer-events-none"></div>
      
      <h5 className="absolute inset-x-0 -z-20 font-display text-[12vw] font-bold leading-tight xl:text-[180px] whitespace-nowrap bg-gradient-to-br bg-clip-text text-transparent animate-pulse from-red-600 via-red-600 to-yellow-300">
        Fast Anywhere
      </h5>
      
      <img 
        src="https://upstash.com/globe-light.webp" 
        alt="upstash region map" 
        className="absolute inset-x-0 left-1/2 top-[8vw] -z-10 -translate-x-1/2 xl:top-[110px] dark:hidden w-full max-w-screen-2xl rounded-full shadow-[0px_0px_80px_rgba(16,185,129,.3)]" 
      />
      
      <img 
        src="https://upstash.com/globe-dark.webp" 
        alt="upstash region map" 
        className="absolute inset-x-0 left-1/2 top-[8vw] -z-10 hidden -translate-x-1/2 xl:top-[110px] dark:block w-full max-w-screen-2xl rounded-full shadow-[0px_0px_80px_rgba(16,185,129,.3)]" 
      />
      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[260px] bg-gradient-to-b from-transparent to-gray-50 dark:from-transparent dark:to-gray-800"></div>
      
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 items-center gap-4 p-6 shadow-md md:grid-cols-4 rounded-2xl bg-white backdrop-blur dark:bg-gray-800 md:gap-12 md:rounded-4xl md:px-12 md:py-6">
          <div>
            <div className="font-display text-lg font-semibold tabular-nums text-red-600 md:text-3xl">40B</div>
            <h5 className="text-sm opacity-60 md:mt-1 md:text-base">Redis Commands</h5>
          </div>
          <div>
            <div className="font-display text-lg font-semibold tabular-nums text-red-600 md:text-3xl">90M</div>
            <h5 className="text-sm opacity-60 md:mt-1 md:text-base">QStash Messages</h5>
          </div>
          <div>
            <div className="font-display text-lg font-semibold tabular-nums text-red-600 md:text-3xl">8M</div>
            <h5 className="text-sm opacity-60 md:mt-1 md:text-base">Vector Queries</h5>
          </div>
          <div>
            <div className="font-display text-lg font-semibold tabular-nums text-red-600 md:text-3xl">&gt;99.99%</div>
            <h5 className="text-sm opacity-60 md:mt-1 md:text-base">Uptime</h5>
          </div>
        </div>
        <p className="mt-2 italic">* weekly average</p>
      </div>
    </section>
  );
}