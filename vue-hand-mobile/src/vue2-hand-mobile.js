
import './utlis/hammer.js'
export default {
    install(Vue) {
        function data_Processing() {
            return {
                'deltaY': 'Y',
                'deltaX': 'X',
                'deltaTime': 'touch_Time'
            }
        }


        function set_default(Obj) {
            let linObjs = {}
            let valueArr = ['deltaY', 'deltaX', 'type', 'distance', 'velocityX', 'deltaTime',
                'velocityY',
                'direction',
                'target',
                'pointers', 'eventType']


            if ((Obj.type).indexOf("pinch") != -1) {
                valueArr.push('scale')
                Obj.scale = (Obj.scale).toFixed(2)
            }
            if ((Obj.type).indexOf("rotate") != -1) {
                valueArr.push('rotation')
            }

            valueArr.forEach(e => {
                linObjs[e] = Obj[e]
            })
            return linObjs
        }


        function processing(Obj) {
            Obj = set_default(Obj)

            let keyArr = Object.keys(data_Processing())

            let valueArr = keyArr.map((item) => {
                return data_Processing()[item]
            })

            let regular;

            keyArr.forEach((e, i) => {

                regular = eval('/' + e + '/g');

                Obj = JSON.parse(JSON.stringify(Obj).replace(regular, valueArr[i]))
            })
            let direction = Obj.direction

            switch (direction) {
                case 1:
                    Obj.direction = 'none'
                    break;
                case 2:
                    Obj.direction = 'left'
                    break;
                case 4:
                    Obj.direction = 'right'
                    break;
                case 8:
                    Obj.direction = 'top'
                    break;
                case 16:
                    Obj.direction = 'down'
                    break;
                default:
                    Obj.direction = 'none'
                    break;
            }

            switch (Obj.eventType) {
                case 1:
                    Obj.eventType = 'start'
                    break;
                case 2:
                    Obj.eventType = 'move'
                    break;
                case 4:
                    Obj.eventType = 'end'
                    break
                case 8:
                    Obj.eventType = 'cancel'
                    break

            }

            return Obj 
        }


        Vue.directive('touch', {
            bind: function (el, binding) {

                let type = binding.arg

              
                let touch_action = new Hammer(el);

                touch_action.on(type, (ev) => {

                    ev = processing(ev)

                     ev.element=el
                  
                    binding.value(ev)
                });

                if (type.indexOf("pinch") != -1) {
                    touch_action.get('pinch').set({ enable: true });
                }
                if (type.indexOf("rotate") != -1) {
                    touch_action.get('rotate').set({ enable: true });
                }

                touch_action.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                touch_action.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            },

        });
    },
}
