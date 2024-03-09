function search() {
	// Search
	//
	const openSearch = document.querySelector('#search')
	const openSearchMob = document.querySelector('#search-mob')
	const btn = document.querySelector('#search-btn')

	btn.addEventListener('click', () => {
		openSearch.value = ''

		openSearch.style.display =
			openSearch.style.display === 'block' ? 'none' : 'block'
	})

	openSearch.addEventListener('keydown', event => {
		if (event.key === 'Enter') {
			openSearch.value = ''

			openSearch.style.display =
				openSearch.style.display === 'block' ? 'none' : 'block'
		}
	})

	openSearchMob.addEventListener('keydown', event => {
		if (event.key === 'Enter') {
			openSearchMob.value = ''
		}
	})
}

export default search
