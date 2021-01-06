var arr = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  { userId: 1, id: 8, title: "quo adipisci enim quam ut ab", completed: true },
  { userId: 1, id: 9, title: "molestiae perspiciatis ipsa", completed: false },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];
/**
 * Let's use map to take what we want from the above array
 * and add a few things 😀
 */
var arr1 = arr.map((u) => {
  return {
    id: `m-${u.id}`,
    userId: u.userId,
    name: u.title,
    from: "web",
    editor: { name: "Mike", age: 99 },
  };
});

console.log(arr1);

//object destructure
var obj = arr1[0];
/**
 * Lest take out a couple properties of the above object and give name a alias of bookTitle
 */
const {
  userId,
  name: bookTitle,
  editor: { age },
} = obj;

console.log(`${userId} is ${age} and has a value of ${bookTitle}`);
