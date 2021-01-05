// ===================== Search Bar jQuery =================
// console.log('hello');
$(() => {
    const formTest =
      $('form').on('submit', (event) => {
        event.preventDefault()
        const userInput = $('input').val()
      })
    $.ajax({
      url: `https://nextstepinlife.herokuapp.com/products`,
      type: "GET"
    }).then(
      (data) => {

        const $div = $('<div>').addClass('divProducts').appendTo('.body')
        $div.append($name)
    }, (error) => {
      alert(`You must have spelled something wrong. Please check your spelling and try again`)
      console.log(`${error.statusText.toUpperCase()}:bad request`);
    }
  )
})
