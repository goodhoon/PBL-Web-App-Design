/* Referred to https://www.w3schools.com/howto/howto_js_tabs.asp to implement the tab */


/* Tab and Feedback Part */

// tab label names
var a_menu = [ "My Answer","Betty","Edward","George","Jennifer","Kevin","Michelle"];

// assign variables for tab and feedback
var tab_menu = document.getElementById("tab_menu");
var tab_text = document.getElementById("tab_text");
var tab_edit = document.getElementById("tab_edit");
var tab_save = document.getElementById("tab_save");
var tab_submit = document.getElementById("tab_submit");
var window_save = document.getElementById("window_save");
var button_save_ok = document.getElementById("button_save_ok");
var button_submit_ok = document.getElementById("button_submit_ok");
var button_submit_no = document.getElementById("button_submit_no");
var feedback = document.getElementById("feedback");
var start_input = document.getElementById("start_input");
var start_save = document.getElementById("start_save");
var feedback_item = document.getElementsByClassName("feedback_item")[0].outerHTML; //array for stacking feedback item
var currentTab = 0; // current tab number
var a_feedback = []; // array to save feedback text
var a_tab = []; // array to save tab text

// creating tab menu
function set_menu(){
  tab_menu.innerHTML ="";
  for( var i=0; i<a_menu.length; i++){
      var li= document.createElement("li");
      li.innerHTML=a_menu[i];
      li.addEventListener('click',menu_click);
      tab_menu.appendChild(li);
  }
}
set_menu();

// clicking a tab label
function menu_click(e){
  for( var i=0; i<a_menu.length; i++){
    if( a_menu[i] == e.currentTarget.innerHTML ) set_tab(i);
  }
}

// Clicking a tab label, changing color, returning from the array
function set_tab(k){
  currentTab = k;
  for( var i=0; i<tab_menu.children.length; i++){
    if( i == k ) tab_menu.children[i].style.background = "#fff";
    else tab_menu.children[i].style.background = "#eee";
  }
  if( a_tab[currentTab] == null ) tab_text.value = "";
    else tab_text.value = a_tab[currentTab];
	set_feedback();
}

// Clicking edit button
tab_edit.addEventListener("click",focus_tab)
  function focus_tab(e){
    tab_text.focus();
}

// Clicking tab save button
tab_save.addEventListener("click",tab_text_save)
function tab_text_save(e){
  a_tab[currentTab] = tab_text.value;
  window_save.style.display="block";
}

// Clicking ok button when save pop-up message
button_save_ok.addEventListener("click",window_save_close)
function window_save_close(e){
  window_save.style.display="none";
}

// Clicking tab submit button
tab_submit.addEventListener("click",tab_text_submit)
function tab_text_submit(e){
  window_submit.style.display="block";
}

// Clicking ok button when submit pop-up message
button_submit_ok.addEventListener("click",window_submit_close)
button_submit_no.addEventListener("click",window_submit_close)
function window_submit_close(e){
  window_submit.style.display="none";
}

// initialize tab number
set_tab(0);


/* Feedback Part */
// Clicking feedback save button
start_save.addEventListener('click',input_feedback)
function input_feedback(e){
  if( a_feedback[ currentTab ] == null )  a_feedback[ currentTab ]=[];
   a_feedback[ currentTab ].push( start_input.value );
  start_input.value = "";
  set_feedback();
}

// Get the feedback text from the array by the tab index
function set_feedback( ){
  feedback.innerHTML = "";
  if( a_feedback[ currentTab ] == null )  return
  for( var i=0; i<a_feedback[ currentTab ].length; i++ ){
    var div = document.createElement("div");
    div.innerHTML = feedback_item;
    div.children[0].children[1].innerHTML = a_feedback[ currentTab ][i];
    feedback.appendChild( div);
  }
  feedback.scrollTop=1000;
}


/* Changing pages */

// assign variables to change pages
var category_item3 = document.getElementById("category_item3");
var box_item2 = document.getElementById("box_item2");
var box_item3 = document.getElementById("box_item3");
var column_ = document.getElementById("column_");
var column_ongoing = document.getElementById("column_ongoing");
var column_new = document.getElementById("column_new");
var column_pe = document.getElementById("column_pe");
var column_tab = document.getElementById("column_tab");

// event listener by component to change pages
category_item3.addEventListener("click", page_change)
box_item2.addEventListener("click", page_change)
box_item3.addEventListener("click", page_change)
function page_change(e){
  if( e.currentTarget == category_item3) set_page(2)
  if( e.currentTarget == box_item2) set_page(3)
  if( e.currentTarget == box_item3) set_page(3)
}

// function to change pages
function set_page(k){
  if( k == 1){
    column_ongoing.style.display="table-cell";
    column_new.style.display="table-cell";
    column_pe.style.display="none";
    column_tab.style.display="none";
  }
  else if( k ==2 ){
    column_ongoing.style.display="none";
    column_new.style.display="none";
    column_pe.style.display="table-cell";
    column_tab.style.display="none";
  }
  else if( k ==3 ){
    column_ongoing.style.display="none";
    column_new.style.display="none";
    column_pe.style.display="none";
    column_tab.style.display="table-cell";
  }
}

// initialize the page number
set_page(1);


/*Chatting*/

// assign variables for chatting
var chat_input = document.getElementById("chat_input");
var chat_window = document.getElementById("chat_window");
var chat_item = document.getElementsByClassName("chat_item")[0].outerHTML; //array for chatting item
chat_window.innerHTML = ""; // initialize the chatting window

// Enter in chatting text box
chat_input.addEventListener("keydown", chat_input_event)
function chat_input_event(e){
  if( e.key =="Enter") chat_insert();
}

// input the chatting text
function chat_insert(){
    var div = document.createElement("div");
    div.innerHTML = chat_item;
    div.children[0].children[1].innerHTML = chat_input.value;
    chat_window.appendChild( div);
    chat_input.value="";
    chat_window.scrollTop=1000;
}