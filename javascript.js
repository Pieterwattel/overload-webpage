
function randA () {
    let a = (Math.random());
    return a
    }
    
    function randB () {
        let b = (Math.random());
        return b
        }
    
    
    
    for (; true ; randA(), randB()) {
        let a = randA();
        let b = randB();
        console.log(a + b);
      }