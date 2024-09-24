import React, { useState } from 'react'
import PostItem from './PostItem'
import sports1 from '../images/sports1.jpg'
import entertainment1 from '../images/entertainment1.jpg'
import technology1 from '../images/technology1.jpg'
import education1 from '../images/education1.jpg'
import medical1 from '../images/medical1.jpg'
import science1 from '../images/science1.jpg'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: sports1,
    catagory: 'Sports',
    title: 'Conquer the Water: Wakeboarding Techniques for All Skill Levels',
    desc: "Whether you're a newbie or an experienced rider, this wakeboarding guide will help you refine your technique. Discover essential tips for maintaining balance, carving through waves, and pulling off tricks, making each ride more exhilarating than the last. Embrace the adventure, unleash your passion for wakeboarding, and elevate your skills to create unforgettable memories on the water!",
    authorId: 3
  },
  {
    id: '2',
    thumbnail: entertainment1,
    catagory: 'Entertainment',
    title: 'The Rise of DJ Popularity: Crafting Unforgettable Experiences',
    desc: "DJing has evolved into a powerful source of entertainment, captivating audiences worldwide. Explore how DJs create memorable experiences through unique mixes and engaging performances. From festivals to private parties, discover the elements that contribute to a DJ's popularity and the impact they have on the music scene and nightlife culture.",
    authorId: 3
  },
  {
    id: '3',
    thumbnail: technology1,
    catagory: 'Technology',
    title: 'The History of Rocket Propellant Fuels: From Ancient Times to Modern Space Travel',
    desc: "Discover the evolution of rocket propellant fuels, from ancient Chinese gunpowder to modern liquid and solid fuels. Explore significant milestones in rocket science and the breakthroughs that have transformed the industry, revealing how these advancements have enabled humanity's journey into space and shaped the future of exploration.",
    authorId: 3
  },
  {
    id: '4',
    thumbnail: education1,
    catagory: 'Education',
    title: 'Navigating Your Master’s Journey Abroad: A Comprehensive Guide',
    desc: "Pursuing a master’s degree abroad is an enriching experience that opens doors to global opportunities. This blog explores essential tips for choosing the right program, understanding cultural differences, managing finances, and building a support network. Discover how to make the most of your international education while creating unforgettable memories and lifelong connections.",
    authorId: 3
  },
  {
    id: '5',
    thumbnail: medical1,
    catagory: 'Medical',
    title: 'Innovations in Medical Equipment: Transforming Healthcare Delivery',
    desc: "This blog explores the latest advancements in medical equipment, highlighting technologies that enhance diagnostics, treatment, and patient care. From AI-powered imaging devices to robotic surgery systems, we delve into how these innovations improve accuracy, reduce recovery times, and increase accessibility. Join us as we examine the future of healthcare shaped by cutting-edge medical technology.",
    authorId: 3
  },
  {
    id: '6',
    thumbnail: science1,
    catagory: 'Science',
    title: 'Test Tube Trees: A Lifeline for Endangered Forests',
    desc: "Test tube trees, or plant tissue culture, provide a crucial method for conserving endangered tree species. By cultivating plants in sterile environments, researchers can efficiently propagate and restore at-risk ecosystems. This innovative approach plays a vital role in preserving biodiversity and supporting global reforestation efforts to protect our planet's precious green heritage.",
    authorId: 3
  }
]

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
      <div className='container post_container'>
      {
        posts.map(({id, thumbnail, catagory, title, desc, authorId}) => <PostItem key={id} postId={id} thumbnail={thumbnail} catagory={catagory}title={title} desc={desc} authorId={authorId}/>)
      }
      </div>
    </section>
  )
}

export default Posts
