/*inspiration 
PINTEREST
*/
    // const MemberTemplate = (link, name)=>`
    //     <div class="grid-item">
    //         <div class="grid-item-content">
    //         <img src="${link}" alt="${name}">
    //         <h3>${name}</h3>
    //         </div>
    //     </div>`;
const memberData = [
    ["./images/2024/members/harshwardhan.jpg", "Harshwardhan Deshmukh"],
    ["https://raw.github.com/satvikg7/satvikg7/main/static/satvikg7.jpg", "Satvik Gaikwad"],
    ["https://raw.github.com/adityasd314/adityasd314/main/static/adityasd314.jpg", "Aditya Deshmukh"],
    ["./images/2024/members/Sarthak Pawar.jpg","Sarthak Pawar"],
    ["./images/2024/members/Anand Panajkar.jpg","Anand Panajkar"],
    ["./images/2024/members/Shivansh Kaul.jpg","Shivansh Kaul "],
    ["./images/2024/members/Sumedh Chavan.jpg","Sumedh Chavan"],
    ["./images/2024/members/Disha Kadam.jpg","Disha Kadam",0],
    ["./images/2024/members/Tanishq Borkar.jpg","Tanishq Borkar"],
    ["./images/2024/members/Aryan Jotshi .jpg","Aryan Jotshi"],
    ["./images/2024/members/Aditya Choudhary.jpg","Aditya Choudhary"],
    ["./images/2024/members/Hardik Mutha.jpg","Hardik Mutha"],
    ["./images/2024/members/Sreya S.jpg","Sreya S",0],
    ["./images/2024/members/Tushar Kachare.jpg","Tushar Kachare"],
    ["./images/2024/members/Moin Hasan Shaikh.jpg","Moin Hasan Shaikh"],
    ["./images/2024/members/Anjali Gangotri.jpg","Anjali Gangotri",0],
    ["./images/2024/members/Aniket Ware.jpg","Aniket Ware"],
    ["./images/2024/members/Arnav Singhal.jpg","Arnav Singhal"],
    ["./images/2024/members/Aryan Mehta.jpg","Aryan Mehta"],
    ["./images/2024/members/Rukmini Nazre.jpg","Rukmini Nazre",0],
    ["./images/2024/members/Ishita Humnabadkar.jpg","Ishita Humnabadkar",0],
    ["./images/2024/members/Kedar Shiralkar.jpg","Kedar Shiralkar"],
    ["./images/2024/members/Omkar Oak.jpg","Omkar Oak"],
    ["./images/2024/members/Abhishek Shinde.jpg","Abhishek Shinde"],
    ["./images/2024/members/Spandan Jathar .jpg","Spandan Jathar "],
    ["./images/2024/members/Prasad Patil.jpg","Prasad Patil"],
    ["./images/2024/members/Ananta Hatwar.jpg","Ananta Hatwar"],
    ["./images/2024/members/Mohit Apte.jpg","Mohit Apte"],
    ["./images/2024/members/Sahiti Adurthi.jpg","Sahiti Adurthi",0],
    ["./images/2024/members/Swarnim Kamble.jpg","Swarnim Kamble"],
    ["./images/2024/members/Rujuta Budke.jpg","Rujuta Budke"],
    ["./images/2024/members/Shlok Deshpande.jpg","Shlok Deshpande"],
    ["./images/2024/members/Shubham Gandhi.jpg","Shubham Gandhi"],
    ["./images/2024/members/Vedant  Deshmukh.jpg","Vedant  Deshmukh"],
    ["./images/2024/members/Mihika Dravid .jpg","Mihika Dravid ",0],
    ["./images/2024/members/Dhanashree Pawar .jpg","Dhanashree Pawar ",0],
    ["./images/2024/members/Siddhi Shinde.jpg","Siddhi Shinde",0],
    ["./images/2024/members/Vaishnavi Kulkarni.jpg","Vaishnavi Kulkarni",0],
    ["./images/2024/members/Ishan Patwardhan.jpg","Ishan Patwardhan"],
    ["./images/2024/members/Sumit Girnar.jpg","Sumit Girnar"],
 ];



const gridContainer = document.querySelector(".grid-container");
memberData.forEach(([link, name, isfemale])=>{
    const div = document.createElement("div");
    div.className = "grid-item";
    const childDiv = document.createElement("div");
    childDiv.className = "grid-item-content";
    const image = document.createElement("img");
    image.src = link;
    image.title = name;
    image.onerror = function(){
        if(isfemale === 0)
        this.src = `https://avatar.iran.liara.run/public/girl?username=${name}`
    else
    this.src = `https://avatar.iran.liara.run/public/boy?username=${name}`

    }
    const heading = document.createElement("h3");
    heading.innerText = name;
    childDiv.appendChild(image);
    childDiv.appendChild(heading);
    div.appendChild(childDiv);
    
    gridContainer.append(div);
})
const cards = document.querySelectorAll(".grid-item");

cards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});
