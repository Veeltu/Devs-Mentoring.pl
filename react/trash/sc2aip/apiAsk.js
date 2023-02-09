const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ecec522048msh785cb857a0035fdp10194ajsn9e96b645d442',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

fetch('https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));