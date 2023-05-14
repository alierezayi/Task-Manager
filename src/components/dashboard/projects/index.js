import React from "react";
import Project from "./Project";

const Projects = () => {
  const tasks = [
    {
      id: 1,
      title: "تکالیف خانه",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "1 هفته پیش",
    },
    {
      id: 2,
      title: "برنامه نویسی",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "2 روز پیش",
    },
    {
      id: 3,
      title: "ورزش",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "1 روز پیش",
    },
    {
      id: 4,
      title: "تفکر",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "5 روز پیش",
    },
    {
      id: 5,
      title: "استقامت",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "2 ساعت پیش",
    },
    {
      id: 6,
      title: "مدیتیشن",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "12 ساعت پیش",
    },
    {
      id: 7,
      title: "کار در خانه",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "6 روز پیش",
    },
    {
      id: 8,
      title: "قدم زدن",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنامه سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "7 ساعت",
    },
    {
      id: 9,
      title: "مطالعه",
      text: "نوشتن الگوریتم و رسم فلوچارت های آن که مربوط به درس برنا سازی می باشد",
      imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5b%2FGoogle_Tasks_2021.svg%2F1200px-Google_Tasks_2021.svg.png&tbnid=GrGZx_FBfucN0M&vet=12ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Tasks&docid=bsdGfY6VC22sQM&w=1200&h=1139&q=task%20image&ved=2ahUKEwjXpMGx3PT-AhWnI2IAHY8IDncQMygbegUIARCnAg",
      dateAdded: "15 روز پیش",
    },
  ];
  return (
    <div className="w-full px-10">
      <div>
        <h1 className="py-4 text-2xl mt-20">پروژه ها</h1>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10">
        {tasks.map((task) => (
          <Project key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
