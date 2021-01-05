// ===================== Search Bar jQuery =================
console.log('hello');
$(() => {
    const formTest =
      $('form').on('submit', (event) => {
        event.preventDefault()
        const userInput = $('input').val()
        console.log(userInput);
    $.ajax({
      url: `https://nextstepinlife.herokuapp.com/products/api?name=` + userInput + ``,
      type: "GET"
    }).then(
      (data) => {
          console.log(data)

          const $div = $('<div>').appendTo('.body')

    }, (error) => {
      alert(`You must have spelled something wrong. Please check your spelling and try again`)
      console.log(`${error.statusText.toUpperCase()}:bad request`);
    }
  )
  })
})
