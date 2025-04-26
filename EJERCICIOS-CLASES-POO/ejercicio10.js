class instrumentoMusical{

    tocar(){
        console.log ( `que hermosa melodia`);
    }
    tocar1(){
        return `el violin es asombroso`;
    }
}

class piano extends instrumentoMusical{

}


class violin extends instrumentoMusical{

}


const piano1 = new piano ();
piano1.tocar();

const violin1 = new violin();
console.log (violin1.tocar1());