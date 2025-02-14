const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    let p = document.querySelectorAll(".price");
	
	let ans = 0
    p.forEach(pr =>{
		ans += parseInt(pr)
	});

	let r = document.createElement("tr");

	let c = document.createCell("td");
	c.textContent = "`Total Price: Rs ${ans}`"

	r.appendChild(c)

	document.querySelector("table").appendChild(r)
};

getSumBtn.addEventListener("click", getSum);

