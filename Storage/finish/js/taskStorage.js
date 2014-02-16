// JavaScript Document

var db;

function runDB() {
	db = window.openDatabase("TaskDB", "1.0", "Task DB", 1000000);
		
	db.transaction(populateDB, errorCB, successCB);
	
	$('#btnAddTask').bind( "touchstart", btnAddTask_Handler);
	
}

/////////// DB Population ////////////////

function populateDB(tx) {
     tx.executeSql('DROP TABLE IF EXISTS Tasks');
     tx.executeSql('CREATE TABLE IF NOT EXISTS TASKS (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)');
     tx.executeSql('INSERT INTO TASKS (id, data) VALUES (1, "First row")');
     tx.executeSql('INSERT INTO TASKS (id, data) VALUES (2, "Second row")');
}

function errorCB(err) {
    alert("Error processing SQL: "+ err.code);
}

function successCB() {
    //navigator.notification.alert('DB Create Success!');
	
	retrieveAllTask();
}

/////////// End DB Population ////////////////

///////////  Retrieve All Task ////////////////

function retrieveAllTask() {
	
	console.log('Start retrive all task transaction.');
	db.transaction(retrieveAllTaskTransaction);
	
}

function retrieveAllTaskTransaction(tx) {
	tx.executeSql('SELECT * FROM TASKS',[], retrieveAllTaskSuccess, retrieveAllTaskError);	
}

function retrieveAllTaskSuccess( tx , results ) {
	
	var len = results.rows.length;
    console.log("Tasks amount: "+ len);
	
	if( len == 0 )
	{
		$('#listContainer').html('Yippee, No Tasks!');	
	}
	else
	{
		$('#listContainer').html('');
		var ul = $("<ul data-role='listview'></ul>");	
	
        for (var i=0; i<len; i++){
            $(ul).append("<li>" + results.rows.item(i).data + "</li>");
        }
		
		$('#listContainer').html(ul).trigger('create');
		
		
	}
}

function retrieveAllTaskError( err ) {
	navigator.notification.alert("Error processing SQL: "+err.code);
}

/////////// End Retrieve All Task ////////////////



/////////// Add Task  ////////////////

function btnAddTask_Handler( event, data ) {
	console.log('Start insert new task transaction.');
	db.transaction(addTaskTransaction);
}

function addTaskTransaction(tx) {
	
	var taskName = $('#txiTaskName').val();
	console.log('New task name: ' + taskName );
	
	tx.executeSql('INSERT INTO TASKS (data) VALUES (?)', [taskName], addTaskSuccess, addTaskError);
}

function addTaskSuccess(tx, results) {
	console.log('Add task succeed.');
	$('#txiTaskName').val('');
	retrieveAllTask();
}

function addTaskError( err ) {
	navigator.notification.alert("Error processing SQL: "+err.code);
}

/////////// End Add Task  ////////////////