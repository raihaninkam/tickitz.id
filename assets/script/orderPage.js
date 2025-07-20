document.addEventListener('DOMContentLoaded', function() {
            const seats = document.querySelectorAll('.seat');
            
            // Mark some random seats as sold and love nest for demonstration
            seats[5].classList.add('sold');
            seats[8].classList.add('sold');
            seats[9].classList.add('sold');
            seats[22].classList.add('sold');
            seats[31].classList.add('sold');
            seats[44].classList.add('sold');
            seats[17].classList.add('selected');
            seats[18].classList.add('selected');
            seats[19].classList.add('selected');
            
            seats.forEach(seat => {
                if (!seat.classList.contains('sold') && !seat.classList.contains('love-nest')) {
                    seat.addEventListener('click', function() {
                        this.classList.toggle('selected');
                    });
                }
            });
        });