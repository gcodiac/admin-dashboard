let menu = document.querySelector('.menu');
let topNav = document.querySelector('#main-header');
let sidebarNav = document.querySelector('#sidebar-nav');
let sidebarNavTitle = document.querySelectorAll('.sidebar-nav_title');
let userInfo = document.querySelector('#sidebar-nav__user-info');
console.log(sidebarNavTitle);

menu.addEventListener('click', function (e) {
	e.preventDefault();

	console.log('HI');

	userInfo.textContent = '';
	topNav.style.marginLeft = '5rem';
	sidebarNav.style.width = '5rem';
	sidebarNavTitle.forEach(function (li, index) {
		console.log(li.className);
		li.classList.add('hide');
	});
});
// sidebarNavTitle.style.display = 'none';
// sidebarNavTitle.classList.add('.hide');

// #main-header {
// 	margin-left: 200px;
// }

// #sidebar-nav {
// 	background-color: #343a40;
// 	width: 200px;
// 	/*   width: 4.6rem; */
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	height: 100%;

// 	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
// }
