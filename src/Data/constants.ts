import { InitialValueProps } from "../Types/Context/BookReducer";

// Dummy data for book listing
export const DummyBookData = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publication_year: "1960",
    genre: "Fiction",
    id: "1718881027684",
  },
  {
    title: "1984",
    author: "George Orwell",
    publication_year: "1949",
    genre: "Dystopian",
    id: "1718881027685",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publication_year: "1813",
    genre: "Romance",
    id: "1718881027686",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publication_year: "1925",
    genre: "Tragedy",
    id: "1718881027687",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publication_year: "1851",
    genre: "Adventure",
    id: "1718881027688",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    publication_year: "1869",
    genre: "Historical Fiction",
    id: "1718881027689",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publication_year: "1951",
    genre: "Fiction",
    id: "1718881027690",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publication_year: "1937",
    genre: "Fantasy",
    id: "1718881027691",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publication_year: "1953",
    genre: "Dystopian",
    id: "1718881027692",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    publication_year: "1847",
    genre: "Gothic",
    id: "1718881027693",
  },
  {
    title: "The Catch-22",
    author: "Joseph Heller",
    publication_year: "1961",
    genre: "Satire",
    id: "1718881027694",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publication_year: "1932",
    genre: "Dystopian",
    id: "1718881027695",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publication_year: "1954",
    genre: "Fantasy",
    id: "1718881027696",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    publication_year: "1945",
    genre: "Satire",
    id: "1718881027697",
  },
  {
    title: "The Odyssey",
    author: "Homer",
    publication_year: "8th century BC",
    genre: "Epic",
    id: "1718881027698",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    publication_year: "1847",
    genre: "Gothic",
    id: "1718881027699",
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    publication_year: "1320",
    genre: "Epic",
    id: "1718881027700",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    publication_year: "1880",
    genre: "Philosophical",
    id: "1718881027701",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    publication_year: "1862",
    genre: "Historical Fiction",
    id: "1718881027702",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publication_year: "1866",
    genre: "Philosophical",
    id: "1718881027703",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publication_year: "1960",
    genre: "Fiction",
    id: "1718881027684",
  },
  {
    title: "1984",
    author: "George Orwell",
    publication_year: "1949",
    genre: "Dystopian",
    id: "1718881027685",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publication_year: "1813",
    genre: "Romance",
    id: "1718881027686",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publication_year: "1925",
    genre: "Tragedy",
    id: "1718881027687",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publication_year: "1851",
    genre: "Adventure",
    id: "1718881027688",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    publication_year: "1869",
    genre: "Historical Fiction",
    id: "1718881027689",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publication_year: "1951",
    genre: "Fiction",
    id: "1718881027690",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publication_year: "1937",
    genre: "Fantasy",
    id: "1718881027691",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publication_year: "1953",
    genre: "Dystopian",
    id: "1718881027692",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    publication_year: "1847",
    genre: "Gothic",
    id: "1718881027693",
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    publication_year: "1961",
    genre: "Satire",
    id: "1718881027694",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publication_year: "1932",
    genre: "Dystopian",
    id: "1718881027695",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publication_year: "1954",
    genre: "Fantasy",
    id: "1718881027696",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    publication_year: "1945",
    genre: "Satire",
    id: "1718881027697",
  },
  {
    title: "The Odyssey",
    author: "Homer",
    publication_year: "8th century BC",
    genre: "Epic",
    id: "1718881027698",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    publication_year: "1847",
    genre: "Gothic",
    id: "1718881027699",
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    publication_year: "1320",
    genre: "Epic",
    id: "1718881027700",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    publication_year: "1880",
    genre: "Philosophical",
    id: "1718881027701",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    publication_year: "1862",
    genre: "Historical Fiction",
    id: "1718881027702",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publication_year: "1866",
    genre: "Philosophical",
    id: "1718881027703",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    publication_year: "2003",
    genre: "Drama",
    id: "1718881027704",
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    publication_year: "2001",
    genre: "Adventure",
    id: "1718881027705",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    publication_year: "2006",
    genre: "Post-Apocalyptic",
    id: "1718881027706",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    publication_year: "2005",
    genre: "Historical Fiction",
    id: "1718881027707",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    publication_year: "2005",
    genre: "Thriller",
    id: "1718881027708",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publication_year: "1988",
    genre: "Adventure",
    id: "1718881027709",
  },
  {
    title: "The Catch-22",
    author: "Joseph Heller",
    publication_year: "1961",
    genre: "Satire",
    id: "1718881027694",
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publication_year: "1985",
    genre: "Dystopian",
    id: "1718881027710",
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    publication_year: "2012",
    genre: "Thriller",
    id: "1718881027711",
  },
];

//data of table heading
export const TableHeading = [
  {
    title: "Book Title",
    value: "title",
  },
  {
    title: "Author",
    value: "author",
  },
  {
    title: "Publish Year",
    value: "publication_year",
  },
  {
    title: "Genre",
    value: "genre",
  },
  {
    title: "Action",
    value: "id",
  },
];

export const initialValue: InitialValueProps = {
  user_data: [
    {
      name: "",
      email: "",
      password: "",
      token: "",
    },
  ],
  isAuth: false,
  error: false,
  book: DummyBookData,
};
