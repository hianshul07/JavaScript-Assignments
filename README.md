- **Class selector**
The class selector can target an element with the given class attribute. The element with the class selector can be selected using the `.` symbol.

```
.className {
	/* this will select the class named className */
}
```

- **Individual selector**
The Type selector targets only the selected element of the HTML document. A individual selector is used using the element name. For example - 

```
p {
	/* this will select the <p> element */
}

img {
	/* this will select the <img> element */
}
```

## Now we will look at some **CSS Combinators** -
CSS Combinators are the relationship between two or more selectors which we can combine according to our requirements

**Descendant selector**

The descendant selector selects all the children of the specified element. This selector is represented with a single space (" ").

- **Child Selector**
The Direct child selector selects only the direct child of the element. And it is represented with a ( > ) sign.

```
ul > li {
    /* this will select all the <li> elements which are the direct children of the list */
}
```

- **Adjacent sibling selector**
The sibling selector will target the immediate next element of the specified element which share the same parent. This selector is represented with a ( + ) sign
 

```
img + p {
	/* this will select the immediate next <p> element which is next to the <img> element  */
}
```

- **General Sibling Selector**
This type of sibling selector will target all the next sibling elements of the specified elements, which share the same parents.
This selector is represented with a ( ~ ) sign.