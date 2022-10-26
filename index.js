function ymivanie() {
    // ............
    console.log('ymivanie');
}

function chistkaZybov() {
    // ............
    console.log('chistka zybov');
}

function yxodZaKozhey() {
    // ............
    console.log('yxodZaKoshey');
}

function coding() {
    // ............
    console.log('coding');
}

function sleep() {
    // ............
    console.log('sleep')
}

function goToWork() {
    // ............
    console.log('goToWork')
}

function goToHome() {
    // ............
    console.log('goToHome')
}

function zavtrak() {
    // ............
    console.log('zavtrak')
}

function education() {
    // ............
    console.log('education')
}

function obed() {
    // ............
    console.log('obed')
}

function yzhin() {
    // ............
    console.log('yzhin')
}

function progulka() {
    // ............
    console.log('progulka')
}

function vanna() {
    // ............
    console.log('vanna')
}

function todo(timeOfDay) { // HOF
    switch(timeOfDay) {
        case 'morning': {
            console.group('morning');

            ymivanie();
            chistkaZybov();
            yxodZaKozhey();
            progulka();
            zavtrak();

            console.groupEnd();

            break;
        }
        case 'obed': {
            console.group('obed');

            goToWork();
            coding();
            obed();
            coding();
            progulka();
            goToHome();

            console.groupEnd();

            break;
        }
        case 'evening': {
            console.group('evening');

            education();
            yzhin();
            coding();
            vanna();
            ymivanie();
            yxodZaKozhey();
            sleep();

            console.groupEnd();

            break;
        }
        default: {
            console.log('Вася не в духе!. Введите нормальное время дня!!!')
        } 
    }
}

todo('morning');
todo('obed');
todo('evening');