import React from "react";
import { Card, CardContent, CardTittle } from "../components/ui/card"; // Fixed 'CardTittle' to 'CardTitle'

import Image from "next/image"; // Import Image from next/image

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card className={`p-4 ${isDarkBackground ? 'bg-slate-800 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      {/* Replace <img> with <Image> */}
      <Image
        src={post.image}               // The image source
        alt={post.title}               // Alt text for accessibility
        className="w-full h-48 object-cover rounded-t-lg"
        width={500}                    // Set an appropriate width (adjust as needed)
        height={200}                   // Set an appropriate height (adjust as needed)
        layout="intrinsic"             // Use "intrinsic" to respect the natural image aspect ratio
      />

      <CardTittle className="text-xl font-normal mt-4 text-center">{post.title}</CardTittle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>

        <a
          href={`/post/${post.id}`}
          className={`w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackground ? 'bg-black hover:bg-red-500' : ''}`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
