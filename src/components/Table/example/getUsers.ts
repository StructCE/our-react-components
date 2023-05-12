// Normalmente esse tipo viria do prisma, etc.
type User = {
  id: number;
  user_name: string;
  age: number;
  status: "active" | "deactivated";
  role: "super_admin" | "admin" | "user";
};

export function getUsers() {
  const users: User[] = [
    { id: 1, user_name: "art", age: 20, status: "active", role: "admin" },
    {
      id: 2,
      user_name: "Tata Werneck",
      age: 3,
      status: "deactivated",
      role: "user",
    },
    {
      id: 3,
      user_name: "Caetas",
      age: 0,
      status: "active",
      role: "user",
    },
    {
      id: 4,
      user_name: "Nicolau",
      age: 23,
      status: "active",
      role: "super_admin",
    },
    {
      id: 5,
      user_name: "Renatinho sangue bom (demais)",
      age: 250,
      status: "active",
      role: "user",
    },
    {
      id: 6,
      user_name: "Tres21",
      age: 321,
      status: "deactivated",
      role: "admin",
    },
  ];

  return users;
}
