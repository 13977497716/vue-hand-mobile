# （1）The plugin is introduced ----（插件介绍） 
> Offer H5, mobile gesture events, support vue2, VUe3 version, add and update framework encapsulation and custom data processing and automatic adaptation based on HammerJS, provide finger long press, drag, fast slide, multi-finger zoom, multi-finger rotation operations.
（提供h5，移动端手势事件，支持vue2，vue3版本，基于hammerjs进行新增更新 框架封装和自定义数据的处理及自动适配，提供手指的长按、拖曳、快滑，多指缩放，多指旋转操作。）
# （2）install ---- (安装)
-  **vue2** 

```
 npm install vue-hand-mobile
```
-  **vue3** 

```
 npm install vue3-hand-mobile
```
# （3）import ----（引入）
### Globally introduce the plug-in in the main entry file ----（在main入口文件全局引入插件。）
-  **Vue2** 

```
import Vue from 'vue'
import touch from 'vue-hand-mobile'
Vue.use(touch)

```
-  **Vue3** 

```
import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)

import touch from 'vue3-hand-mobile'
app.use(touch)
```
# （4）Use ---- （使用）
#### How to use it: On the dom or component columns you need by using the v-touch: gesture event ='callback'; EvenObject returns the event callback object argument, evenObject returns information down.
 **（使用方法：在需要的dom或组件实列上通过使用指令v-touch:手势事件='callback'；返回事件的回调函数对象参数evenObject，evenObject具体返回信息往下）** 。
> Column 1: Use the swipe gesture ---- （实列一：使用快滑手势）

```
<template>
  <div class="kuai" v-touch:swipe="vue3action">TouchAction</div>
</template>

<script>
export default {

  methods:{
    vue3action(evenObject){
        console.log(evenObject);
    }
  }，

}
</script>
```

> Column 2: Use the left drag event gesture ---- （实列二：使用左拖动事件手势）

```
<template>
  <div class="kuai" v-touch:panleft="leftAction">TouchAction</div>
</template>

<script>
export default {

  methods:{
    leftAction(evenObject){
        console.log(evenObject);
    }
  }，

}
</script>
```
# （5）Gesture events ---- (手势事件)
### hand tap ---- (轻拍) 
- tap：点击触发
> 手指轻拍或点击时触发该事件，触屏 时间< 250ms，类似PC端的 click 事件。

### Long press ---- （长按）
- press：长按500s时触发
- pressup: 长按事件离开时触发
> 手指长按触发该事件，触屏 时间 >  500ms。

### Drag the ---- （拖动）
- pan：拖动时触发
- panstart: 拖动开始
- panmove: 拖动过程
- panend: 拖动结束
- pancancel：拖动取消
- panleft：向左←拖动
- panright：向右→拖动
- panup：向上↑拖动
- pandown：向下↓拖动
> 手指拖拽指定dom移动时触发。

### Fast sliding ---- （快滑）
- swipe：快滑时触发
- swipeleft：向左←快滑
- swiperight：向右→快滑
- swipeup：向上↑快滑
- swipedown：向下↓快滑
> 手指快滑操作时触发，是平时手机用到最多的滑动操作。

### Two fingers zoom ---- (两指缩放)
- pinch：两个手指触摸时触发
- pinchstart：两指触摸开始
- pinchmove：两指触摸过程
- pinchend：两指触摸结束
- pinchcancel：两指触摸取消
- pinchin：两指触摸时两手指越来越近时
- pinchout：两指触摸时两手指越来越远时
> 两手指触屏等操作时触发，常见使用在缩放业务场景。

### Two fingers rotate ---- (两指旋转)
- rotatestart：旋转开始
- rotatemove：旋转过程
- rotateend：旋转结束
- rotatecancel：旋转取消

# （6）The callback function parameter evenObject API ---- (回调函数参数evenObject API)  
###  中文  Chinese
| 属性名称   |  描述       |  是否默认返回 |
|-----------|----------------------|----------------|
| type      | 手势事件名，如swipeup       |  true |
| X         | 距开始触屏位置，X轴移动的位置      | true |
| Y         | 距开始触屏位置，Y轴移动的位置     | true |
| velocityX | X 轴上的速度，单位为 px/ms    | true |
| velocityY | Y 轴上的速度，单位为 px/ms    | true |
| direction | 手指移动的方向,值有【none、left、right、top、down】    | true |
| distance  | 距开始触屏位置，到当前触屏位置之间的距离 | true |
| touch_Time | 距开始触摸时的总时间，单位 ms。第二次触摸时间归0重计   | true |
| target    | 触发手势事件的元素目标，如dom的class名为Home             | true |
| eventType | 触发手势事件的类型，值有【start、move、end、cancel】| true |
| pointers | 所有触摸位置点的数组，包括结束触摸点 | true |
| element | 触发事件的dom元素,可对元素进行操作 | true |
| scale | pinch系列两指缩放手势返回，缩放时的比列，每次触摸值都为1 | pinch手势系列事件时返回 |
| rotation | rotate系列两指旋转手势返回，旋转的角度，每次触摸值都为0 | rotate手势系列事件时返回 |

###  英语 English
| Name      | Description        | default return  |
|-----------|----------------------|----------------|
| type      | Gesture event name, for example, swipeup      |  true |
| X         | From where the touch screen starts, where the X-axis moves    | true |
| Y         | From where you start the touch, where you move the Y axis   | true |
| velocityX | The velocity on the X-axis is px per ms   | true |
| velocityY | The velocity on the Y axis is px per ms    | true |
| direction | Direction of finger movement: 【None、left、right、top、Down】    | true |
| distance  | The distance between the start touch screen position and the current touch screen position | true |
| touch_Time | The total time, in ms, since the start of a touch. The second touch time returns to 0   | true |
| target    | The object of the element that triggers the gesture event, such as dom, has a class name of Home    | true |
| eventType | The type of event that triggers the gesture:【start、move、end、cancel】| true |
| pointers | An array of all touch position points, including the end touch point | true |
| element | The DOM element that triggers the event and can be manipulated on the element | true |
| scale | The PINCH series of two-finger pinch gestures returns a scale of 1 for each touch | Pinch gesture series events |
| rotation | Rotate series Two-finger rotation gesture returns. The rotation Angle is 0 for each touch |Rotate returns the rotate gesture series event |



