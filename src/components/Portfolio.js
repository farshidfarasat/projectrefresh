import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="py-section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="font-manrope font-semibold text-on-surface" style={{ fontSize: "32px" }}>
              Portfolio of Excellence
            </h2>
            <p className="mt-3 text-body-md text-on-surface-variant max-w-xl">
              Recent transformations across London&rsquo;s most iconic neighbourhoods.
            </p>
          </div>
          <Link href="/portfolio" className="text-body-md font-semibold text-primary underline underline-offset-4 hover:text-secondary transition-colors duration-150">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKsD9dWo9k7M8FooHxqS1kObN1DKGgKvvt-O3AplYwiYjv0mJ3oXrdwGE9kME_CHA_9itssi6o1pZE0HMm16EGjS2cGgmvgHBtB4Su2wYcgKQoNDNpor-0cB3oq9NmxSWf8sFzT_0MvqZCT7kHJJ8M7IWl6osNiDTrdtZTRYzvVO23EPL5gR1btwDxSewMGabxPmOCf2Pk0bH92Gw-iXVrN1uQcrbjZAjYAfPSK8uJaP_7uUuu8h1wvvTeq_Sym0txhrhnCpbKYLJD"
              alt="Kensington / Victorian Restoration"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
              <span className="text-white font-semibold font-manrope text-body-lg">Kensington / Victorian Restoration</span>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBSqsOwWGzn20PGHZ6veJj3Qxn7dAuvEL7QGLkDjq_6XLHF-2bvB_6YxxgX0eua25_bYJ7XbYHkrRpFs5QjnsyCSWTchu8y9FkhmtLvwSNwCuWB4YRdeZG1yWpOjPOWlmZrLj59OQ0EDUeuDU3tbVl1ykMYc2mXzyEeNOFuqMf-HueG9mx4Abh8U5IOuIncSPOJRGUZdVpJOFCYYsa89BVg5H6-CTGv7Dtf6KdDnaN-3diRexBwNrOcafBAoFIilJjByR-KnygvGv"
              alt="Shoreditch / Modern Loft Refresh"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <span className="text-white font-semibold font-manrope text-body-md">Shoreditch / Modern Loft Refresh</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCN3qtMeQQbGoz631ZS3UfAESrXr7jh28BTXHqXdHrRHepfeR6JZca0tgMu1bzIbwLGCQI-h9i76hOZmVk69UcGnuZtvfH86EhaXloJgHV99b_ZiPqClC6Bg4zFHoYWiSuJZJ6jHz7t-AsYPQ93wV77bJd6YL1UqI4hE8zr9Jujeuz8JSZ415dyZYg1CgV_REkxiXDqijQXNEA6negpW4YZ7gblFxFB8iLVXPxay535EIqpiNnQ6kUDdCqGoB9C8W3Hrxl-EDmEjyk"
              alt="Fulham / Bespoke Kitchen Finish"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <span className="text-white font-semibold font-manrope text-body-md">Fulham / Bespoke Kitchen Finish</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
