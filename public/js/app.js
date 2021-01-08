// ===================== Search Bar jQuery =================
// console.log('hello');

$(() => {
  const $apiForm = $('#apiForm')
        $($apiForm).on('submit', (event) => {
          event.preventDefault()
          const userInput = $('.searchInput').val()
          // console.log(userInput);
          $('.searchInput').val('')
          // console.log(userInput);
      $.ajax({
        url: `/products/api?name=` + userInput + ``,
        type: "GET"
      }).then(
        (data) => {
            console.log(data)

            for(let i = 0; i < data.length; i++){
              console.log(data[0].id)
              console.log(data[i]);
              console.log(data[0]);
              let search = data[0].id
              let company = data[0].company
              let name = data[0].name
              // create an if else statement where when company name =  this, go to that index page, otherwise go to the other index page
              //   using window.location.pathname =
                if(search === 1){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea1a/showTableTop/`
                }else if(search === 2){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea1b/showTableTop/`
                }else if(search === 3){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea1c/showTableTop/`
                }else if(search === 4){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea1d/showTableTop/`
                }else if(search === 5){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea1e/showTableTop/`
                }else if(search === 6){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea1f/showTableTop/`
                }else if(search === 7){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea20/showTableTop/`
                }else if(search === 8){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea21/showTableTop/`
                }else if(search === 9){
                  window.location.pathname = `/tableTop/5ff7d706c4f92c16e5b3ea22/showTableTop/`
                }else if(search === 10){
                  window.location.pathname = `/tableTopia/5ff7d70bc4f92c16e5b3ea23/showTableTopia/`
                }else if(search === 11){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea24/showTableTopia/'
                }else if(search === 12){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea25/showTableTopia/'
                }else if(search === 13){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea26/showTableTopia/'
                }else if(search === 14){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea27/showTableTopia/'
                }else if(search === 15){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea28/showTableTopia/'
                }else if(search === 16){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea29/showTableTopia/'
                }else if(search === 17){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea2b/showTableTopia/'
                }else if(search === 18){
                  window.location.pathname = '/tableTopia/5ff7d70bc4f92c16e5b3ea2a/showTableTop/'
                }
            }

      }, (error) => {
        alert(`You must have spelled something wrong. Please check your spelling and try again`)
        console.log(`${error.statusText.toUpperCase()}:bad request`);
      }
    )
  })
})
