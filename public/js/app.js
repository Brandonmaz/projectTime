// ===================== Search Bar jQuery =================
console.log('hello');
$(() => {
    const formTest =
      $('form').on('submit', (event) => {
        event.preventDefault()
        const userInput = $('input').val()
        console.log(userInput);
    $.ajax({
      // url: `https://nextstepinlife.herokuapp.com/products/api?name=` + userInput + ``,
      url: `https://nextstepinlife.herokuapp.com/tableTop/api?name=` + userInput + ``,
      // url: `https://nextstepinlife.herokuapp.com/tableTopia/api?name=` + userInput + ``,
      type: "GET"
    }).then(
      (data) => {
          console.log(data)

          for(let i = 0; i < data.length; i++){
            console.log(data[i].name)
            // const $name = $('<div>').text(data[i].name)
            // $name.append('.body')

          }

    }, (error) => {
      alert(`You must have spelled something wrong. Please check your spelling and try again`)
      console.log(`${error.statusText.toUpperCase()}:bad request`);
    }
  )
  })
})
