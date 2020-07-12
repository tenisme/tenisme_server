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

// 전체 셀렉트 문장
// let select_query = 'select * from shirts'
// connection.query(select_query, function(error, results, fields){
//     console.log(results);
// });

// shirts table 실습문제 1 : 셔츠 데이터를 맨 처음부터 20개만 조회하여, article과 color를 출력하시오.
// let select_query = 'select article, color from shirts limit 20'
// connection.query(select_query, function(error, results, fields){

//     for(let i = 0; i < results.length; i++){
//         console.log(results[i]);
//     }

// });

// shirts table 실습문제 2 : 다음 데이터를 테이블에 인서트하시오
// Purple polo shirt, size M last worn 50 days ago
// let insert_query = 'insert into shirts values (default,"polo shirt","Purple","M",50)'
// connection.query(insert_query, function(error,result){
//     console.log(result);
// });

// shirts table 실습문제 3 : 사이즈가 M인 셔츠의 데이터를 조회하시오
// let select_query = 'select * from shirts where shirt_size = ?'
// connection.query(select_query, ["M"], function(error, results, fields){
//     for(let i = 0; i < results.length; i++){
//         console.log(results[i].shirt_id); // ★ 조회한 테이블의 "특정 컬럼"의 "데이터"만 뽑아오고 싶으면 여기서 그 "컬럼의 이름"을 . 뒤에 적어준다. 자동 완성은 안됨.
//     }
// });

// shirts table 실습문제 4 : 모든 polo shirt의 사이즈를 L로 바꾸시오
// let update_query = 'update shirts set shirt_size = ? where article = ?'
// connection.query(update_query, ["L","polo shirt"], function(error, results, fields){
//     console.log(results);
// });

// shirts table 실습문제 5 : 마지막으로 입은 날짜(last_worn)가 15일인 셔츠를, last_worn을 0으로 바꾸시오
// let update_query = 'update shirts set last_worn = ? where last_worn = ?'
// connection.query(update_query, [0,15], function(error, results, fields){
//     console.log(results);
// });

// shirts table 실습문제 6 : 'Orange'색깔의 셔츠를, 사이즈는 'XS'로 바꾸고 컬러는 'off white'로 바꾸시오.
// let update_query = 'update shirts set shirt_size = ?, color = ? where color = ?'
// connection.query(update_query, ["XS","off white","Orange"], function(error, results, fields){
//     console.log(results);
// });

// shirts table 실습문제 7 : 입은지 200일인 오래된 셔츠들은 삭제하시오.
// let delete_query = 'delete from shirts where last_worn = ?'
// connection.query(update_query, [200], function(error, results, fields){
//     console.log(results);
// });

// shirts table 실습문제 8 : 탱크탑 셔츠를 삭제하시오
// let delete_query = 'delete from shirts where article = ?'
// connection.query(update_query, ["tank top"], function(error, results, fields){
//     console.log(results);
// });

// users table 실습문제 1 : 유저 데이터를 30개만 가져와서, 이메일 주소와 날짜를 출력하시오.
// let select_query = 'select * from users limit ?'
// connection.query(select_query, [30], function(error, results, fields){
//     console.log(results);
// });

// users table 실습문제 2 : 가장 먼저 회원가입한 사람의 이메일과 가입일을 출력하시오.
// let select_query = 'select * from users order by created_at asc limit ?' // min() 써도 됨!!
// connection.query(select_query, [1], function(error, results, fields){
//     console.log(results);
    // console.log(results[0].email+" "+result[0].created_at.toString()); 이렇게 적어도 됨!! .toString을 적지 않은 상태(날짜 데이터인 상태)에서는 다양한 것을 해볼 수 있다.
// });

// users table 실습문제 3 : 각 월별로 몇명이 회원가입을 했는지, 옆의 예를 참고하여 조회하시오.
// let select_query = 'select monthname(created_at) as month, count(*) as count from users group by month order by count desc'
// connection.query(select_query, function(error, results, fields){
//     console.log(results);
// });

// users table 실습문제 4 : yahoo를 사용하는 사람 중, 최근에 회원가입한 사람으로 20명만 조회하시오.
// let select_query = 'select * from users where email like ? order by created_at desc limit ?'
// connection.query(select_query, ["%yahoo%",20], function(error, results, fields){
//     console.log(results);
// });

// users table 실습문제 5: yahoo를 사용하는 사람은 몇명인지 조회하시오.
// let select_query = 'select count(*) from users where email like ?' // ★ count(*)는 as ~로 별명을 붙여줘야 한다. 나중에 json으로 쿼리를 처리할 때 (*)에서 에러가 나기 때문이다.
// connection.query(select_query, ["%yahoo%"], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 1 : 작가의 fname과 lname을 합쳐서, full_name이라는 컬럼으로 조회하시오.
// let select_query = 'select concat(author_fname, " ", author_lname) as full_name from books'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 2 : 다음처럼 조회하시오
// let select_query = 'select concat(substring(title, 1, 10), "...") as "short title" from books'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 3 : 다음처럼 나오도록 조회하시오
// let select_query = 'select concat(title, " was released in ", released_year) as "blurb" from books'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 4 : 다음처럼 나오도록 조회하시오
// let select_query = 'select title, char_length(title) as "character count" from books'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 5 : 다음 인서트문을 노드에서 작성하시오.
// let insert_query = 'insert into books values \
//         (default, "10% Happier", "Dan", "Harris", 2014, 29, 256), \
// 		(default, "fake_book", "Freida", "Harris", 2001, 287, 428), \
//         (default, "Lincoln In The Bardo", "George", "Saunders", 2017, 1000, 367)'
// connection.query(insert_query, function(error,result){
//     console.log(result);
// });

// books table 실습문제 6 : 최근에 발간된 책으로, 타이틀과 발간년도를 조회하되, 5권만 조회하시오.
// let select_query = 'select title, released_year from books order by released_year desc limit 5'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 7 : 책 페이지 수가 가장 많은 책의 타이틀과 페이지 수를 조회하시오.
// let select_query = 'select title, pages from books order by pages desc limit 1'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 8 : 책 타이틀에 'the'가 들어간 책은 몇 권인지 조회하시오.
// let select_query = 'select count(*) from books where title like "%the%"'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 9 : 년도별로, 책이 몇 권씩 출간되었는지, 해당 년도와 책 수를 조회하시오.
// let select_query = 'select released_year, count(*) from books group by released_year order by released_year'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

// books table 실습문제 10 : 다음처럼 조회하시오.
// let select_query = 'select released_year as year, count(*) as "# books", avg(pages) as "avg pages" \
//                     from books group by year order by year'
// connection.query(select_query, [], function(error, results, fields){
//     console.log(results);
// });

connection.end();