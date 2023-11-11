const counter = document.getElementsByClassName('count');
const inputBox = document.querySelector('.inputBox');
const clear = document.querySelector('.clear');
const paraphrase = document.querySelector('.submit');
const outputBox = document.querySelector('.outputBox')

paraphrase.addEventListener('click', async function() {
    var inputtedData = inputBox.value;
    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://paraphrasing-and-rewriter-api.p.rapidapi.com/rewrite-light',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '563168a336msh8255f4c605e7ba6p174462jsn8b38edcc27fa',
        'X-RapidAPI-Host': 'paraphrasing-and-rewriter-api.p.rapidapi.com'
      },
      processData: false,
      data: JSON.stringify({ // Use JSON.stringify to convert the object to a string
        "from": "en",
        "text": inputtedData // Replace the hardcoded text with the inputtedData variable
    })
    };
    
    $.ajax(settings).done(function(response) {
      outputBox.value = response
      console.log(response);
    });
});

clear.addEventListener('click', function() {
    inputBox.value = '';
    counter[0].innerHTML = 0;
});
inputBox.addEventListener('keyup', function() {
    counter[0].innerHTML = inputBox.value.length;
} );
