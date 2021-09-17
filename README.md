# About the package

Easy drag and drop of html elements with just one function


# Installation

Using NPM


`npm install adi-draganddrop --save`

Using CDN

`<script src="https://unpkg.com/adi-draganddrop@1.0.0"></script>`





# Usage

Using npm

```
import {makeDraggable} from 'adi-draganddrop'

 //makes element with id source draggable and can be dropped in element with id target

 makeDraggable({
            sourceID: 'source', //element you want to drag
            targetID: 'target', //element you want to drop the draggable element in
        })


```

Using CDN

```
<!-- Paste CDN script tag in your head section of HTML-->

<script>
 //makes element with id source draggable and can be dropped in element with id target
 makeDraggable({
            sourceID: 'source', //element you want to drag
            targetID: 'target', //element you want to drop the draggable element in
        })
</script>

```



# Options

| Options        | Default Value           | Description  |
| ------------- |:-------------:| -----:|
| sourceID    (required)  | '' |HTML element you want to drag |
| targetID    (required)  | '' | HTML element you want to drop the draggable element in |



# Event

Once the source is dropped inside the target, a custom event is emitted. 

```
window.addEventListener('onDropped', e=>{
    console.log(e.detail)
})

```

The e.detail is nothing but a json

```
//sample response
{
left: "491px", //left side margin of the source from the document left start
leftMargin: 11.752988047808765, //% left margin of source from the target's left most border
top: "289px", //top margin of the source from the document top start
topMargin: 55.97609561752988, //% top margin of source from the target's top most border
}
```

