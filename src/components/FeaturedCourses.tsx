'use client';
import Link from 'next/link'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradiant';

interface Course {
    id: number,
    title: string,
    slug?: string,
    description: string,
    // lessons: string,
}

function FeaturedCourses () {
    const featuredCourses = courseData.courses.filter((course:Course) => course.title)

  return (
    <div className="p-12 bg-gray-900">
        <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Featured Courses
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Check out some of our most popular courses
            </p>
        </div>
        <div className="mt-10">
            <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {featuredCourses.map((course:Course) => (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                {/* <Link href={`/courses/${course.slug}`}> */}
                                <Link href={`#`}>
                                Learn More</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-14 text-center">
            <Link href="#" 
            className="px-4 py-2 rounded border border-neutral-900 text-neutral-800 bg-white hover:bg-gray-100 transition-duration-200">
                View All Courses
            </Link>
        </div>

    </div>
  )
}

export default FeaturedCourses