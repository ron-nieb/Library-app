import React  from "react";
import { useState,useEffect } from "react";
import "../css/Services.css"




function Services() {
    const [books , setBooks] = useState([])
    const [showBooks, setShowBooks] = useState(false);

    const [spaces, setSpaces] = useState([])
    const [showSpaces, setShowSpaces] = useState(false)
    const [isSpaceAvailable, setIsSpaceAvailable] = useState(true); // Add this line

    const [periodicals, setPeriodicals] = useState([])
    const [showPeriodicals, setShowPeriodicals] = useState(false)



    useEffect(() => {
            fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
        }, []);
   
    useEffect(() => {
            fetch('http://localhost:3000/space')
            .then(res => res.json())
            .then(data => setSpaces(data))
        }, []);

    useEffect(() => {
            fetch('http://localhost:3000/periodicals')
            .then(res => res.json())
            .then(data => setPeriodicals(data))
        }, []);

        const handleShowBooks = () => {
            setShowBooks(true);
            setShowSpaces(false);
            setShowPeriodicals(false);
          };


        const handleReserveBook = (bookId) => {
            setShowBooks(false);
            showRegistrationForm(true);
          
            const updatedBooks = books.map((book) => {
              if (book.id === bookId) {
                return {
                  ...book,
                  available_books: book.available_books - 1
                };
              }
              return book;
            });
            setBooks(updatedBooks);


          };

        function showRegistrationForm(show) {
            let form = document.getElementById("registration-form");
            form?.style.setProperty("display", show ? "block" : "none");
          }
    

        const handleShowSpaces = () => {
            setShowSpaces(true);
            setShowBooks(false);
            setShowPeriodicals(false);
        }

        const handleReserveSpace = () => {
          setShowSpaces(false);
          if (isSpaceAvailable) {
            showRegistrationSpaceForm(true);
            setIsSpaceAvailable(false);
          } else {
            alert("Sorry! This space is already taken.");
          }
        };
        

        function showRegistrationSpaceForm(show) {
            let form = document.getElementById("space-form");
            form?.style.setProperty("display", show ? "block" : "none");
            
          }

        const handleShowPeriodicals = () => {
            setShowPeriodicals(true);
            setShowSpaces(false);
            setShowBooks(false)
        }

        const handleReservePeriodical = () => {
            setShowPeriodicals(false);
            showPeriodicalsForm(true);
          };

        function showPeriodicalsForm(show) {
            let form = document.getElementById("periodicals-form");
            form?.style.setProperty("display", show ? "block" : "none");
          }

        
    
    return(
        <>
            <h1 className="Start">Services</h1>
            <div className="icons">
                <div className="icons-container">
                    <h3 className="container-header">Our Books</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZexRYve7e39-JvKg3-wjMOPmbiKHW3vG1w&usqp=CAU" alt="books" className="image-icons" />
                    <br></br>
                    <p>Search for a book in our Library Collection and reserve one today</p>
                    <button onClick={handleShowBooks}>Our Books</button>
                </div>
            <div className="icons-container">
                <h3 className="container-header">Our Spaces</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzN9uZbNOmtVqKhIRY4Vlc1gd1fwhAo_ZeQ&usqp=CAU" alt="spaces" className="image-icons" />
                <br></br>
                <p>You can now book a physical space for you and/or your group</p>
                <button onClick={handleShowSpaces}>Our Spaces</button>
               
            </div>
                <div className="icons-container">
                    <h3 className="container-header">Our Periodicals</h3>
                    <img src="https://images.unsplash.com/photo-1523249322636-7defc1f0c35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyaW9kaWNhbHMlMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="spaces" className="image-icons" />
                    <br></br>
                    <p>Get indepth knowledge with our featured periodicals books</p>
                    <button onClick={handleShowPeriodicals}>Our Periodicals</button>     
                </div>
            </div>
            
            {showBooks && (
          <>
            <h1 className="content-header">Our Books</h1>
            <div className="books-card">
                
              {books.map((book) => (
                
                <div className="book-item" key={book.id}>
                  <p className="book-title">Title: <span>{book.title}</span></p>
                  <img className="book-image" src={book.image} alt="my books" />
                  <p>Author: <span>{book.author}</span></p>
                  <p>Genre: <span>{book.genre}</span></p>
                  <p className="abstract">Abstract: <span>{book.abstract}</span></p>
                  <p>Language: <span>{book.language}</span></p>
                  <p>No Available: <span>{book.available_books}</span></p>
                  <button onClick={() => handleReserveBook(book.id)} className="reserve-book">Reserve a Book</button>


                </div>
                
              ))}
             
            </div> 
          </>
        )}
         
            <form id="registration-form" style={{display: 'none'}}>
                <label for="title">Title of Book:</label>
                <input type="text" id="title" name="title" required/>

                <label for="author">Author:</label>
                <input type="text" id="author" name="author" required />

                <label for="publication_year">Publication Year:</label>
                <input type="number" id="publication_year" name="publication_year" required/>

                <label for="isbn">ISBN:</label>
                <input type="text" id="isbn" name="isbn"/>

                <label for="card_number">Library Card Number:</label>
                <input type="text" id="card_number" name="card_number" required />

                <label for="booking_date">Date of Booking:</label>
                <input type="date" id="booking_date" name="booking_date" required />

                <label for="return_date">Expected Date of Return:</label>
                <input type="date" id="return_date" name="return_date" required />

                <label for="notes">Additional Notes/Comments:</label>
                <textarea id="notes" name="notes"></textarea>

                <button type="submit" onClick={() => {showRegistrationForm(false)
                alert('Your Book has been reserved. Thank You!')
                }} >Submit</button>
            </form>

            
            {showSpaces && (
          <>
            <h1 className="content-header">Our Spaces</h1>
            <div className="books-card">
            {spaces.map(space => (
                <div className="book-item">
                    <img  className="book-image" src={space.image} alt="my books" />
                    <p>{space.space_type}</p>
                    <p>Location: {space.location}</p>
                    <p>Capacity: {space.capacity}</p>
                    <button onClick={handleReserveSpace} className="reserve-book">Book a Space</button>
                </div>
            ))}
            </div>
        </>
            )}

                    <form id="space-form" style={{display: 'none'}}>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required/>

                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" required/>

                    <label for="start-time">Start Time:</label>
                    <input type="time" id="start-time" name="start-time" required/>

                    <label for="end-time">End Time:</label>
                    <input type="time" id="end-time" name="end-time" required/>

                    <label for="num-people">Number of People:</label>
                    <input type="number" id="num-people" name="num-people" required/>

                    <button type="submit" value='book' onClick={() => {showRegistrationSpaceForm(false)
                alert('Your Space has been reserved. Thank You!')
                }} >Submit</button>
                    </form >

            
                {showPeriodicals && (
          <>
          <h1 className="content-header">Periodicals</h1>
          <div className="books-card">
            {periodicals.map(periodical => (
                <div className="book-item">
                    <img  className="book-image" src={periodical.image} alt="my books" />
                    <p>Title: {periodical.title}</p>
                    <p>Editor: {periodical.editor}</p>
                    <p  className="abstract">Description: {periodical.description}</p>
                    <p>Genre: {periodical.genre}</p>
                    <button onClick={handleReservePeriodical} className="reserve-book">Reserve a Book</button>
                </div>
                
            ))}
            </div>
            </>
            )}
            <form id="periodicals-form" style={{display: 'none'}}>
                <label for="title">Title of Book:</label>
                <input type="text" id="title" name="title" required/>

                <label for="author">Author:</label>
                <input type="text" id="author" name="author" required />

                <label for="publication_year">Publication Year:</label>
                <input type="number" id="publication_year" name="publication_year" required/>

                <label for="isbn">ISBN:</label>
                <input type="text" id="isbn" name="isbn"/>

                <label for="card_number">Library Card Number:</label>
                <input type="text" id="card_number" name="card_number" required />

                <label for="booking_date">Date of Booking:</label>
                <input type="date" id="booking_date" name="booking_date" required />

                <label for="return_date">Expected Date of Return:</label>
                <input type="date" id="return_date" name="return_date" required />

                <label for="notes">Additional Notes/Comments:</label>
                <textarea id="notes" name="notes"></textarea>

                <button type="submit" onClick={() => {showRegistrationForm(false)
                alert('Your Periodical-Book has been reserved. Thank You!')
                }} >Submit</button>
            </form>
            
        </>    
    )
    
            }

export default Services;