export function getCurrentDate() {
	let newCreationDate = new Date();
	return `${newCreationDate.getDate()}/${
		newCreationDate.getMonth() + 1
	}/${newCreationDate.getFullYear()}`;
}
