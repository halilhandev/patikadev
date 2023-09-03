1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

## *Cevaplar* ##

1. ```
   CREATE TABLE employee (
	 id SERIAL,
	 name VARCHAR(50),
	 birthday DATE,
	 email VARCHAR(100)
   )
2. ```
   insert into employee (name, birthday, email) values ('Joline', '1964-02-04', 'jgricks0@pagesperso-orange.fr');
                                                   .
                                                   .
                                                   .
   insert into employee (name, birthday, email) values ('Danice', '1994-05-22', 'dchesshyre1d@cam.ac.uk');
3. ```
    UPDATE employee
    SET name = 'Albertos',
      birthday = '1980-02-02',
      email = 'albert@hotmail.com'
    WHERE id = 1;
    
    UPDATE employee
    SET name = 'Alberto',
      birthday = '1981-01-01',
      email = 'albert1@hotmail.com'
    WHERE id = 2;
    
    UPDATE employee
    SET name = 'Albert',
      birthday = '1983-01-01',
      email = 'alberta@hotmail.com'
    WHERE id = 3;
    
    UPDATE employee
    SET name = 'Albertos',
      birthday = '1985-01-01',
      email = 'albertant@hotmail.com'
    WHERE id = 4;
    
    UPDATE employee
    SET name = 'Albertos Cumos',
      birthday = '1988-01-01',
      email = 'albert123@hotmail.com'
    WHERE id = 5;

4. ```
    DELETE FROM employee
    WHERE id = 1;
    DELETE FROM employee
    WHERE id = 2;
    DELETE FROM employee
    WHERE id = 3;
    DELETE FROM employee
    WHERE id = 4;
    DELETE FROM employee
    WHERE id = 5

## *İbrahim Halil HAN* ##


