import React from 'react';
import { Card } from '../ui/card';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { prisma } from '@/lib/prisma';

const articles = [
  {
    "id": "1",
    "title": "Next.js + Prisma Setup",
    "author": {
      "name": "Manish Raj",
      "email": "manish@example.com",
      "imageUrl": "https://example.com/avatar.png"
    },
    "comments": [
      { "id": "c1", "content": "Great article!" },
      { "id": "c2", "content": "Very helpful!" }
    ]
  },
  {
    "id": "2",
    "title": "Understanding Middleware in Next.js",
    "author": {
      "name": "Priya Sharma",
      "email": "priya@example.com",
      "imageUrl": null
    },
    "comments": []
  },
  {
    "id": "3",
    "title": "Tailwind CSS Tips",
    "author": {
      "name": "Amit Verma",
      "email": "amit@example.com",
      "imageUrl": "https://example.com/amit.png"
    },
    "comments": [
      { "id": "c3", "content": "Very useful tips!" }
    ]
  }
]



const TopArticles = async () => {

    


//     const articles = await prisma.articles.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//     include: {
//       comments: true,
//       author: {
//         select: {
//           name: true,
//           email: true,
//           imageUrl: true,
//         },
//       },
//     },
//   });


  return (

    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>

        {articles.slice(0,3).map((article:any)=>(
            <Card
            key={article.id}
            className={cn(
            "group relative overflow-hidden transition-all hover:scale-[1.02]",
            "border border-gray-200/50 dark:border-white/10",
            "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
          )}>

            <div className='p-6 w-full'>

                <Link href={`/articles/${article.id}`}>

                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                {/* <Image
                  src={article.featuredImage as string}
                  alt={article.title}
                  fill
                  className="object-cover"
                /> */}
              </div>

               {/* Author Info */}
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={article.author.imageUrl as string} />
                  <AvatarFallback>
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{article.author.name}</span>
              </div>

                {/* Article Title */}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {article.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {article.category}
              </p>

              {/* Article Meta Info */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(article.createdAt).toDateString()}</span>
                <span>{12} min read</span>
              </div>



                </Link>
                
            </div>

        </Card>
        ))}

      
    </div>
    </div>
    
  );
}

export default TopArticles;
