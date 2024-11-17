var tablica = [
	{id: 1, nazwa:  "obiekt1",  kolor: "czerwony"},
	{id: 2, nazwa:  "obiekt2",  kolor: "niebieski"},
	{id: 3, nazwa:  "obiekt3",  kolor: "zielony"}
];

document.getElementById('przycisk_jeden').onclick = function()
{
	for (var i = 0;  i <tablica.length;i++)
	{
	
		console.log(tablica[i].id + " " + tablica[i].nazwa + " " + tablica[i].kolor);
	}
};