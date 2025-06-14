import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const page = Number(resolvedSearchParams?.page) || 1;
  const searchText = (resolvedSearchParams?.query as string) || "";
  const category = (resolvedSearchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-10 md:py-16">
        <div className="wrapper grid grid-cols-1 gap-8 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 bg-primary-100 text-primary-500 rounded-full text-4xl font-medium">
                ✨ The Future of Events
              </span>
            </div>
            <h1 className="h1-bold text-primary-500 leading-tight">
              Where Events Come to{" "}
              <span className="text-primary-600">Life</span>
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-grey-600">
              Join thousands of event enthusiasts and organizers. From tech
              meetups to art shows, create unforgettable experiences with
              Iconnect.
            </p>
            <Button
              size="lg"
              asChild
              className="button w-full sm:w-fit hover:bg-primary-600 transition-all duration-300"
            >
              <Link href="#events">Get Started</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <Image
              src="/assets/images/newhero.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] animate-float relative z-10"
              priority
            />
          </div>
        </div>
      </section>

      <section className="wrapper py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10k+", label: "Active Users" },
            { number: "5k+", label: "Events Created" },
            { number: "100+", label: "Cities" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="h3-bold text-primary-500">{stat.number}</h3>
              <p className="p-regular-16 text-grey-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-12 flex flex-col gap-8 md:gap-12"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="px-4 py-1.5 bg-primary-100 text-primary-500 rounded-full text-3xl font-medium">
            Discover Events
            </span>
          </div>
          <h2 className="h2-bold text-primary-500">
            Find Your Next <br /> Amazing Event
          </h2>
          <p className="p-regular-16 text-grey-600 max-w-2xl">
            Explore thousands of events happening around you. From local meetups
            to large-scale conferences, find your next memorable experience.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later for more exciting events"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
