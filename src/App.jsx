import React from "react";
import { Header } from "./components/Header";

import styles from "./App.module.css"

import "./global.css"; 
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1, 
    author:{ 
      authorUrl: "https://github.com/Matheusmottaa.png", 
      name: 'John Doe', 
      role: 'Full Stack Developer'
    }, 
    content: [
      {type: "paragraph", content: "What's up guys 👋"}, 
      {type: "paragraph", content: "          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus incidunt nesciunt numquam, molestias quam, ab inventore saepe sunt commodi ipsa labore, aliquam earum amet consequuntur. \n 🚀#NewProject" },
      {type: "link", content: "John Doe Github"}, 
      {type: "link", content: "John.design/project"}
    ],
    publishedAt: new Date('2022-06-10 10:00')
  }, 
  {
    id: 2, 
    author:{ 
      authorUrl: "https://github.com/torvalds.png", 
      name: 'Linus Torvalds', 
      role: 'Software Engineering'
    }, 
    content: [
      {type: "paragraph", content: "What's up guys 👋"}, 
      {type: "paragraph", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus incidunt nesciunt numquam, molestias quam, ab inventore saepe sunt commodi ipsa labore, aliquam earum amet consequuntur. \n 🚀#NewProject" },
      {type: "link", content: "John Doe Github"}, 
      {type: "link", content: "John.design/project"}
    ],
    publishedAt: new Date('2022-06-09 21:00')
  }, 
]

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => { 
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content} 
              publishedAt={post.publishedAt}
            />
            ); 
          })}
        </main>
      </div>
    </>
  ); 
}


