function checkTemp(a){

    if (a < 21) {

        console.log("liiga külm")
        return -1

}

    else if (a > 40) {

        console.log("liiga kuum")
        return 1

    }

    else {

        console.log("paras")
        return 0

    }

}


checkTemp(20)
