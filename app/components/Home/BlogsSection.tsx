"use client"
import React, { useEffect, useState } from 'react';
import MenuLinks from '../global/MenuLinks';
import { IBlog, blogs } from '@/app/types';
import Card from '../global/Card';
import BlogMainCard from '../global/BlogMainCard';

const BlogsSection: React.FC = () => {
  const [blogLinks, _setBlogLinks] = useState<string[]>(["All Blogs", "Trends", "Research", "Research", "In-house Knowledge"])
  let [mainBlog, setMainBlog] = useState<IBlog>()
  let [secondaryBlogs, setBlogs] = useState<IBlog[]>([])

  useEffect(() => {
    setMainBlog(mainBlog = blogs[0])
    setBlogs(secondaryBlogs = blogs)
  }, [mainBlog])

  return (
    <>
      <section className='lg:px-[72px] px-5 pt-[100px] pb-14 bg-neutral-50'>
        <div className="flex flex-wrap max-w-[1721px] mx-auto">
          <div className="w-full flex justify-between items-center lg:flex-nowrap flex-wrap mb-16">
            <div className='lg:w-auto w-full lg:text-left text-center lg:mb-0 mb-6'>
              <h2 className='2xl:text-8xl lg:text-[64px] text-[40px] font-bold lg:leading-[76px] leading-[48px] lg:tracking-[-0.64px] tracking-[0.4px] text-neutral-700'>Blogs</h2>
            </div>
            <div className='lg:w-auto w-full'>
              <MenuLinks links={blogLinks} />
            </div>
          </div>
          {mainBlog && (
            <div className="w-full mb-20">
              <BlogMainCard tags={mainBlog!.tags} title={mainBlog!.title} readTime={mainBlog!.readTime} date={mainBlog!.date} image={mainBlog!.image} />
            </div>
          )}
          <div className='w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
            {secondaryBlogs.length > 0 && (
              <>
                {secondaryBlogs.map((blog: IBlog, index: number) => {
                  return (
                    <React.Fragment key={`${blog.image}${index}`}>
                      {index > 0 && <Card tags={blog.tags} title={blog.title} date={blog.date} image={blog.image} readTime={blog.readTime} />}
                    </React.Fragment>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;