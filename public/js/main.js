window.onload = () => {
    document.querySelector('.cards')
        .addEventListener('click', e => {
            if (e.target.classList.contains('edit')) {
                const cardEdit = e.target.closest('.card').querySelector('.card-edit')
                cardEdit.classList.toggle('below')
            }
        })
}