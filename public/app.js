// axios.get('/api/notes')
// .then(({ data }) => {
//     console.log(data)
//     data.forEach( note => {
//         let itemElem = document.createElement('li')
//         if (itemElem.keep) {
//             itemElem.classList.add('keep')
//         } else {
//             itemElem.classList.remove('delete')
//         }
//         itemElem.innerHTML = `
//         <span>${note.text}</span>
//         <button 
//           data-id="${note.id}"
//           data-done="${note.keep}"
//           class="keep">✓</button>
//         <button
//           data-id="${note.id}" 
//           class="delete">X</button>
//         `
//         document.getElementById('notes').append(itemElem)
//     })
// })

// .catch(err => console.error(err))


// document.getElementById('addItem').addEventListener('click', event => {
//  event.preventDefault()
//  axios.post('/api/notes', {
//      text: document.getElementById('text').value  ,
//      isDone: false
//     })
//       .then(({ data }) => {
  
//         document.getElementById('text').value = ''
  
//         let itemElem = document.createElement('li')
//         itemElem.classList.add('notDone')
//         itemElem.innerHTML = `
//           <span>${data.text}</span>
//           <button 
//             data-id="${data.id}"
//             data-done="${data.isDone}"
//             class="complete">✓</button>
//           <button
//             data-id="${data.id}" 
//             class="delete">X</button>
//         `
//         document.getElementById('items').append(itemElem)
//       })
//       .catch(err => console.error(err))
//   })
 