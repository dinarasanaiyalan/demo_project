import React, { Component } from 'react'

class ListExample extends Component {

  render() {

    const menuList = ["Home","About","Contact Us"];

    const iteratedMenuList = menuList.map(menu => {
        return <li>{menu}</li>
    })

    const fruitList = ["Apple","Banana","Carrot","Mango"];

    const filteredFruitList = fruitList.filter(fruit => "Apple" != fruit);

    const filteredMenuList = filteredFruitList.map(fruit => {
        return <li>{fruit}</li>
    })

    return (
      <div>
        <h1>ListExample</h1>
        <ul>
            {iteratedMenuList}
        </ul>
        <div>
            {filteredMenuList}
        </div>
      </div>
    )
  }
}

export default ListExample