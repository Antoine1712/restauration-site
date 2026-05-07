const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card => {

            if(filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            }
            else {
                card.style.display = 'none';
            }

        });

    });

});