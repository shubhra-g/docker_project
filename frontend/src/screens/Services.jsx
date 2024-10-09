import React from 'react'
import {Link} from 'react-router-dom'

function Services() {
  return (
    <div>
              <section className="flex items-center h-full p-16 dark:bg-black dark:text-gray-100">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span className="sr-only">Error</span>Coming Soon
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">Our Developers are currently working on this Page. </p>
        <p className="mt-4 mb-8 dark:text-gray-400">Don't Worry, We will let you know once Completed. You can find plenty of other Job Offers on our homepage.</p>
        <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-yellow dark:text-gray-900">Back to homepage</Link>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Services