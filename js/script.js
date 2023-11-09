const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}

handleCurrentYear();

const navMobile = document.querySelector('.nav__mob');
const navBtn = document.querySelector('.hamburger');
const mobNavLinks = document.querySelectorAll('.nav__mob-link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav__mob--active');

	mobNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mob--active');
			navBtn.classList.remove('is-active');
		});
	});
};

navBtn.addEventListener('click', handleNav);

