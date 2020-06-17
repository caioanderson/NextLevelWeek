function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json() )
    .then( ufs => {

        for(const uf of ufs ){
            ufSelect.innerHTML += `<option value = "${uf.id}">${uf.nome}</option>`

        }
 
    })
}
populateUFs()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value
    
    const indexOfSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res =>  res.json() )
    .then( cities => {
        
        for(const city of cities ){
            citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`

        }

        citySelect.disabled = false 
    })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



    //Items de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}


const colecaoItems = document.querySelector("input[name=items]")

let selectedItem = []

function handleSelectedItem(event){
    //adicionar ou remover uma classe com JavaScript
    const itemLi = event.target
itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id;

    const itemSelecionado = selectedItem.findIndex( function(item){
        const itemEncontrado = item == itemId //retorna true ou falso
        return itemEncontrado
    })

    //Está selecionado e quero tirar da seleção
    if(itemSelecionado >= 0){
        const itemsFiltrados = selectedItem.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent 
        })

        selectedItem = itemsFiltrados
    }else{
        //Se não tiver selecionado adicionar na seleção
        selectedItem.push(itemId)
    }

    colecaoItems.value = selectedItem
    

}