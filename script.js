
        function calculateInterest() {
            
            var amount = document.getElementById('amount').value;
            var rate = document.getElementById('rate').value;
            var time = document.getElementById('time').value;

            
            var interest = (amount * rate * time) / 100;

            
            document.getElementById('interest').value = interest.toFixed(2);
        }
    