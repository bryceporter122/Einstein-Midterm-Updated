
        function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

        async function getBooks(){
            try{
                const response = await fetch("https://upadhayay.github.io/db.json");
                const data = await response.json();
                
                // js dom
                const mybooks_div = document.querySelector(".mybooks");

                for (let book of data.books){
                    if(book.published === true) {
                    console.log(book)
                    
                    const single_book_div = document.createElement("div");
                    // single_book_div.textContent = `Title: ${book.title}  Year: ${book.year} Published:${book.published}`; 
                    single_book_div.innerHTML = `
                    <img src = "images/einstein-funny-caricature-png-06242024-jo2nn0hvsva1i7tw.png" alt = "Paper Icon">
                    <div>
                    <h2> Title: ${book.title}  </h2> 
                    <p> Year: ${book.year} </p>
                    <p> Published:${book.published} </p>
                    </div>`; 
                    
                    
                    single_book_div.classList.add('single_book')

                    mybooks_div.append(single_book_div)
                }
                }
            }
            catch(error){
                // console.log("Error: ", error);
                console.log("Error in fetch;")
            }
        }
        getBooks();
        console.log("This is fetch api example")