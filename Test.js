function form_sentence(str){
    var sentence = "";
    var period = ".";
    str = str[0].toUpperCase() + str.slice(1);
    sentence = str.concat(period);
    console.log(sentence);
}
form_sentence("this is a boy");
