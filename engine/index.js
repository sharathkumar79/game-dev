
const fun = function(){
    console.log('hello world');
}

fun();

const student = {
    studentName : 'sharath',
    studentage : '19',
    semister : 5,
    display : function(){
        console.log(`${this.studentName} \nsemister :  ${this.semister} \nage : ${this.studentName}`)
    }
}

const block = {
    blockcode : 123,
    roomno : 1,
}

const studentinfo = {...student,...block, gender : 'm', disinfo:function(){console.log(this)}};
studentinfo.disinfo();



