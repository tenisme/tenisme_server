-- 200714 교재 연계 실습
use my_test;

select * from users;
desc users;

alter table users add age int;
-- 컬럼을 추가/변경하면서 널값에 데이터를 추가하고 싶을 때는 ★not null default 값★
alter table users modify age int not null default 0;
alter table users drop age; -- 콤마로 여러개 안 지워짐.
alter table users drop profile_url; -- 데이터 날아가면 끝이니까 매우 조심하자. 주기적으로 데이터 덤프 떠놓긴 하지만 그래도 조심하자.

-- profile_url 컬럼 추가 디폴트로 "http://mycompany.com"
-- 추가되면서 자동으로 디콜트값이 들어가도록 하기
alter table users add profile_url varchar(200) not null default "http://mycompany.com";
-- profile_url 컬럼의 디폴트값이 http://mycompany.co.kr로 바뀌었다.
alter table users modify profile_url varchar(200) not null default "http://mycompany.co.kr";
	-- 기존 데이터의 디폴트값은 바뀌지 않고, 새로 들어오는 값부터 적용되는 것에 유의한다. 기존에 들어간 데이터값 변경은 업데이트로 해야한다.

-- users table을 customers로 변경하기
rename table users to customers;
alter table customers rename users;

-- SQL 활용 책 8페이지 실습
create table orders (
	order_id int not null auto_increment primary key, -- 명시되어있지 않아도 테이블 고유의 id값을 갖는 컬럼을 만들어준다.
	order_num varchar(10) not null,
    customer_id int not null,
    order_date date not null,
    order_price int not null,
    city varchar(10) not null,
    completed_date date,
    payment int not null,
    discount int
);
drop table orders;

select * from orders;
desc orders;

alter table orders
change order_num order_number varchar(10);

select * from shirts;
select count(color) from shirts;
select count(distinct color) from shirts; -- 유니크 값이 총 몇개인지를 찾아준다. 중복 제거
select count(shirt_size) from shirts;
select count(distinct shirt_size) from shirts;

create table salaries (
	emp_no int not null,
    salary int not null,
    from_date date not null,
    to_date date,
    primary key (emp_no, from_date)
		-- primary key가 2개가 들어가면, 이 조합을 "키 하나"로 보고 이 조합이 같으면 데이터 인서트가 안 된다.
        -- 둘 중에 하나만 달라도 인서트가 된다. 이런 식으로 하면 한 컬럼에는 같은 키값이 들어갈 수도 있다.
);

select * from salaries;
desc salaries;

insert into salaries (emp_no, salary, from_date)
	values (1002, 4000000, '2017-07-01');

insert into salaries
	values (1003, 4000000, '2007-07-01', null);

-- ★아래는 중요 (복수 레코드 삽입)★
-- ★insert는 한 번만(즉 데이터 여러개 넣을 거면 한번에 insert) 하는 게 좋다!!!★
insert into salaries (emp_no, salary, from_date, to_date) values
	(1004, 2000000, '2012-07-01', '2013-06-30'),
    (1005, 2000000, '2013-07-01', '2014-06-30'),
    (1006, 2000000, '2014-07-01', '2015-06-30');

insert into salaries (emp_no, salary, from_date, to_date) values
	(1002, 2000000, '2012-07-01', '2013-06-30');

-- 예제1) salaries 테이블의 to_date 컬럼을 디폴트값으로 오늘의 년월일로 들어가도록 컬럼을 변경하시오. -- 실무에서 엄청 많이 나오는 문제!!
alter table salaries modify to_date datetime not null default current_timestamp; -- current_timestamp 대신에 now()를 써도 됨. 이 디폴트값을 쓸 때는 데이터타입이 datetime이어야 한다.

select current_date(); -- 오늘의 년월일 조회

-- ★핵심 : 인서트할 때 컬럼명을 명시하지 않을 경우, not null + 디폴트값이 있는 컬럼은 인서트할 때는 default값을 써주면 된다★
-- 인서트할 때 왠만하면 컬럼명을 명시해주는 게 나은 거 같다.
insert into salaries values
	(1002, 2000000, '2012-07-07', default);

-- 서브 쿼리 실습
-- from_date가 가장 큰 날짜의 급여와 날짜를 조회하시오.
-- 1. order by로 만들어본다
select salary, from_date from salaries order by from_date desc limit 1;
-- 2. 서브 쿼리로 만들어본다
-- 2-1. from_date가 가장 큰 날짜를 select
select max(from_date) from salaries;
-- 2-2. select한 것을 조건문(where) 안으로 가져간다
select salary, from_date from salaries where from_date = (select max(from_date) from salaries);