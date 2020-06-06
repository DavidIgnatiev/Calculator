function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    let exp = document.form.textview.value;
    // создали переменую в которой будет храниться данные из текстого поля name=textview
    // нужно получить доступ к последнему элементу строки
    // используем функцию substring для работы с подстрокой 
    // обработка строки с первого до предпоследнего элемента substring(0,exp.length - 1) 
    // exp.length - 1 = предпоследний элемент
    document.form.textview.value = exp.substring(0,exp.length - 1);
    // удаляет старую строку и записывет туже самую строку(строка храниться в exp) без последнего элемента
}
 
function equal() {
    let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}