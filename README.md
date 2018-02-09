
### Notes
#### props
if child get the prop from parent it uses `<Child />`

We can write on child file getDefaultProps(), but it seems to not be working for me.
and [here discussion](https://github.com/facebook/react-native/issues/1772) has many ways to try on.
```js
Navbar.defaultProps = {
  brand: 'ReactStrap'
}
```

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
