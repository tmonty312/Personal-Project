insert into cart(puppies_id)
values ($1);
select * from cart 
join puppies on cart.puppies_id = puppies.id 
order by puppies_id