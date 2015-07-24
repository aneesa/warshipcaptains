module.exports = {

	// the database url to connect
	localurl : 'mongodb://localhost/',
	url : 'mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/',
	dbname : 'warshipcaptains'
}
