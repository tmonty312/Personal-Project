update cart
set quantity = $1
where puppies_id = $2;
select * from cart
join puppies on cart.puppies_id = puppies.id
order by puppies_id;