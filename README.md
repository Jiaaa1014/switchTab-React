
# Notes

## this

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

---

## defaultProps 

在此元件寫props
And here is [reference](https://github.com/facebook/react-native/issues/1772) that has many ways to try on.

here is [reference](https://github.com/facebook/react/issues/3725)
* `static defaultProps`
```js
export defalut class Theme extends Cmponent{
  static defaultProps = {
    brand: 'ReactStrap',
    heading: 'Hello World',
    text: 'this is a bs theme'
  }
}
```
* `static get defaultProps()`
```js
export defalut class Theme extends Cmponent{
  static get defaultProps() {
    return {
      brand: 'ReactStrap',
      heading: 'Hello World',
      text: 'this is a bs theme'
    }
  }
}
```
* 寫在class外面
```js
export defalut class Theme extends Cmponent{/**/}
Theme.defaultProps = {
  brand: 'ReactStrap',
  heading: 'Hello World',
  text: 'this is a bs theme'
}
```
