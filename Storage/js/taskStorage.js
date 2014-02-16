// JavaScript Document

var db;

function runDB() {

	// Open/Create database
	
	// start transaction: create db
	
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
    
	
}

/////////// End DB Population ////////////////

///////////  Retrieve All Task ////////////////

function retrieveAllTask() {
	
	console.log('Start retrive all task transaction.');
	
	// Start retrieve all task transaction
	
}

function retrieveAllTaskTransaction(tx) {
	
	// execute Sql SELECT * FROM TASKS with zero-parameter.
		
}

function retrieveAllTaskSuccess( tx , results ) {
	
	var len;
    
	
	if( len == 0 )
	{
		// show no task
	}
	else
	{
		/*
		$('#listContainer').html('');
		var ul = $("<ul data-role='listview'></ul>");	
	
        for (var i=0; i<len; i++){
            $(ul).append("<li>" + results.rows.item(i).data + "</li>");
        }
		
		$('#listContainer').html(ul).trigger('create');
		*/
	}
}

function retrieveAllTaskError( err ) {
	navigator.notification.alert("Error processing SQL: "+err.code);
}

/////////// End Retrieve All Task ////////////////



/////////// Add Task  ////////////////

function btnAddTask_Handler( event, data ) {
	console.log('Start insert new task transaction.');
	// Start transaction Add task
}

function addTaskTransaction(tx) {
	
	// Get task's name
	console.log('New task name: ' + taskName );
	
	
	//tx.executeSql('INSERT INTO TASKS (data) VALUES (?)', [taskName], addTaskSuccess, addTaskError);
}

function addTaskSuccess(tx, results) {
	console.log('Add task succeed.');
	// Clear input
	// Reload task
}

function addTaskError( err ) {
	navigator.notification.alert("Error processing SQL: "+err.code);
}

/////////// End Add Task  ////////////////