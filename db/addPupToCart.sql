insert into cart(puppies_id, quantity)
values ($1, $2);
select * from cart 
join puppies on cart.puppies_id = puppies.id 
order by puppies_id