function todoList(){
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	var date = document.getElementById("date").value

	var text = document.createTextNode("username: " + username)
	var text2 =document.createTextNode("comment: " + comment)
	var date2 = document.createTextNode("date: " + date)
	var newItem = document.createElement("li")
	newItem.className = "list-group-item"
	var username2 = document.createElement("h1")
	username2.appendChild(text)
	var comment2 = document.createElement("p")
	comment2.appendChild(text2)
	var yawm = document.createElement("p")
	yawm.appendChild(date2)

	newItem.appendChild(username2)
	newItem.appendChild(comment2)
	newItem.appendChild(date2)
	document.getElementById("commentList").appendChild(newItem)
}

