const paragraphs = document.querySelectorAll('p')

for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i]
    const hr = document.createElement("hr")
    p.appendChild(hr)
}

// Другой вариант
// paragraphs.forEach(p => {
//     const hr = document.createElement("hr")
//     p.appendChild(hr)
// })
