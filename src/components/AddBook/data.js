import uuid from "react-uuid";

const data = [
  {
    id: uuid(),
    title: "Game of Thrones",
    author: "George .R. Martin",
    pages: 780,
    isRead: false,
  },
  {
    id: uuid(),
    title: "Lord of the Rings",
    author: "J. R. R. Tolkien",
    pages: 300,
    isRead: true,
  },
  {
    id: uuid(),
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 450,
    isRead: false,
  },
];

export default data;
