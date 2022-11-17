/* Деструктуризація */

const monitor = {
    sizes: {
        width: {
            value: 30,
            scale: 'cm'
        },
        height: {
            value: 60,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Hnz'
    },
    color: 'black',
    resolution: '4K'
}

monitor.color; // black => color
monitor.sizes.height; // height => object
monitor.sizes.height.value; // значення висоти

// const height = monitor.sizes.height.value;


// const {resolution, color: monitorColor} = monitor;
const {sizes: {height: {value: heightValue}, width: {value: widthValue}}} = monitor;
// heightValue, widthValue - звичайні змінні

const {color, brightness, resolution, ...restOfMonitor} = monitor;













const test1 = {
    test2: {
        test3: {
            test4: {
                test5: {
                    test6: {
                        test7: {
                            test8: {
                                test9: {
                                    test10: {
                                        value: 'test'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}