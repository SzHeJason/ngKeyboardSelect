# ng-keybord-select
The angular directive can be used to select(mulitselect) item  by 'ctrl' and 'shfit' （使用指令完成系统常见的选择功能,例如ctrl多选，shfit批量选择的功能）

### Demo
________ 
* [Simple Demo](http://codepen.io/SzHeJason/pen/mENBoo?editors=1010)
* [input(checkbox) Demo](http://codepen.io/SzHeJason/pen/YWmAbR)

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

### gridSelected Parameters
_______
* **grid-selected-item** 该属性用来绑定当前记录的数据，该数据将会被指令读取
* **grid-selected-disabled** 如果改属性为true，则记录不允许被选中

### Event
_______
* **selectStart** 当你在选择某条记录之前，组件会向上传播该事件
* **selectEnd** 当你选择某条记录之后，组件会向上传播该事件
    ```
        $rootScope.$on('selectEnd', function(event, data) {
            //data为你选择的数据
            selectItems = data;
         })
    ```

### Services
___________
* **MulitGrid** 提供了两个方法去获取选择的信息 __getSelectItems__ 和 __getItemsLength__
```
    angular,module('xxx')
        .controller('xxxxxCtrl',['MulitGrid',function(MulitGrid){
            //获取选中的所有数据
            var SelectItems = MulitGrid.getSelectItems();

            //获取选中数据的数量
             var SelectItemLength = MulitGrid.getItemsLength();
        }])
    
```


