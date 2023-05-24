let nav = document.querySelector('header');
let communication = document.querySelector('.communication');
let ulNav = document.querySelector('#nav');
window.addEventListener('scroll', (e) => {
  console.log(pageYOffset);
  pageYOffset > 70 ? nav.style.position = "fixed" : nav.style.position = "relative";

})
nav.addEventListener('click', (event) => {
  if (event.target == nav || event.target == nav.children) {
    ulNav.classList.toggle('flex');
    communication.classList.toggle('flex');
  }
})
let obgectContent = {
  arrButtom: Array.from(document.querySelectorAll('.btn')),
  all: Array.from(document.querySelectorAll('.all')),
  web: Array.from(document.querySelectorAll('.web')),
  dus: Array.from(document.querySelectorAll('.dus')),
  dod: Array.from(document.querySelectorAll('.dod')),
  market: Array.from(document.querySelectorAll('.market')),
  close(name) {
    name.forEach(item => {
      item.style.display = "none";
    });
  },
  return() {
    this.close(this.all)

    let arrTo = [this.all, this.web, this.dus, this.dod, this.market];
    for (let i = 0; i < this.arrButtom.length; i++) {
      this.arrButtom[i].addEventListener('focus', () => {
        this.close(this.all)
        arrTo[i].forEach(item => {
          item.style.display = "block";
        })
      })

    }

  }
}
obgectContent.return();
//console.log(obgectContent);


