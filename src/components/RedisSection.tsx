import { Button } from '@/components/ui/button';
import { FileText, Plus, CircleNumber1, CircleNumber2, CircleNumber3 } from 'lucide-react';

const features = [
  {
    title: "Highly Available, Infinitely Scalable",
    items: [
      "99.99% uptime guarantee",
      "Automatic scaling to meet your demands", 
      "No server management required"
    ]
  },
  {
    title: "Global Low Latency", 
    items: [
      "Lightning-fast response times worldwide",
      "Multi-region replication options",
      "Optimize for your users, wherever they are"
    ]
  },
  {
    title: "Durable, Persistent Storage",
    items: [
      "In-memory speed with disk-like persistence",
      "Data safety without sacrificing performance", 
      "Automatic backups"
    ]
  }
];

const examples = [
  { name: "Caching", active: true },
  { name: "Session Management", active: false },
  { name: "Rate Limiting", active: false },
  { name: "Leaderboards", active: false },
  { name: "Chat", active: false }
];

export default function RedisSection() {
  return (
    <div className="-mx-6 p-6 sm:mx-auto sm:p-8 bg-white shadow sm:rounded-4xl dark:bg-white/10">
      <div className="mb-8 flex flex-col items-center gap-4 py-4">
        <h2 className="text-2xl font-medium text-emerald-800 dark:text-gray-900">
          Low-latency, serverless key-value store
        </h2>
        <div className="xs:flex-row flex flex-col justify-center gap-3">
          <Button 
            variant="secondary" 
            className="bg-emerald-800/20 dark:bg-gray-200 dark:hover:bg-emerald-800/30 text-emerald-800 hover:bg-emerald-800/30 h-[42px] px-5"
          >
            Documentation
            <FileText className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white h-[42px] px-5">
            Create Database
            <Plus className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-3 sm:place-items-center sm:gap-8">
        {features.map((feature, index) => (
          <article key={index} className="flex flex-col gap-4 rounded-2xl p-6 text-left sm:h-full sm:p-8 bg-gray-100 dark:bg-gray-800">
            <h4 className="font-display text-lg font-semibold leading-tight sm:text-2xl">
              {feature.title.split(', ').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && <br className="hidden sm:block" />}
                  {i === 1 && <br className="hidden sm:block" />}
                </span>
              ))}
            </h4>
            <ul className="">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2 py-px sm:py-1">
                  <span className="shrink-0 text-red-600">
                    {itemIndex === 0 && <CircleNumber1 className="h-6 w-6" strokeWidth="1.5" />}
                    {itemIndex === 1 && <CircleNumber2 className="h-6 w-6" strokeWidth="1.5" />}
                    {itemIndex === 2 && <CircleNumber3 className="h-6 w-6" strokeWidth="1.5" />}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <div className="col-span-1 flex w-full flex-col overflow-hidden rounded-2xl bg-black sm:col-span-3 md:flex-row">
          <div className="w-full min-w-[100px] overflow-hidden md:w-[258px]">
            <div className="hidden h-10 items-center bg-zinc-800 px-6 text-[13px] text-white/40 md:flex">
              <span className="translate-y-[2px]">EXAMPLES</span>
            </div>
            <div className="flex w-full flex-wrap justify-center px-3 py-4 md:block">
              {examples.map((example, index) => (
                <button
                  key={index}
                  className={`flex h-[32px] items-center whitespace-nowrap rounded-md px-3 transition-colors md:w-full ${
                    example.active 
                      ? 'justify-between bg-white text-black' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span className="truncate">{example.name}</span>
                  {example.active && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/50">
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="min-w-0 flex-grow">
            <div className="flex h-10 border-0 border-l-2 border-zinc-700 bg-zinc-800 px-1 pt-2">
              <button className="flex h-full items-center px-5 text-[13px] border-t-2 border-emerald-500 bg-black text-white">
                TypeScript
              </button>
              <button className="flex h-full items-center px-5 text-[13px] border-t-2 border-transparent text-white/60">
                Python
              </button>
            </div>
            <div className="h-[278px] min-h-0 w-full border-0 border-white/10 px-[6px] py-6 md:border-l-2">
              <pre className="h-full overflow-x-scroll overflow-y-scroll text-[.86em] text-white bg-gray-900 p-4 rounded">
                <code>
{`import { Redis } from "@upstash/redis";
const redis = Redis.fromEnv();

const cacheKey = \`item:\${itemId}\`;

// Check cache
const cachedItem = await redis.get(cacheKey);
if (cachedItem) {
  console.log("Cache hit");
  return JSON.parse(cachedItem);
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}