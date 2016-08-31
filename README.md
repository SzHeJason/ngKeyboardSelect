# ng-keybord-select
The angular directive can be used to select(mulitselect) item  by 'ctrl' and 'shfit' （使用指令完成系统常见的选择功能,例如ctrl多选，shfit批量选择的功能）

### Demo
________ 
* [Simple Demo](http://codepen.io/SzHeJason/pen/mENBoo?editors=1010)

### Usage
_______   

```html
<ANY grid-group grid-select-name>
    <ANY grid-selected grid-selected-item grid-selected-disabled>
        .....
    </ANY>
</ANY>
```

### gridGroup Parameters
--------
* **grid-select-name:** 这个属性是用来绑定选择的字段，如果该字段为true则代表代表当前记录已经被选择
* **grid-group-data:** 这个属性是用来绑定选择的数据信息，他最终的得到的结果是选择的数据

### gridSelected Parameters
_______
* **grid-selected-item** 该属性用来绑定当前记录的数据，该数据将会被指令读取
* **grid-selected-disabled** 如果改属性为true，则记录不允许被选中


