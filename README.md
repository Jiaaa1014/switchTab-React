
### Notes
#### props
if child get the prop from parent it uses `<Child props=value/>`

We can write on child file `getDefaultProps()`, but it seems to not be working for me.
And here is [reference](https://github.com/facebook/react-native/issues/1772) that has many ways to try on.

it works
```js
Navbar.defaultProps = {
  brand: 'ReactStrap'
}
```

it works, too
```js
  static get defaultProps() {
    return {
      brand: 'ReactStrap'
    }
  }
```

#### this

> TypeError: this.setState is not a function. (Theme.jsx)
 
[reference](https://github.com/goatslacker/alt/issues/283)

[reference zh-cn](https://github.com/muwenzi/Program-Blog/issues/37)


```js
handleChange(page) {
  this.setState({ currentPage: page })
}
render(){
  return(
    <Navbar
    currentPage={this.state.currentPage}
    brand={this.props.brand}
    change={this.handleChange.bind(this)}
    />
  )
}
```
or using arrow function (handy way)

```js
  handleChange = (page) => {
    this.setState({ currentPage: page })
  }
```
