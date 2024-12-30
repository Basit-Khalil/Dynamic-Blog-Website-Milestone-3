import React from 'react';
import BlogCard from './BlogCard';

export default function Mega() {
    const posts = [
        {
            id: '1',
            title: "Unlocking the Power of Digital Marketing: Strategies for Success",
            description: "Why Digital Marketing is Essential",
            date: "2024-12-28",
            image: "/images/profile.jpg", 
        },
        {
            id: '2',
            title: "Shopify A E-Commerce Platform",
            description: "Why Shopify is the Best E-Commerce Platform for Your Online Store",
            date: "2024-12-28",
            image: "/images/shopify.jpg", 
        },
        {
            id: '3',
            title: "Mastering SEO: A Beginner's Guide",
            description: "Understanding the importance of SEO in 2024 and how to get started.",
            date: "2024-12-25",
            image: "/images/seo.jpg", 
        },
        {
            id: '4',
            title: "Social Media Marketing Strategies for 2024",
            description: "Exploring the latest trends in social media marketing and how to leverage them.",
            date: "2024-12-20",
            image: "/images/social-media.jpg", 
        },
        {
            id: '5',
            title: "HTML & CSS For Beginners",
            description: "A look at emerging e-commerce trends and how they will shape the industry.",
            date: "2024-12-18",
            image: "/images/ecommerce.jpg", 
        },
        {
            id: '6',
            title: "The Future of Content Marketing",
            description: "How content marketing is evolving and the key trends businesses need to know.",
            date: "2024-12-15",
            image: "/images/content-marketing.jpg", 
        },
        {
            id: '7',
            title: "Javascript",
            description: "JavaScript - The Backbone of Modern Web Development",
            date: "2024-12-10",
            image: "/images/email-marketing.jpg", 
        },
        {
            id: '8',
            title: "Typescript",
            description: "*Understanding TypeScript.",
            date: "2024-12-05",
            image: "/images/video-marketing.jpg", 
        },
        {
            id: '9',
            title: "Web Development",
            description: "Web Development: The Backbone of the Digital World",
            date: "2024-12-01",
            image: "/images/ai-marketing.jpg", 
        },
        
    ];

    return (
        <div className="my-8">
            <h1 className="text-3xl font-bold text-center my-8 text-blue-500 animate-color-change">
                Exploring the World Of Digital
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div className="fade-in" key={post.id}>
                        <div className="blog-card">
                            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
