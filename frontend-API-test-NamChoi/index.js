//Container div to attach the search result list
const app = document.getElementById('root');
const container = document.createElement('div');

container.setAttribute(('class'), 'container');
app.appendChild(container);

const list = document.createElement('ul');
list.setAttribute('class', 'result-list');

// div to display saved items
var listDiv = document.querySelector('.saved-items');

//when submit button is clicked
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(e){

//the search value is sent to get the JSON
	const searchValue = document.getElementById('search').value;
	var url = 'http://localhost:3000/api/v1/search.json?query=' + searchValue;

	fetch(url)
		.then(function(response){
			return response.json();
		})
		// then display each result items
		.then(function(rJson){
			var data = JSON.stringify(rJson);
			var dataParsed = JSON.parse(data);

			dataParsed.forEach(gem => {			

				var listItem = document.createElement('li');
				listItem.setAttribute('class', 'list-item');

				var gemName = document.createElement('h2');
				gemName.textContent = gem.name;

				var deleteBtn = document.createElement('input');
				deleteBtn.setAttribute('type', 'button');
				deleteBtn.setAttribute('class', 'deleteBtn');
				deleteBtn.setAttribute('value', 'delete item');

				var saveBtn = document.createElement('input');
				saveBtn.setAttribute('type', 'button');
				saveBtn.setAttribute('class', 'saveBtn');
				saveBtn.setAttribute('value', 'save item')

				container.appendChild(list);
				list.appendChild(listItem);
				listItem.appendChild(gemName);
				listItem.appendChild(deleteBtn);
				listItem.appendChild(saveBtn);

			});

		})
		.then(function(deleteBtn, saveBtn){

			// add remove() functionality to each delete button
			deleteBtn = document.querySelectorAll('.deleteBtn');
			for(var i=0; i<deleteBtn.length; i++){
			deleteBtn[i].addEventListener('click', function(e){
				e.target.parentNode.remove();
				})
			}

			// save items into local storage when save button is clicked
			var savedItemsList = [];

			saveBtn = document.querySelectorAll('.saveBtn');
			for(var j=0; j< saveBtn.length; j++){
				saveBtn[j].addEventListener('click', function(e){	

				savedItemsList.push(e.target.parentNode.innerText.trim());
				localStorage.setItem('saved-items', JSON.stringify(savedItemsList));

				var itemsRetrieved = JSON.parse(localStorage.getItem('saved-items'));

					if(itemsRetrieved.length  > 0 ){
						itemsRetrieved.forEach(item => {
							listDiv.innerHTML += item;
						});
					}
				})
			}

		})

});

// Display saved items inside local storage if there is any
if(localStorage.length >= 1){
	var storageData = JSON.parse(localStorage.getItem('saved-items'));
		// console.log(storageData);
		storageData.forEach(sItem => {
			listDiv.innerHTML += sItem + '<br/>';
		});

}




