# swat-react-tooltip

##### Install


```
npm install swat-react-tooltip --save
```


##### Usage

```
import Tooltip from 'swat-react-tooltip';

<Tooltip mode='hover' content={<div>My content</div>}>
    <div>My target</div>
</Tooltip>
```

##### Attributes

**mode** (default: 'click') can be 'hover'

**content**: the content of the tootip

**className** : set the className of the container


##### Styling

- the target will be injected in a DOM element which has the className 'Tooltip-target'
- the tootlip will be injected in a DOM element which has the className 'Tooltip-content'

Feel free to style and position this as you want !

