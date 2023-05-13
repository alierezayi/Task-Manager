import React from "react";
import Project from "./Project";

const Projects = () => {
  const tasks = [
    {
      id: 1,
      title: "تکالیف خانه",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "1 هفته پیش",
    },
    {
      id: 2,
      title: "برنامه نویسی",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "2 روز پیش",
    },
    {
      id: 3,
      title: "ورزش",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "1 روز پیش",
    },
    {
      id: 4,
      title: "تفکر",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "5 روز پیش",
    },
    {
      id: 5,
      title: "استقامت",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "2 ساعت پیش",
    },
    {
      id: 6,
      title: "مدیتیشن",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "12 ساعت پیش",
    },
    {
      id: 7,
      title: "کار در خانه",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "6 روز پیش",
    },
    {
      id: 8,
      title: "قدم زدن",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "7 ساعت",
    },
    {
      id: 9,
      title: "مطالعه",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "./public/vercel.svg",
      dateAdded: "15 روز پیش",
    },
  ];
  return (
    <div className="w-full rounded-l-xl bg-white p-2">
      <div className="grid grid-cols-3 gap-x-5 gap-y-10">
        {tasks.map((task) => (
          <Project key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
