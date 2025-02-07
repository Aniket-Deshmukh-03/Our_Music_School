"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"

function UpcomingBatches() {

    const featuredWebinars = [
        {
            title: "Music Theory",
            description: "Learn the basics of music theory and how to apply it to your music.",
            link: '#'
        },
        {
            title: "Music Production",
            description: "Learn how to produce music using your computer and software.",
            link: '#/'
        },
        {
            title: "Music Business",
            description: "Learn how to market your music, get gigs, and make money as a musician.",
            link: '/##'
        },
        {
            title: "Music Composition",
            description: "Learn how to compose music for film, TV, and other media.",
            link: '###'
        },
        {
            title: "Music Performance",
            description: "Learn how to perform live and connect with your audience.",
            link: '/#'
        },
        {
            title: "Music Technology",
            description: "Learn how to use technology to create and perform music.",
            link: '##'
        },
    ]


  return (
    <div  className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide">
                    FEATURED WEBINARS
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Enhance Your Skills With Our Upcoming Webinars
                </p>
            </div>

            <div className="mt-10">
                <HoverEffect 
                items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.link,
                    }
                ))}/>
            </div>

            <div className="mt-10 text-center">
                <Link href={"/"} className="px-4 py-2 rounded border border-neutral-900 text-neutral-800 bg-white hover:bg-gray-100 transition-duration-200">
                View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingBatches