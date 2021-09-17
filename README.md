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



