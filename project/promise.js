// const fetchData = async () => {
//   try {
//     const response = await fetch('https://freetestapi.com/api/v1/actors');
//     const data = await response.json();
//     console.log(data[0]);

//     data.forEach(element => {
//       let { name, image, birth_year, death_year, nationality, biography, known_for, awards } = element;
//       let body = document.getElementById('body');
//       let box = document.createElement('div');
//       box.classList.add('actor-profile');
//       box.innerHTML = `
//         <img src="${image}" alt="Actor Image" class="actor-image" id= "actor">
//         <div class="actor-details">
//             <h1 class="actor-name">${name}</h1>
//             <p class="actor-birthyear"><strong>Birth Year:</strong> ${birth_year}</p>
//             <p class="actor-deathyear"><strong>Death Year:</strong> ${death_year}</p>
//             <p class="actor-awards"><strong>Awards:</strong> ${awards}</p>
//             <p class="actor-nationality"><strong>Nationality:</strong> ${nationality}</p>
//             <p class="actor-biography"><strong>Biography:</strong> ${biography}</p>
//             <p class="actor-knownfor"><strong>Known For:</strong> ${known_for}</p>
//         </div> 
//       `;
//       body.appendChild(box);

//       // Adding event listener to the image
//       const actorImage = box.querySelector('.actor-image');
//       actorImage.addEventListener('click', () => {
//         // Create a view for the full-size image
//         let view = document.createElement('div');
//         view.classList.add('view-image');
//         view.innerHTML = `
//           <span class="close-btn">&times;</span>
//           <img src="${image}" alt="Full Size Image" class="full-size-image">
//         `;
//         body.appendChild(view);

//         // Close button to remove the full-size image view
//         const closeBtn = view.querySelector('.close-btn');
//         closeBtn.addEventListener('click', () => {
//           body.removeChild(view);
//         });
//       });
//     });
//   } catch (error) {
//     let errdiv = document.createElement('div')
//   }
// }

// fetchData();


// city = "mumbai"
// console.log(city.char[1].toUpperCase)