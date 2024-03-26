import Image from "next/image";

export default function Home() {
  return (
    <article class="">
      <div class="relative">
        <div class=" relative mx-auto px-4 ">
          <div class="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
            <div class="flex flex-col lg:pb-6 lg:col-span-2 justify-center">
              <h1 class="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                Protocol
              </h1>

              <p class="mt-6 text-base leading-7 text-slate-700">
                It doesn&#39;t matter if you have an API if nobody knows how to
                use it. Teach people the ins and outs of OAuth 2.0 and JWTs in
                style with Protocol, a beautiful API documentation template.
              </p>

              <div class="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  class="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                  target="_blank"
                >
                  <span>Get Started</span>
                </a>
              </div>
            </div>
            <div class="relative lg:col-span-3">
              <Image
                src="/banner.png"
                width="1600"
                height="1280"
                alt="banner"
                class="relative z-20 -mb-36 aspect-[853/682] max-w-[630px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
