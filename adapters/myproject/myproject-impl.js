var loginStatement = WL.Server.createSQLStatement("select * from userinfo where userid=? and password=? and status='y'");
function login(username, password) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : loginStatement,
		parameters : [username, password]
	});
}
var loadCustListStatement = WL.Server.createSQLStatement("select * from userinfo order by UNAME, CONTACTNO");
function loadCustList() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : loadCustListStatement,
		parameters : []
	});
}
var authorizeStatement = WL.Server.createSQLStatement("update userinfo set status='y' where userid=?");
function authorize(cid) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : authorizeStatement,
		parameters : [cid]
	});
}

 
var procedure1Statement = WL.Server.createSQLStatement("insert into userinfo(userid,password,uname,address,city,contactno,balance,status) values (?,?,?,?,?,?,?,?)");
function procedure1(a,b,c,d,e,f,g,h) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [a,b,c,d,e,f,g,h]
	});
}

var procedure2Statement = WL.Server.createSQLStatement("insert into item_det(itemname,brand,weight,price) values (?,?,?,?)");
function procedure2(a,b,c,d) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure2Statement,
		parameters : [a,b,c,d]
	});
}


var procedure3Statement = WL.Server.createSQLStatement("insert into sale_info(sdate,tamount,uid,description,smode) values (?,?,?,?,?)");
function procedure3(a,b,c,d,e) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure3Statement,
		parameters : [a,b,c,d,e]
	});
}
var procedure4Statement = WL.Server.createSQLStatement("insert into payments(uid,pdate,amount) values (?,?,?)");
function procedure4(a,b,c) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure4Statement,
		parameters : [a,b,c]
	});
}

var purchasesStatement = WL.Server.createSQLStatement("select * from sale_info where sid=? and sdate=?");
function purchases(sid,sdate) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : purchasesStatement,
		parameters : [sid,sdate]
	});
}
var loadPurchasesStatement = WL.Server.createSQLStatement("select * from sale_info where uid like ?");
function loadPurchases(sid) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : loadPurchasesStatement,
		parameters : [sid]
	});
}
var loadPaymentsStatement = WL.Server.createSQLStatement("select * from payments where uid=?");
function loadPayments(sid) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : loadPaymentsStatement,
		parameters : [sid]
	});
}


var loadUPDatesStatement = WL.Server.createSQLStatement("select distinct(sdate) from sale_info where uid=?");
function loadUPDates(sid) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : loadUPDatesStatement,
		parameters : [sid]
	});
}
var getSaleByIdStatement = WL.Server.createSQLStatement("select * from sale_info where sid=?");
function getSaleById(sid) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : getSaleByIdStatement,
		parameters : [sid]
	});
}

var loadItemIdsStatement = WL.Server.createSQLStatement("select * from item_det order by itemname, weight");
function loadItemIds() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : loadItemIdsStatement,
		parameters : []
	});
}

var paymentsStatement = WL.Server.createSQLStatement("select * from payments where pid=? and pdate=?");
function payments(pid, pdate) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : paymentsStatement,
		parameters : [pid,pdate]
	});
}

var saveOrderStatement = WL.Server.createSQLStatement("insert into SALE_INFO(SDATE, TAMOUNT, UID, DESCRIPTION, SMODE) values (?,?,?,?,?)");
function saveOrder(desc, ttype, cid, famt, sdate) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : saveOrderStatement,
		parameters : [sdate, famt, cid, desc, ttype]
	});
}
