//Add Rows
const load = () => {


    input = document.getElementById('txtInput').value
    txtInput1 = document.getElementById('txtInput1').value
    txtInput2 = document.getElementById('txtInput2').value

    txtInput3 = document.getElementById('input').value
    txtInput4 = document.getElementById('input1').value
    txtInput5 = document.getElementById('input2').value
  if(input = ''){

    var table = document.getElementById('table'),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5)

    cell2.innerHTML = txtInput1
    cell3.innerHTML = txtInput2
    cell4.innerHTML = txtInput3
    cell5.innerHTML = txtInput4
    cell6.innerHTML = txtInput5

  }
  
  }

  var stateObject = {
    India: {
      Delhi: ['new Delhi', 'North Delhi'],
      Kerala: ['Thiruvananthapuram', 'Palakkad'],
      Goa: ['North Goa', 'South Goa'],
    },
    Australia: {
      SouthAustralia: ['Dunstan', 'Mitchell'],
      Victoria: ['Altona', 'Euroa'],
    },
    Canada: {
      Alberta: ['Acadia', 'Bighorn'],
      Columbia: ['Washington', ''],
    },
  }
  window.onload = function () {
    var input = document.getElementById('input'),
      input1 = document.getElementById('input1'),
      input2 = document.getElementById('input2')
    for (var country in stateObject) {
      input.options[input.options.length] = new Option(country, country)
    }
    input.onchange = function () {
      input1.length = 1 // remove all options bar first
      input2.length = 1 // remove all options bar first
      if (this.selectedIndex < 1) return // done
      for (var state in stateObject[this.value]) {
        input1.options[input1.options.length] = new Option(state, state)
      }
    }
    input.onchange() // reset in case page is reloaded
    input1.onchange = function () {
      input2.length = 1 // remove all options bar first
      if (this.selectedIndex < 1) return // done
      var district = stateObject[input.value][this.value]
      for (var i = 0; i < district.length; i++) {
        input2.options[input2.options.length] = new Option(
          district[i],
          district[i],
        )
      }
    }
  }

 