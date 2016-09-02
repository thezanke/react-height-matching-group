Usage
=====
Wrap elements with `HeightMatchingGroup` and provide a selector (used by `querySelectorAll` internally). HeightMatchingGroup will automatically match the height of all matching descendants to the descendant with the largest scrollHeight.

```javascript
import HeightMatchingGroup from 'react-height-matching-group'

/* inside render function */
<HeightMatchingGroup tagName="div" className="row" selector=".match-height">
  <div className="col-md-4">
    <div className="match-height">
      //content
    </div>
  </div>
  <div className="col-md-4">
    <div className="match-height">
      //content
    </div>
  </div>
  <div className="col-md-4">
    <div className="match-height">
      //content
    </div>
  </div>
</HeightMatchingGroup>
```

Accepted properties
-------------------
* `tagName` - the type of element used to wrap the children. Default: `span`
* `selector` - the selector string used in conjunction with `querySelectorAll` to select the descendants that will be height-matched. Default: `.match-height`
* `className` - the className string to pass to the container.
