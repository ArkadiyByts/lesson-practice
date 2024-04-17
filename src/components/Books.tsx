
  
export const Books = ({ books }) => (
   
    <ul>
      {books.map((book, index) => (
        <li key={index}>{book.name}</li>
      ))}
    </ul>
    
  );