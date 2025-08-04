const logos = [
  { name: "Ranch", height: "32" },
  { name: "Humata", height: "32" },
  { name: "Gitpod", height: "18" },
  { name: "Make", height: "18" },
  { name: "Zapier", height: "18" },
  { name: "Next.js", height: "16" },
  { name: "Fly.io", height: "22" },
  { name: "Niftkit", height: "21" },
  { name: "Vercel", height: "18" },
];

export default function LogoCloud() {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-2 rounded-2xl md:mt-24 md:gap-6">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="group flex h-[72px] w-[180px] flex-col items-center justify-center rounded-2xl bg-gray-100 transition-colors hover:text-red-600 md:rounded-4xl dark:bg-gray-800 dark:hover:bg-white"
        >
          <div className={`text-gray-600 group-hover:text-red-600 transition-colors`}>
            {logo.name}
          </div>
        </div>
      ))}
    </div>
  );
}