
        
        function submitForm() {
            var input = document.getElementById("inputId");
            var input1 = document.getElementById("inputId1");
            alert("We place your order of  " +input1.value+ input.value + " You will have a confirmation call within a day"+"Thank you!!");
        }
        function orderProduct(product) {
            document.getElementById('productInput').value = product;
            document.getElementById('orders').scrollIntoView({ behavior: 'smooth' });
        }
    
        
