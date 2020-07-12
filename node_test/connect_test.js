// 1. 라이브러리 사용을 위해 변수 선언
let mysql = require("mysql");
// require : 설치한 노드 라이브러리 중에서 mysql이라는 라이브러리를 이 파일에서 사용하겠다는 뜻이다.
    // 사용하려면 변수로 꼭 저장을 시켜줘야 한다.
    // 반드시 라이브러리 이름과 변수 이름을 일치시켜준다.

// 2. 워크벤치에서 커넥션을 create 해줄 때처럼 여기서도 connection을 만들어준다.
// () 안에는 json 형식으로 작성한다.
let connection = mysql.createConnection(
    {
        host : "aws-mysql.c8urw0tytlbj.ap-northeast-2.rds.amazonaws.com", // 접속 경로
        user : "node_user", // 엔드유저이름
        database : "my_test", // database 이름
        password : "비밀번호" // 비밀번호
    }
);

// 3. connection.query : 연결된 db를 사용해 쿼리 실행하기
    // 이 시점부터 연결된 상태가 됨.
    // function(error, results, fields){실행문} : 콜백함수. 쿼리문에 대한 결과를 이 함수 안에서 볼 수 있다.
// let insert_query = 'insert into memo (title, comment) values ("hello","nice")' // 자바스크립트의 문자열 처리는 ''로, 쿼리문 안의 문자열은 ""로 처리하면 잘 안 헷갈린다.
// connection.query(insert_query, function(error,result){
//     console.log(result);
// });

// let select_query = 'select * from memo where title like "%h%"'
// connection.query(select_query, function(error, results, fields){
//     console.log(results);
// });

// let select_query = 'select `title` from memo where title like ? and id = ?'
// let q_like = "%he%"
// connection.query(select_query, [q_like, 2], function(error, results, fields){
//     console.log(results);
// });

// 4. 연결 종료
connection.end(); // 이거 써줘야 서버 연결이 끊김. 불러왔으면 종료를 꼭 해야됨. 이거 열라 중요함.

