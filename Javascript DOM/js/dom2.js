
    // const pBaru = document.createElement('p')
    // const tekst = document.createTextNode('aat')
    // pBaru.appendChild(tekst)
    // const sectiona = document.getElementById('a')
    // sectiona.appendChild(pBaru)

    

    const pgBaru = document.createElement('p')
    const textP = document.createTextNode('Aku anak indonesia')
    pgBaru.appendChild(textP)

    const sectionA = document.getElementById('a')
    sectionA.appendChild(pgBaru)

    const bBaru = document.createElement('li')
    const pBaru = document.createTextNode('HAlo ini 3')
bBaru.appendChild(pBaru)

    const ul = document.querySelector('section#b ul')
    const li2 = ul.querySelector('li:nth-child(2)')

    ul.insertBefore(bBaru, li2)


    const ambil = document.getElementsByTagName('li')[0]


    ul.removeChild(ambil)

const h2baru = document.createElement('h2')
const pesanh2 = document.createTextNode('Hallo Indonesia')
h2baru.appendChild(pesanh2)

const secb = document.querySelector('section#b')
const p = document.querySelector('section#b p')


secb.replaceChild(h2baru, p)

// (NODEBARU , NODELAMA)

h2baru.style.backgroundColor = 'blue'
bBaru.style.backgroundColor= 'red'
pgBaru.style.fontSize = '25px'
pgBaru.style.backgroundColor = 'grey'
pgBaru.style.color = 'white'

