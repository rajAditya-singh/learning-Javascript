const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)
// this used case is wrong it will give you empty

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a valid ${height}`;
    }
    
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a valid ${weight}`;
    }
    
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.6){
            results.innerHTML = `<span>You are Under Weight BMI = ${bmi}</span>`
        }
        else if (bmi >= 18.6 && bmi <=24.9){
            results.innerHTML = `<span>You are Normal Weight BMI = ${bmi}</span>`
        }
        else{
            results.innerHTML = `<span>You are over Weight BMI = ${bmi}</span>`
        }


    }
    
})