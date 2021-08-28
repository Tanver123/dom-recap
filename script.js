document.getElementById('border-style').addEventListener('click', function () {
    document.getElementById('frinds-container').style.border = '4px solid gray'
})



function addBgColor() {
    const friends = document.getElementsByClassName('frinds');
    for (const friend of friends) {
        friend.style.backgroundColor = 'blue'
        friend.style.color = 'white'
        friend.style.padding = '10px'
        friend.style.margin = '10px'
    }
}
document.getElementById('new-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('frinds-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('frinds');
    friendDiv.innerHTML = `
            <h3 class="friend-name">friend - $</h3>
            <p>Lorem, ipsum.</p>
   `
    friendContainer.appendChild(friendDiv);
})

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);