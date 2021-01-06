// ===================== Search Bar jQuery =================
// console.log('hello');

$(() => {
  const $apiForm = $('#apiForm')
        $($apiForm).on('submit', (event) => {
          event.preventDefault()
          const userInput = $('.searchInput').val()
          // console.log(userInput);
          $('.searchInput').val('')

      $.ajax({
        url: `/products/api?name=` + userInput + ``,
        type: "GET"
      }).then(
        (data) => {
            console.log(data)

            for(let i = 0; i < data.length; i++){
              console.log(data[0].id)
              let search = data[0].id
              let company = data[0].company
              // create an if else statement where when company name =  this, go to that index page, otherwise go to the other index page
              //   using window.location.pathname =
                if(search === 1){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d1/showTableTop/'
                }else if(search === 2){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d2/showTableTop/'
                }else if(search === 3){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d3/showTableTop/'
                }else if(search === 4){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d4/showTableTop/'
                }else if(search === 5){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d5/showTableTop/'
                }else if(search === 6){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d6/showTableTop/'
                }else if(search === 7){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d7/showTableTop/'
                }else if(search === 8){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d8/showTableTop/'
                }else if(search === 9){
                  window.location.pathname = '/tableTop/5ff50b01cd00c000172002d9/showTableTop/'
                }else if(search === 10){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b90/showTableTopia/'
                }else if(search === 11){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b91/showTableTopia/'
                }else if(search === 12){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b92/showTableTopia/'
                }else if(search === 13){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b93/showTableTopia/'
                }else if(search === 14){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b94/showTableTopia/'
                }else if(search === 15){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b95/showTableTopia/'
                }else if(search === 16){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b96/showTableTopia/'
                }else if(search === 17){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b97/showTableTopia/'
                }else if(search === 18){
                  window.location.pathname = '/tableTopia/5ff5e27d6b0f6208d74d7b98/showTableTop/'
                }
            }

      }, (error) => {
        alert(`You must have spelled something wrong. Please check your spelling and try again`)
        console.log(`${error.statusText.toUpperCase()}:bad request`);
      }
    )
  })
})
