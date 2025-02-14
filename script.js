const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    let prices = document.querySelectorAll(".price");
    let total = 0;
    
    prices.forEach(price => {
        total += parseInt(price.innerText);
    });

	let er = document.getElementById("totalRow");
	if(er){
		er.remove();
	}
  
    
    let row = document.createElement("tr");
    row.id = "totalRow";
    
    let cell = document.createElement("td");
    cell.innerText = `Total Price : ${total}`;

	
    row.appendChild(cell);
    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

