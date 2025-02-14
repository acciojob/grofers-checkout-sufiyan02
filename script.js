const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    let p = document.querySelectorAll(".price");
	
	let ans = 0
    p.forEach(price =>{
		ans += parseInt(price.innerText);
	});

	let r = document.createElement("tr");
	r.id = "trow"

	let c = document.createElement("td");
	c.textContent = `Total Price: Rs ${ans}`

	r.appendChild(c)

	document.querySelector("table").appendChild(r)
};

getSumBtn.addEventListener("click", getSum);

