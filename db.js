/*
COMMAND                     - Purpose
show dbs                    - Shows all DBs in your cluster
use <DB_NAME>               - Selects the DB with <DB_NAME>
show collections            - Shows all collections in your currently selected DB
db.<Collection_Name>.find() - Returns all the Entries from <Collection_Name>
+.pretty()                  - Formatted Documents
+.limit(N)                  - Returns N entries
CRUD OPERATIONS SECTION_________________________________
db.<Collection_Name>.insertOne()  - Takes single Entry as arg and adds it to the <Collection_Name>  
db.<Collection_Name>.insertMany() - Takes multiple Entries as arg and adds them to the <Collection_Name>
db.<Collection_Name>.updateOne()  - Takes single Entry as arg and____ it to the <Collection_Name>  
db.<Collection_Name>.updateMany() - Takes multiple Entries as arg and____ them to the <Collection_Name>

FILTER CONDITIONS________________________________________
<Key>:<Value>               - Search by <Key> for <Value>

*/
/*
SELECT * FROM comments WHERE name = 'Taylor Scott' OR name = 'Greyjoy';
db.comments.find({
    name : {
        $in: ['Taylor Scott', 'Greyjoy']
    }
})
//Find posts where like count greater than 20 and has title food
db.posts.find({
    title : "food",
    likes : {
        $gt: 20
    }
})
<KEY> : <Value> || {
        $<OP> : Value || []
        }
*/
