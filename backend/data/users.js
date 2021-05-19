import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Yash Gupta",
    email: "yash@example.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    name: "Nilesh Gupta",
    email: "nilesh@example.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
